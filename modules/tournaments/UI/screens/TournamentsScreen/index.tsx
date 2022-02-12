import React, { useContext, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';
import { AppContext } from '../../../../../src/theme/ui';
import { LocalizationContext } from '../../../../../src/localization/ui';
import { useSelector } from 'react-redux';
import { userData } from '../../../../../src/appStore/redux/selectors/userSignSelector';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CheckBox } from '../../components/checkBox';
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown'
import { DropDownPicker } from '../../components/DropDownPicker';
import { FiltersActionSheet } from '../../components/filtersActionSheet'

export const TournamentsScreen = () => {
    const currentUserData = useSelector(userData)
    const { colorTheme } = useContext(AppContext);
    const LocalContext = useContext(LocalizationContext);
    const options = ['1', '2']
    const [isFiltersActionSheetVisible, setIsFiltersActionSheetVisible] = useState(false)

    const showActionSheet=()=>{
        if (isFiltersActionSheetVisible===true)
        setIsFiltersActionSheetVisible(false)
        else{
            setIsFiltersActionSheetVisible(true)
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