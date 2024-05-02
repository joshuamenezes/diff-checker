const countWordsAndCharacters = (text: string | null): Array<Number> => {
    const characters = text?.length ?? 0;
    const words = (text?.match(/(\w+)/g) ?? []).length; // Ensure words is a number
    return [words ?? 0, characters ?? 0];
};

export default countWordsAndCharacters;
