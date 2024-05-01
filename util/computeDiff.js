import { diff } from "jest-diff";

// https://www.npmjs.com/package/jest-diff
const getDiff = (textA, textB) => {
    const textDiff = diff(textA, textB);
}

export default getDiff;