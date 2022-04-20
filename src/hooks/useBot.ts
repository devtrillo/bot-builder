import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Edge } from "react-flow-renderer";

import { firestore } from "@/utils/firebase";

export type BotData =
  | {
      description: string;
      edges: Edge[];
      name: string;
      nodes: Node[];
    }
  | undefined;

export const useBot = (id: string): [BotData, boolean] => {
  const botRef = doc(firestore, `bots/${id}`);
  const [docData, loading] = useDocumentData(botRef);
  return [docData as BotData, loading];
};
