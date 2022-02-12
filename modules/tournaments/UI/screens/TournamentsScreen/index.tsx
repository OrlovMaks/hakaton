import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { AppContext } from '../../../../../src/theme/ui';
import { LocalizationContext } from '../../../../../src/localization/ui';
import { useSelector } from 'react-redux';
import { userData } from '../../../../../src/appStore/redux/selectors/userSignSelector';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CheckBox } from '../../components/checkBox';

export const TournamentsScreen = () => {
    const currentUserData = useSelector(userData)
    const { colorTheme } = useContext(AppContext);
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