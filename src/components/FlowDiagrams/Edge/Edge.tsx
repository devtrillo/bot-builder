import { CSSProperties, MouseEvent } from "react";
import { getBezierPath, getEdgeCenter, Position } from "react-flow-renderer";

import useIsReactFlowLocked from "@/hooks/useIsReactFlowLocked";

import edgeStyle from "./edge.module.css";
const foreignObjectSize = 40;

export type ButtonEdgeProps = {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: Position;
  targetPosition: Position;
  style: CSSProperties;
  markerEnd: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  onClick,
  ...rest
}: ButtonEdgeProps) {
  console.log(rest);
  const isLocked = useIsReactFlowLocked();

  const edgePath = getBezierPath({
    sourcePosition,
    sourceX,
    sourceY,
    targetPosition,
    targetX,
    targetY,
  });
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        className="react-flow__edge-path"
        d={edgePath}
        id={id}
        markerEnd={markerEnd}
        style={style}
      />
      <foreignObject
        className={edgeStyle["foreignobject"]}
        height={foreignObjectSize}
        requiredExtensions="http://www.w3.org/1999/xhtml"
        width={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
      >
        {!isLocked ? (
          <div>
            <button className={edgeStyle.edgebutton} onClick={onClick}>
              ×
            </button>
          </div>
        ) : null}
      </foreignObject>
    </>
  );
}
