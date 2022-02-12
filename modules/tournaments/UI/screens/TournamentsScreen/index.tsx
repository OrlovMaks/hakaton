import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../../src/localization';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CheckBox } from '../../components/checkBox';
import { selectUserData } from '../../../../../src/appStore/redux/authenticationState/authenticationStateSelector';

export const TournamentsScreen = () => {
    const currentUserData = useSelector(selectUserData)
    const LocalContext = useContext(LocalizationContext);

    return (
        <View style={styles.container}>
         <View style={styles.header}>
         <CheckBox text='Cup'/>
         <CheckBox text='Championships'/>
         </View>
         </View>
    );
};