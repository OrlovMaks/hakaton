import React, { FC } from 'react';
import { style } from './style';
import SelectDropdown from 'react-native-select-dropdown'

interface IProps {
    options: string[];
    defaultText: string;
    setValue: (prop: string) => void;
}

export const DropDownPicker: FC<IProps> = ({ options, defaultText, setValue }) => {
    return (
        <SelectDropdown
            dropdownIconPosition={'right'}
            buttonStyle={style.selector}
            data={options}
            onSelect={(selectedItem) => {
                setValue(selectedItem);
                console.log(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
                return item;
            }}
            defaultButtonText={defaultText}
        />
    )
};