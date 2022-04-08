import { doc, getDoc, writeBatch } from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";

import { Button } from "@/components/Button";
import ChangePassword from "@/components/ChangePassword";
import { TextInput } from "@/components/FormControls";
import useDebounce from "@/hooks/useDebounce";
import { auth, firestore } from "@/utils/firebase";

export default function Account() {
  const [dirty, setDirty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [updateProfile] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 1000);

  useEffect(() => {
    const isDirty = username !== (user?.displayName ?? "");
    setDirty(isDirty);
  }, [username, user, setDirty]);

  useEffect(() => {
    async function checkForUsername() {
      if (debouncedUsername.length <= 3) return;

      const ref = doc(firestore, `usernames/${debouncedUsername}`);
      const docSnap = await getDoc(ref);

      if (!docSnap.exists()) return true;
      throw new Error("Username is already taken");
    }
    setIsLoading(true);
    checkForUsername()
      .then(() => setIsValid(true))
      .catch((e) => {
        console.error(e);
        setIsValid(false);
      })
      .finally(() => setIsLoading(false));
  }, [debouncedUsername]);

  const getColor = () => {
    if (isLoading) return "base";
    if (username.length <= 3) return "base";
    if (isValid) return "green";
    if (!isValid) return "red";
    return "base";
  };

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const regex = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    if (value.length < 3) {
      setUsername(value);
      setIsLoading(true);
      setIsValid(false);
      return;
    }
    if (value.match(regex)) {
      setUsername(value);
      setIsLoading(true);
      setIsValid(false);
    }
  };
  const saveUsername = async () => {
    const origUserDoc = doc(firestore, `usernames/${user?.displayName}`);
    const userDoc = doc(firestore, `users/${user?.uid}`);
    const usernameDoc = doc(firestore, `usernames/${username}`);

    const batch = writeBatch(firestore);
    batch.set(userDoc, { username });
    batch.set(usernameDoc, { uid: user?.uid });
    if (user?.displayName) {
      batch.delete(origUserDoc);
    }
    await batch.commit();
    await updateProfile({ displayName: username });
    setUsername("");
  };

  const saveChanges = async () => {
    if (username !== user?.displayName) {
      await saveUsername();
    }
  };

  const userNameColor = getColor();
  return (
    <>
      <h1>Account</h1>
      <h2>How do you like to be called?</h2>
      <TextInput
        className="mt-2"
        color={userNameColor}
        helperText={
          userNameColor === "green"
            ? "Username is available"
            : userNameColor === "red"
            ? "Username is taken"
            : ""
        }
        id="username"
        name="username"
        placeholder={user?.displayName ?? "Your awesome username"}
        type="text"
        value={username}
        onChange={onChangeUsername}
      />
      <h2 className="mt-4">Email</h2>
      <p>{user?.email}</p>
      {user?.providerData.filter(
        ({ providerId }) => providerId === "password"
      )?.[0] ? (
        <>
          <h2 className="mt-4">Password</h2>
          <ChangePassword />
        </>
      ) : null}
      <Button className="mt-10" disabled={!dirty} onClick={saveChanges}>
        Save changes
      </Button>
    </>
  );
}
