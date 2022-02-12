import React, { FC, memo } from 'react';
import { style } from './style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { DropDownPicker } from '../DropDownPicker';
import { View } from 'react-native';
import { styles } from './styles';
import { CheckBox } from '../checkBox';

export const FiltersActionSheet: FC = memo(() => {
    
    return (
        <View style={styles.container}>

            <View>
                <CheckBox text='Cup' />
                <CheckBox text='Championships' />
            </View>
            <View>
                <DropDownPicker options={['a', 'as']} />
                <DropDownPicker options={['a', 'as']} />
                <DropDownPicker options={['a', 'as']} />
            </View>

        </View>
    )
});