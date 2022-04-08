import getMaxValue from "./getMaxValue";
import getMinValue from "./getMinValue";

const getMiddleValue = (list: number[]): number => {
  const max = getMaxValue(list);
  const min = getMinValue(list);
  return Math.round((max - min) / 2 + min);
};

export default getMiddleValue;
