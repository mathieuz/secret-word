import React from 'react';
import styles from './GameScreen.module.css';

const GameScreen: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <h1 className={styles.title}>Adivinhe a Palavra!</h1>    
            </div>
            <div className={styles.row}>
                <span className={styles.text}>Dica sobre a palavra: <span className={styles.wordTip}>Computador</span></span>
            </div>
        </div>
    );
};

export default GameScreen;