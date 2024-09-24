export interface ISecretWord {
    word: string
    tip: string
};

const secretWords: ISecretWord[] = [
    { word: "TYPESCRIPT", tip: "Linguagem de programação" },
    { word: "BANANA", tip: "Fruta" },
    { word: "OUTONO", tip: "Estação do ano" },
    { word: "CHOCOLATE", tip: "Páscoa" },
    { word: "MOTOCICLETA", tip: "Veículo" },
    { word: "INSTAGRAM", tip: "Rede Social" },
    { word: "RELOGIO", tip: "Acessório" },
    { word: "LASANHA", tip: "Comida" },
    { word: "EUROPA", tip: "Continente" },
    { word: "CHILE", tip: "País da américa do sul" },
    { word: "SATURNO", tip: "Planeta" }
];

export default secretWords;