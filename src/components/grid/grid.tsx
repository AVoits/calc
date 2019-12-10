import React, {useState} from "react";
import './grid.scss';
import {CalcButton} from "../button/calc-button";

type CounterState = number | string;

export const Grid: React.FC = () => {
    const [count, setCount] = useState<CounterState[] | any>(null);

    const addEvent = (val: string | number) => {

        if (count && count.length > 0) {
           const newCount = [...count, val];
            setCount(newCount);
        } else {
            setCount([val]);
        }

    };

    const clearEvent = () => {
        setCount([]);
    };

    const removeLast = () => {
        if (count) {
            const l = count.length;
            const newCount = l && l > 0 ? count.splice(0, (l - 1)) : [];
            setCount(newCount);
        }
    };

    function getResult() {

        const result =  count && count.reduce((acc: any, item: CounterState) => {
            if (typeof item === 'string') {

            }
            if (typeof item === 'number') {

            }

            return `${acc}, ${item}`
        }, 0);

        setCount(result);
    }

    return (
        <div className={'wrapper'}>
            <div className={'display'}>{count}</div>
            <div className={'grid'}>
                <CalcButton clickMe={(val) => clearEvent()} class={'light'} name={'C'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'+/-'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'%'}/>
                <CalcButton clickMe={(val) => removeLast()} class={'light'} name={'DEL'}/>

                <CalcButton clickMe={(val) => addEvent(val)} name={'7'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'8'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'9'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'÷'}/>

                <CalcButton clickMe={(val) => addEvent(val)} name={'4'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'5'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'6'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'×'}/>


                <CalcButton clickMe={(val) => addEvent(val)} name={'1'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'2'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'3'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'-'}/>

                <CalcButton clickMe={(val) => addEvent(val)} name={'0'}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'.'}/>
                <CalcButton clickMe={(val) => getResult()} class={'light'} name={'='}/>
                <CalcButton clickMe={(val) => addEvent(val)} name={'+'}/>
            </div>
        </div>

    );
};
