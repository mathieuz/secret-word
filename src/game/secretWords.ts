export interface ISecretWord {
    word: string
    tip: string
};

const secretWords: ISecretWord[] = [
    { word: "TYPESCRIPT", tip: "Linguagem de programação" },
    { word: "BANANA", tip: "Fruta" },
    { word: "OUTONO", tip: "Estação do ano" },
    { word: "CHOCOLATE", tip: "Páscoa" },
    { word: "MOTOCICLETA", tip: "Veículo" }
];

export default secretWords;