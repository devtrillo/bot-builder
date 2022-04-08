import { Dispatch, SetStateAction } from "react";
import { Node } from "react-flow-renderer";

import { Dropdown, DropdownItem } from "@/components/Dropdown";
import getMaxValue from "@/utils/getMaxValue";
import getMiddleValue from "@/utils/getMiddleValue";

const getNodeId = () => `randomnode_${+new Date()}`;

const getNewPosition = (list: Node[]) => {
  const getPositionX = (list: Node[]) => list.map((node) => node.position.x);
  const getPositionY = (list: Node[]) => list.map((node) => node.position.y);

  const x = getPositionX(list);
  const y = getPositionY(list);
  return { x: getMiddleValue(x), y: Math.round(getMaxValue(y) + 50) };
};

export type AddNodeProps = {
  setNodes: Dispatch<SetStateAction<Node[]>>;
};

export const AddNode = ({ setNodes }: AddNodeProps) => {
  const addNode = (type: string) => {
    setNodes((nds) => {
      const { x, y } = getNewPosition(nds);
      const newNode = {
        data: { label: "New Node" },
        id: getNodeId(),
        position: { x, y },
        type,
      };
      return [...nds, newNode];
    });
  };

  return (
    <Dropdown label="Dropdown button">
      <DropdownItem onClick={() => addNode("input")}>Input Node</DropdownItem>
      <DropdownItem onClick={() => addNode("")}>Regular Node</DropdownItem>
      <DropdownItem onClick={() => addNode("output")}>Output Node</DropdownItem>
    </Dropdown>
  );
};
