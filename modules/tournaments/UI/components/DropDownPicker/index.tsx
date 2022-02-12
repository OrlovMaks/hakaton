import React, { FC, memo } from 'react';
import { style } from './style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'

interface IProps {
    options: string[];
}

export const DropDownPicker: FC<IProps> = memo(({ options }) => {
    console.log(options)
    return (
        <SelectDropdown
            data={options}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
                return item;
            }}
        />
    )
});