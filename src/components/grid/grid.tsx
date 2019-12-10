import React from "react";
import './grid.scss';
import {CalcButton} from "../button/calc-button";

export const Grid: React.FC = () => {
    return (
        <div className={'wrapper'}>
            <div className={'display'}>12345</div>
            <div className={'grid'}>
                <CalcButton class={'light'} name={'C'}/>
                <CalcButton name={'+/-'}/>
                <CalcButton name={'%'}/>
                <CalcButton class={'light'} name={'DEL'}/>

                <CalcButton name={'7'}/>
                <CalcButton name={'8'}/>
                <CalcButton name={'9'}/>
                <CalcButton name={'÷'}/>

                <CalcButton name={'4'}/>
                <CalcButton name={'5'}/>
                <CalcButton name={'6'}/>
                <CalcButton name={'×'}/>


                <CalcButton name={'1'}/>
                <CalcButton name={'2'}/>
                <CalcButton name={'3'}/>
                <CalcButton name={'-'}/>

                <CalcButton name={'0'}/>
                <CalcButton name={'.'}/>
                <CalcButton class={'light'} name={'='}/>
                <CalcButton name={'+'}/>
            </div>
        </div>

    );
};
