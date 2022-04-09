import "./style.css";

import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "react-flow-renderer";
import { useParams } from "react-router-dom";

import { firestore } from "@/utils/firebase";

import { edges as initialEdges, nodes as initialNodes } from "./intialNodes";
type BotData =
  | {
      description: string;
      edges: Edge[];
      name: string;
      nodes: Node[];
    }
  | undefined;

const useBot = (id: string): [BotData, boolean] => {
  const botRef = doc(firestore, `bots/${id}`);
  const [docData, loading] = useDocumentData(botRef);
  return [docData as BotData, loading];
};

function EditBot() {
  const { botId } = useParams();
  const [botData] = useBot(botId as string);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-full cursor-not-allowed">
      <h1>Edit Bot: {botData?.name}</h1>
      <ReactFlow
        fitView
        attributionPosition="top-right"
        edges={edges}
        nodes={nodes}
      >
        <Background />
        <Controls
          onInteractiveChange={(interactive) => {
            console.log(interactive);
          }}
        />
        <MiniMap
          className="bg-green-500"
          nodeBorderRadius={2}
          nodeColor={(n): string => {
            if (n.style?.background) return n.style.background as string;

            return "#fff";
          }}
          nodeStrokeColor={(n): string => {
            if (n.style?.background) return n.style.background as string;
            if (n.type === "input") return "#0041d0";
            if (n.type === "output") return "#ff0072";
            if (n.type === "default") return "#1a192b";

            return "#eee";
          }}
        />
      </ReactFlow>
    </div>
  );
}

export default EditBot;
