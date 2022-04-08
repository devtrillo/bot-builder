import { min } from "ramda";

const getMinValue = (list: number[]): number => list.reduce(min, 0);

export default getMinValue;
