import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FormEvent, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Button";
import { Label, TextInput } from "@/components/FormControls";
import { ModalBody } from "@/components/Modal";
import { ModalHeader } from "@/components/Modal/Header";
import { Modal } from "@/components/Modal/Modal";
import { Bot } from "@/screens/Dashboard/Home/DashboardHome";
import { auth, firestore } from "@/utils/firebase";

function CreateBotModal() {
  const [isOpen, openModal] = useState(false);
  const onClose = () => openModal(false);
  const onOpen = () => openModal(true);
  const [user] = useAuthState(auth);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const addNewBot = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    const ref = collection(firestore, "bots");
    const newBot: Bot = {
      createdAt: serverTimestamp(),
      description,
      name,
      updatedAt: serverTimestamp(),
      user: user?.uid ?? "",
    };
    const newBotID = (await addDoc(ref, newBot)).id;
    onClose();
    navigate(`/dashboard/${newBotID}`);
  };

  const handleChangeName = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleChangeDescription = (e: FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  return (
    <>
      <Button
        className="absolute bottom-5 right-5 shadow-2xl hover:shadow"
        onClick={onOpen}
      >
        Create a new Bot
      </Button>
      <Modal popup={true} show={isOpen} size="md" onClose={onClose}>
        <ModalHeader />
        <ModalBody className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Create a new bot
          </h3>
          <form onSubmit={addNewBot}>
            <Label className="mb-2 block" htmlFor="name">
              Name
            </Label>
            <TextInput
              required
              className="dark:border-gray-500 dark:bg-gray-600"
              id="name"
              placeholder="My awesome bot"
              onChange={handleChangeName}
            />
            <Label className="my-2 block" htmlFor="description">
              The bots description
            </Label>
            <TextInput
              required
              className="dark:border-gray-500 dark:bg-gray-600"
              id="description"
              placeholder="The bots description"
              onChange={handleChangeDescription}
            />

            <div className="flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-300">
              <Button className="mt-5 w-full" disabled={!name} type="submit">
                Create the bot
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default CreateBotModal;
