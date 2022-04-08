import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handleChange =
  <T>(setter: Dispatch<SetStateAction<T>>) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setter((values) => ({ ...values, [name]: value }));
  };
export default handleChange;
