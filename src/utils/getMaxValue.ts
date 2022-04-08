import { max } from "ramda";

const getMaxValue = (list: number[]): number => list.reduce(max, 0);

export default getMaxValue;
