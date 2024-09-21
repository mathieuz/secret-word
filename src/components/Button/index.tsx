import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    children?: ReactNode;
    isSubmit?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, isSubmit, onClick}) => {

    if (isSubmit) return <button className={styles.button} onClick={onClick} type="submit">{children}</button>
    
    return(
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;