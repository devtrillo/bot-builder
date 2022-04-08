import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";

import { Button } from "@/components/Button";
import { auth, storage } from "@/utils/firebase";

export const ProfilePictureForm = () => {
  const [user] = useAuthState(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    if (!file) return;

    const storageRef = ref(storage, `profilePictures/${user?.uid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          updateProfile({ photoURL: url })
        );
        setFile(null);
        setPreviewUrl(null);
      }
    );
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.item(0);
    if (!file) return;
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setFile(file);
    }
  };
  return (
    <form className="flex flex-col justify-start gap-5" onSubmit={onSubmit}>
      {previewUrl ? (
        <div className="">
          <img alt="Preview url" className="rounded-full" src={previewUrl} />
        </div>
      ) : null}
      <label>
        <span className="cursor-pointer rounded-md bg-blue-700 p-3 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600">
          Upload an image
        </span>
        <input accept="image/*" name="file" type="file" onChange={onChange} />
      </label>
      {previewUrl ? (
        <Button type="submit">Save new Profile Picture</Button>
      ) : null}
    </form>
  );
};
