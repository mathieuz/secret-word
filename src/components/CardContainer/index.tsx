import React, { ReactNode } from 'react';
import styles from './CardContainer.module.css';

interface CardContainerProps {
    children?: ReactNode
};

const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
    return <div className={styles.cardContainer}>{children}</div>;
};

export default CardContainer;