import cx from "classnames";
import { collection, FieldValue, query, where } from "firebase/firestore";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";

import { Card } from "@/components/Card";
import CreateBotModal from "@/components/CreateBotModal/CreateBotModal";
import { TextInput } from "@/components/FormControls";
import { useVariants } from "@/hooks/useVariants";
import { auth, firestore } from "@/utils/firebase";

import style from "./DashboardHome.module.css";

export interface Bot {
  name: string;
  description: string;
  createdAt: FieldValue;
  updatedAt: FieldValue;
  user: string;
  id?: string;
}

function DashboardHome() {
  const [user] = useAuthState(auth);

  const [filter, setFilter] = useState("");
  const [, setFilteredBots] = useState<Bot[]>([]);

  const q = query(
    collection(firestore, "bots"),
    where("user", "==", user?.uid ?? "")
  );
  const [botSnapshot, loading] = useCollection(q);
  const filteredBots = useMemo(
    () =>
      botSnapshot?.docs
        .filter((doc) => {
          const data = Object.values({ ...doc.data(), id: doc.id })
            .join("|")
            .toLowerCase();
          return data.includes(filter.toLowerCase());
        })
        .map((doc) => ({ ...doc.data(), id: doc.id } as Bot)) ?? [],
    [filter, botSnapshot?.docs]
  );

  useEffect(() => {
    if (botSnapshot?.docs)
      setFilteredBots(
        botSnapshot.docs.map((doc) => ({ ...(doc.data() as Bot), id: doc.id }))
      );
  }, [botSnapshot]);
  const cardVariants = useVariants({
    exit: (i: number) => {
      console.log(i);
      return { opacity: 0, transition: { duration: 0.2 } };
    },
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.2 },
    }),
  });
  const containerVariants = useVariants({
    exit: { opacity: 0, width: 0 },
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  });

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="relative">
        <h1>Dashboard Home</h1>
        <TextInput
          placeholder="Bot filter"
          value={filter}
          onChange={onChangeFilter}
        />
        <AnimatePresence>
          {loading ? (
            <motion.div
              key={0}
              animate="visible"
              className={cx("mt-10 gap-3 absolute", style.container)}
              custom={0}
              exit="exit"
              initial="hidden"
              variants={cardVariants}
            >
              <Card
                horizontal
                imgSrc="https://avatars.dicebear.com/api/bottts/loading.svg"
              >
                <div>
                  <div className="w-36 bg-slate-700 h-6 rounded-md opacity-25 animate-pulse" />
                  <div className="w-full bg-slate-700 h-6 rounded-md opacity-25 mt-5 animate-pulse" />
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.section
              animate="visible"
              className={cx("mt-10 gap-3", style.container)}
              exit="exit"
              initial="hidden"
              variants={containerVariants}
            >
              {filteredBots.map((doc, index) => {
                const { name, description, id } = doc;
                return (
                  <motion.div key={name} custom={index} variants={cardVariants}>
                    <Link to={`/dashboard/${id}`}>
                      <Card
                        horizontal
                        imgSrc={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
                      >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          {description}
                        </p>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
      <CreateBotModal />
    </>
  );
}

export default DashboardHome;
