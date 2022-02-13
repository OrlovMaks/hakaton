import React, { useContext, useState } from 'react';
import { Text, View, Pressable, TouchableOpacity, Alert } from 'react-native';
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
import { TournamentsList } from '../../components/tournamentsList';

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
            <View style={styles.footer}>
                <View style={styles.paginationButtons}>
                    <TouchableOpacity onPress={() => Alert.alert('Prev page')} style={styles.filterButton} />
                    <Text style={styles.textPage}>10</Text>
                    <TouchableOpacity onPress={() => Alert.alert('Next page')} style={styles.filterButton} />
                </View>
                <TouchableOpacity onPress={() => Alert.alert('Admin Button')} style={styles.filterButton} />
                <TouchableOpacity onPress={() => showActionSheet()} style={styles.filterButton} />
            </View>
            {
                isFiltersActionSheetVisible
                    ? <FiltersActionSheet changeVisibilityState={() => setIsFiltersActionSheetVisible()} />
                    : <View />
            }
            <TournamentsList />
        </View>
    );
};