import React, { useState } from 'react';
import styles from './LetterInputGuess.module.css';

interface LetterInputProps {
    name: string
    setUserInputValue: (userInputValue: string) => void
};

const LetterInputGuess: React.FC<LetterInputProps> = ({ name, setUserInputValue }) => {

    const [inputValue, setInputValue] = useState("");

    function handleInputValue(inputValue: string) {
        const uppercasedInputValue = inputValue.toUpperCase();
        const onlyCapitalizedLetterRegex = new RegExp(/[A-Z]/);

        if (!onlyCapitalizedLetterRegex.test(uppercasedInputValue)) {
            setInputValue("");
            setUserInputValue("");
            return;
        };

        setInputValue(uppercasedInputValue);
        setUserInputValue(uppercasedInputValue);
    };

    return <input value={inputValue} className={styles.letterInputGuess} type="text" name={name} autoComplete="off" maxLength={1} onChange={(e) => { handleInputValue(e.target.value); }}/>
};

export default LetterInputGuess;