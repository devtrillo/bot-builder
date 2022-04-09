import { Edge, MarkerType, Node } from "react-flow-renderer";

export const nodes: Node[] = [
  {
    data: {
      label: (
        <>
          Welcome to <strong>React Flow!</strong>
        </>
      ),
    },
    id: "1",
    position: { x: 250, y: 0 },
    type: "input",
  },
  {
    data: {
      label: (
        <>
          This is a <strong>default node</strong>
        </>
      ),
    },
    id: "2",
    position: { x: 100, y: 100 },
  },
  {
    data: {
      label: (
        <>
          This one has a <strong>custom style</strong>
        </>
      ),
    },
    id: "3",
    position: { x: 400, y: 100 },
    style: {
      background: "#D6D5E6",
      border: "1px solid #222138",
      color: "#333",
      width: 180,
    },
  },
  {
    data: {
      label: "Another default node",
    },
    id: "4",
    position: { x: 250, y: 200 },
  },
  {
    data: {
      label: "Node id: 5",
    },
    id: "5",
    position: { x: 250, y: 325 },
  },
  {
    data: {
      label: (
        <>
          An <strong>output node</strong>
        </>
      ),
    },
    id: "6",
    position: { x: 100, y: 480 },
    type: "output",
  },
  {
    data: { label: "Another output node" },
    id: "7",
    position: { x: 400, y: 450 },
    type: "output",
  },
];

export const edges: Edge[] = [
  { id: "e1-2", label: "this is an edge label", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  {
    animated: true,
    id: "e3-4",
    label: "animated edge",
    source: "3",
    target: "4",
  },
  {
    id: "e4-5",
    label: "edge with arrow head",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    source: "4",
    target: "5",
  },
  {
    id: "e5-6",
    label: "smooth step edge",
    source: "5",
    target: "6",
    type: "smoothstep",
  },
  {
    animated: true,
    id: "e5-7",
    label: "a step edge",
    labelStyle: { fill: "#f6ab6c", fontWeight: 700 },
    source: "5",
    style: { stroke: "#f6ab6c" },
    target: "7",
    type: "step",
  },
];
