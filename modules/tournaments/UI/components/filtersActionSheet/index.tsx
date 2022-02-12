import React, { FC, memo } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { DropDownPicker } from '../DropDownPicker';
import { View, Pressable } from 'react-native';
import { styles } from './styles';
import { CheckBox } from '../checkBox';
import { SearchButton } from '../searchButton'
interface IProps {
    changeVisibilityState: (param: boolean) => void;
}

export const FiltersActionSheet: FC<IProps> = memo(({ changeVisibilityState }) => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.hideButton} onPress={() => changeVisibilityState(false)} />
            <View style={styles.visibleContainer}>
                <SearchButton onPress={() => changeVisibilityState(false)} />
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

        </View>
    )
});