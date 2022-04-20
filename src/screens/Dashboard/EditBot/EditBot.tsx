import "./style.css";

import { MouseEvent, useEffect } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "react-flow-renderer";
import { useParams } from "react-router-dom";

import { CustomEdge } from "@/components/FlowDiagrams";
import { useBot } from "@/hooks/useBot";

import { edges as initialEdges, nodes as initialNodes } from "./intialNodes";

const edgeTypes = {
  customEdge: CustomEdge,
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
  }, []);
  useEffect(() => {
    const reset = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        setNodes([]);
        setEdges([]);
      }
    };
    window.addEventListener("keydown", reset);
    return () => {
      window.removeEventListener("keydown", reset);
    };
  }, [setEdges, setNodes]);

  const removeEdge = (e: MouseEvent, edge: Edge) => {
    e?.preventDefault();
    setEdges((edges) => edges.filter((ed) => ed.id !== edge.id));
  };

  const onConnect = (params: Connection) => {
    setEdges((eds) => addEdge({ ...params, type: "customEdge" }, eds));
  };

  return (
    <div className="w-full h-full ">
      <h1>Edit Bot: {botData?.name}</h1>
      <ReactFlow
        fitView
        attributionPosition="top-right"
        edges={edges}
        edgeTypes={edgeTypes}
        nodes={nodes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
      >
        <Background />
        <Controls />
        <MiniMap
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
