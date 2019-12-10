import React, {SyntheticEvent} from "react";
import './calc-button.scss'

interface ButtonProps {
    name: string;
    class?: ClassType;
    clickMe?: (val: string | number) => void;
}

type ClassType = 'dark' | 'light';

export const CalcButton: React.FC<ButtonProps> = (props: ButtonProps) => {

    const getClass = (classType: ClassType = 'dark') => {
        return classType === 'dark' ? 'calc-button-primary calc-button' : 'calc-button-secondary calc-button';
    };

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault();

        if(props.clickMe) {
            return props.clickMe(props.name);
        }

        return;
    };

    return (
        <div onClick={handleClick} className={getClass(props.class)}>{props.name}</div>
    );
};
