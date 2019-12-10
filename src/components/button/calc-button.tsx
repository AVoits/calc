import React from "react";
import './calc-button.scss'

interface ButtonProps {
    name: string;
    class?: ClassType;
}

type ClassType = 'dark' | 'light';

export const CalcButton: React.FC<ButtonProps> = (props: ButtonProps) => {

    const getClass = (classType: ClassType = 'dark') => {
        return classType === 'dark' ? 'calc-button-primary calc-button' : 'calc-button-secondary calc-button';
    };


    return (
        <div className={getClass(props.class)}>{props.name}</div>
    );
};
