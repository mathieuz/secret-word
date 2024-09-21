//Game Components
import secretWords, { ISecretWord } from "../secretWords";

export default function getRandomWordData() {
    const secretWord: ISecretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    return secretWord;
};