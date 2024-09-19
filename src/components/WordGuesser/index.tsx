import React from 'react';
import styles from './WordGuesser.module.css';

const WordGuesser: React.FC = () => {
    return(
        <div className={styles.wordGuesserWrapper}>
            <span className={styles.letterSlot}>T</span>
            <span className={styles.letterSlot}>Y</span>
            <span className={styles.letterSlot}>P</span>
            <span className={styles.letterSlot}>E</span>
            <span className={styles.letterSlot}>S</span>
            <span className={styles.letterSlot}>C</span>
            <span className={styles.letterSlot}>R</span>
            <span className={styles.letterSlot}>I</span>
            <span className={styles.letterSlot}>P</span>
            <span className={styles.letterSlot}>T</span>
        </div>
    );
};

export default WordGuesser;