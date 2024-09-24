export default function setFalseToGuessedLetters(word: string) {
    return word.split("").map(() => { return false; });
};