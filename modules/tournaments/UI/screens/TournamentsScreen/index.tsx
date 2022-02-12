import React, { useContext, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../../src/localization';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CheckBox } from '../../components/checkBox';
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown'
import { DropDownPicker } from '../../components/DropDownPicker';
import { FiltersActionSheet } from '../../components/filtersActionSheet'
import { selectUserData } from '../../../../../src/appStore/redux/authenticationState/authenticationStateSelector';

export const TournamentsScreen = () => {
    const currentUserData = useSelector(selectUserData)
    const LocalContext = useContext(LocalizationContext);
    const [isFiltersActionSheetVisible, setIsFiltersActionSheetVisible]: [boolean, Function] = useState(false)

    const showActionSheet = () => {
        if (isFiltersActionSheetVisible) {
            setIsFiltersActionSheetVisible(false);
        }
        else {
            setIsFiltersActionSheetVisible(true);
        }
    }

    return (
        <View style={styles.container} >
            <Pressable onPress={() => showActionSheet()} style={{ backgroundColor: 'black', width: 30, height: 30 }}>
            </Pressable>
            {
                isFiltersActionSheetVisible
                    ? <FiltersActionSheet />
                    : <View />
            }
        </View>
    );
};