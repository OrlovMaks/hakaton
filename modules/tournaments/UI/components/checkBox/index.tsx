import React, { FC, } from 'react';
import { style } from './style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';

interface IProps {
    text: string;
}


export const CheckBox: FC<IProps> = ({ text }) => {


    return (
        <BouncyCheckbox iconStyle={style.checkBox}
            textStyle={style.checkBoxText}
            text={text} />
    );
};