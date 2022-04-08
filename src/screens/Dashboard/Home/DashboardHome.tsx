import cx from "classnames";
import { collection, FieldValue, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";

import { Card } from "@/components/Card";
import CreateBotModal from "@/components/CreateBotModal/CreateBotModal";
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

  const q = query(
    collection(firestore, "bots"),
    where("user", "==", user?.uid ?? "")
  );
  const [botSnapshot] = useCollection(q);

  return (
    <div>
      <h1>Dashboard Home</h1>
      <section className={cx("mt-10 gap-3", style.container)}>
        {botSnapshot?.docs.map((doc) => {
          const { name, description } = doc.data();
          const id = doc.id;
          return (
            <Link key={name} to={`/dashboard/${id}`}>
              <Card
                animate
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
          );
        })}
      </section>
      <CreateBotModal />
    </div>
  );
}

export default DashboardHome;
