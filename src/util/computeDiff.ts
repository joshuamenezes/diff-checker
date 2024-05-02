import { diff } from "jest-diff";

// https://www.npmjs.com/package/jest-diff
const getDiff = (textA: string | null, textB: string | null): string | null => {
    const textDiff = diff(textA, textB);

    return textDiff;
}

export default getDiff;