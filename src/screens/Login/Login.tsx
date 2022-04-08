import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FormEvent, useState } from "react";
import { AiOutlineGoogle, AiOutlineInfo } from "react-icons/ai";

import { Alert } from "@/components/Alert";
import { Button } from "@/components/Button";
import { Label, TextInput } from "@/components/FormControls";
import { SEO } from "@/components/SEO";
import withNoAuth from "@/hocs/withNoAuth";
import useToggle from "@/hooks/useToggle";
import { auth, googleAuthProvider } from "@/utils/firebase";
import handleChange from "@/utils/handleChange";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const [error, setError] = useState<string>();
  const [loading, toggleLoading] = useToggle();

  const getErrorMessage = (message: string) => {
    if (message.includes("too-many-requests"))
      return "Too many requests. Please try again later.";
    if (message.includes("auth/wrong-password"))
      return "The password is invalid please try again.";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formValues;
    toggleLoading();
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setError(error.message);
    });
  };
  const authGoogle = () => {
    toggleLoading();
    signInWithPopup(auth, googleAuthProvider).finally(toggleLoading);
  };
  return (
    <div className="mx-auto mt-5 max-w-screen-sm">
      <SEO title="Login" />
      <h1 className="text-center">Log in</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Label className="mb-2 block" htmlFor="email">
            Your email
          </Label>
          <TextInput
            id="email"
            name="email"
            placeholder="name@bot-builder.com"
            required={true}
            shadow={true}
            type="email"
            onChange={handleChange(setFormValues)}
          />
        </div>
        <div>
          <Label className="mb-2 block" htmlFor="password">
            Your password
          </Label>
          <TextInput
            id="password"
            name="password"
            required={true}
            shadow={true}
            type="password"
            onChange={handleChange(setFormValues)}
          />
        </div>
        {error ? (
          <Alert color="red" Icon={AiOutlineInfo}>
            <span>
              <span className="font-medium">Authentication error!</span>{" "}
              {getErrorMessage(error)}
            </span>
          </Alert>
        ) : null}
        <Button loading={loading} type="submit">
          Login
        </Button>
      </form>
      <div className="mt-5 h-1 w-full border-b border-dashed border-gray-700 border-opacity-80" />
      <div className="mx-auto mt-5 flex items-center justify-center gap-3">
        <Button loading={loading} onClick={authGoogle}>
          Login with <AiOutlineGoogle />
        </Button>
      </div>
    </div>
  );
};

export default withNoAuth(Login);
