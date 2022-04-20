import { ReactFlowState, useStore } from "react-flow-renderer";

const lockedSelector = ({
  nodesDraggable,
  nodesConnectable,
  elementsSelectable,
}: ReactFlowState) =>
  nodesDraggable === false &&
  nodesConnectable === false &&
  elementsSelectable === false;

const useIsReactFlowLocked = () => useStore(lockedSelector);

export default useIsReactFlowLocked;
