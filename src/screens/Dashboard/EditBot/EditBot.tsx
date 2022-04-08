import { doc } from "firebase/firestore";
import { useEffect } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useEdgesState, useNodesState } from "react-flow-renderer";
import { useParams } from "react-router-dom";

import { firestore } from "@/utils/firebase";

function EditBot() {
  const { botId } = useParams();
  const botRef = doc(firestore, `bots/${botId}`);
  const [docData, loading] = useDocumentData(botRef);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (!loading && docData) {
      console.log("HELLO");
      const { nodes, edges } = docData;
      setNodes(nodes ?? []);
      setEdges(edges ?? []);
    }
  }, [loading, docData, setNodes, setEdges]);
  return (
    <div>
      <h1>Edit Bot: {botId}</h1>
    </div>
  );
}
export default EditBot;
