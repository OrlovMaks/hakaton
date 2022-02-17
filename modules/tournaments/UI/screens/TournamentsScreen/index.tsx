import React, { useContext, useState, FC, useEffect } from 'react';
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
import { NavigationProp } from '@react-navigation/native';
import { ThemesContext } from '../../../../../src/themes';
import { PaginationButton } from '../../components/paginationButton';
import { sendFindTournamentsRequest } from '../../../useCases/findTournaments';

interface IProps {
    navigation: NavigationProp<any>
}

export const TournamentsScreen: FC<IProps> = ({ navigation }) => {
    const currentUserData = useSelector(selectUserData);
    const LocalContext = useContext(LocalizationContext);
    const [isFiltersActionSheetVisible, setIsFiltersActionSheetVisible]: [boolean, Function] = useState(false);
    const [tournamentsList, setTournamentsList]: [Array<string>, Function] = useState([]);
    const theme = useContext(ThemesContext);
    const [page, setPage] = useState(1);

    const showActionSheet = () => {
        if (isFiltersActionSheetVisible) {
            setIsFiltersActionSheetVisible(false);
        }
        else {
            setIsFiltersActionSheetVisible(true);
        }
    }

    const setNextPage = () => {
        setPage(page + 1)
   
    }

    const setPrevPage = () => {
        if (page - 1 <= 0) {
            return Alert.alert('There is no more info here :(')
        } else {
            setPage(page - 1)
        }
    }



    useEffect(() => {
        sendFindTournamentsRequest(setTournamentsList, page, setPage)
    }, [page])

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND_COLOR }]} >
            <View style={[styles.header, { backgroundColor: theme.colors.TITLE_BACKGROUND_COLOR }]}>
                <Text style={[styles.textTitle, { color: theme.colors.TEXT_COLOR }]}>{LocalContext.translations.TOURNAMENTS_TITLE}</Text>
            </View>
            <TournamentsList navigation={navigation} data={tournamentsList} />
            <View style={[styles.footer, { backgroundColor: theme.colors.LIST_ITEMS }]}>
                <View style={styles.paginationButtons}>
                    <PaginationButton icon={require('../../../../../assets/arrowLeft.png')} buttonFunction={setPrevPage} />
                    <Text style={styles.textPage}>{page}</Text>
                    <PaginationButton icon={require('../../../../../assets/arrowRight.png')} buttonFunction={setNextPage} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CreateTournaments')} style={[styles.filterButton, { backgroundColor: theme.colors.BUTTON_COLOR }]}>
                    <Text style={{ color: theme.colors.TEXT_COLOR }}>{LocalContext.translations.CREATETOURNAMENT_TITLE}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterButton, { backgroundColor: theme.colors.BUTTON_COLOR }]} onPress={() => setIsFiltersActionSheetVisible(true)} >
                    <Text style={{ color: theme.colors.TEXT_COLOR }}>{LocalContext.translations.FILTERS_TITLE}</Text>
                </TouchableOpacity>
            </View>
            {
                isFiltersActionSheetVisible
                    ? <FiltersActionSheet navigation={navigation} changeVisibilityState={() => setIsFiltersActionSheetVisible()} />
                    : <View />
            }
        </View>
    );
};