import { signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import { prop } from "ramda";
import { FormEvent, useState } from "react";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";

import { Alert } from "@/components/Alert";
import { Button } from "@/components/Button";
import { Label, TextInput } from "@/components/FormControls";
import { ModalBody } from "@/components/Modal";
import { ModalHeader } from "@/components/Modal/Header";
import { Modal } from "@/components/Modal/Modal";
import useToggle from "@/hooks/useToggle";
import { auth } from "@/utils/firebase";
import handleChange from "@/utils/handleChange";

function codeToError(code: string): string {
  switch (code) {
    case "auth/weak-password":
      return "Password is too weak, please make it at least 15 characters long";
    default:
      return "Unknown error";
  }
}

function ChangePassword() {
  const [show, toggleShow] = useToggle();

  const [error, setError] = useState<string | null>(null);
  const [user] = useAuthState(auth);
  const [updatePassword, , updatingError] = useUpdatePassword(auth);
  const [formValues, setFormValues] = useState({
    confirmPassword: "",
    currentPassword: "",
    newPassword: "",
  });
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.newPassword !== formValues.confirmPassword)
      return setError("Passwords do not match");
    if (formValues.newPassword.length < 15)
      return setError("Password must be at least 15 characters long");
    if (!user) return;
    await signInWithEmailAndPassword(
      auth,
      user.email as string,
      formValues.currentPassword
    );
    await updatePassword(formValues.newPassword);
    setError(null);
  };

  return (
    <>
      <Button color="alternative" onClick={toggleShow}>
        Change Password
      </Button>
      <Modal popup show={show} onClose={toggleShow}>
        <ModalHeader>Change Password</ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <Label className="mb-2 block" htmlFor="current-password">
              Current Password
            </Label>
            <TextInput
              id="current-password"
              name="currentPassword"
              type="password"
              onChange={handleChange(setFormValues)}
            />
            <Label className="mb-2 block" htmlFor="new-password">
              New Password
            </Label>
            <TextInput
              id="new-password"
              name="newPassword"
              type="password"
              onChange={handleChange(setFormValues)}
            />
            <Label className="mb-2 block" htmlFor="confirm-password">
              New Password
            </Label>
            <TextInput
              id="confirm-password"
              name="confirmPassword"
              type="password"
              onChange={handleChange(setFormValues)}
            />
            <p>Use a password at least 15 letters long.</p>
            <Button className="mb-5" type="submit">
              Change password
            </Button>

            <motion.div
              animate={{
                height: error || updatingError?.message ? 64 : 0,
                opacity: error || updatingError?.message ? 1 : 0,
              }}
              className="overflow-hidden"
              initial={false}
            >
              <Alert color="red">
                {error || codeToError(prop("code", updatingError as any))}.
              </Alert>
            </motion.div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ChangePassword;
