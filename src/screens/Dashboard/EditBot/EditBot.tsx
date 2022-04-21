import "./style.css";

import { ReactNode, useEffect } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  MiniMap,
  Node,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from "react-flow-renderer";
import { useParams } from "react-router-dom";

import { Button } from "@/components/Button";
import { CustomEdge } from "@/components/FlowDiagrams";
import { useBot } from "@/hooks/useBot";

import { edges as initialEdges, nodes as initialNodes } from "./intialNodes";

const edgeTypes: NodeTypes = {
  customEdge: CustomEdge as unknown as ReactNode,
};

const getNodeColor = (node: Node) => {
  if (node.style?.background) return node.style.background as string;
  switch (node.type) {
    case "input":
      return "#0041d0";
    case "output":
      return "#ff0072";
    default:
      return "#fff";
  }
};

function EditBot() {
  const { botId } = useParams();
  const [botData] = useBot(botId as string);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setEdges(
      initialEdges.map((edge) => {
        if (edge.type === "customEdge")
          return { ...edge, data: { onClick: console.warn } };
        return edge;
      })
    );
    setNodes(
      initialNodes.map((node) => {
        if (node.type === "customNode")
          return { ...node, data: { hello: "world" } };
        return node;
      })
    );
  }, [setEdges, setNodes]);

  const onConnect = (params: Connection) => {
    setEdges((eds) => addEdge({ ...params, type: "customEdge" }, eds));
  };

  return (
    <div className="w-full h-full ">
      <h1>Edit Bot: {botData?.name}</h1>
      <ReactFlow
        fitView
        snapToGrid
        attributionPosition="top-right"
        edges={edges}
        edgeTypes={edgeTypes}
        nodes={nodes}
        snapGrid={[10, 10]}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
      >
        <div className="w-16 bg-green-200 h-full absolute right-0 flex flex-col gap-1">
          <Button> </Button>
        </div>
        <Background />
        <Controls />
        <MiniMap nodeBorderRadius={2} nodeColor={getNodeColor} />
      </ReactFlow>
    </div>
  );
}

export default EditBot;
