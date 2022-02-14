import React, { useContext, useState, FC, memo } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../../src/localization';
import { DropDownPicker } from '../../components/DropDownPicker';
import { selectUserData } from '../../../../../src/appStore/redux/authenticationState/authenticationStateSelector';
import { NavigationProp } from '@react-navigation/core';
import { DateSelector } from '../../components/datePicker';
import { sendCreateTournamentRequest } from '../../../useCases/createTournament'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ThemesContext } from '../../../../../src/themes';


interface IProps {
    navigation: NavigationProp<any>
    setIsVisible: Function;
};

export const CreateTournamentsScreen: FC<IProps> = memo(({ navigation }) => {
    const [startDate, setStartDate]: [Date, Function] = useState(new Date());
    const [lastRegistrationDate, setLastRegistrationDate]: [Date, Function] = useState(new Date());
    const [openStateStartDate, setOpenStateStartDate]: [boolean, Function] = useState(false);
    const [openStateLastRegistrationDate, setOpenStateLastRegistrationDate]: [boolean, Function] = useState(false);
    const [selectedType, setSelectedType]: [string, Function] = useState('');
    const [selectedLevel, setSelectedLevel]: [string, Function] = useState('');
    const [countOfMembers, setCountOfMembers]: [string, Function] = useState('');
    const [countOfChampionshipMembers, setCountOfChampionshipMembers]: [string, Function] = useState('');
    const [scenario, setScenario]: [string, Function] = useState('');
    const [tournamentName, setTournamentName]: [string, Function] = useState('');
    const [tournamentPlace, setTournamentPlace]: [string, Function] = useState('');
    const [tournamentDescription, setTournamentDescription]: [string, Function] = useState('');
    const [status, setStatus]: [string, Function] = useState('');
    const currentUserData = useSelector(selectUserData)
    const theme = useContext(ThemesContext);
    const LocalContext = useContext(LocalizationContext);

    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND_COLOR }]} >

                <View style={[styles.header, { backgroundColor: theme.colors.TITLE_BACKGROUND_COLOR }]}>
                    <Text style={[styles.textTitle, { color: theme.colors.TEXT_COLOR }]}>{LocalContext.translations.TOURNAMENTS_TITLE}</Text>
                </View>


                <View style={styles.inputsBlock}>
                    <TextInput placeholder='Place' style={styles.inputs} onChangeText={setTournamentPlace} />
                    <TextInput placeholder='Name' maxLength={255} style={styles.inputs} onChangeText={setTournamentName} value={tournamentName} />
                    <TextInput placeholder='Description' maxLength={10000} style={styles.inputArea} multiline={true} numberOfLines={4} onChangeText={setTournamentDescription} />
                </View>

                <View style={styles.selectorsBlock}>
                    <DropDownPicker options={['beginner', 'middle', 'advanced']} defaultText={'Tournament level'} setValue={setSelectedLevel} />
                    <DropDownPicker options={['canceled', 'in_progress', 'finished']} defaultText={'Status'} setValue={setStatus} />
                    <DropDownPicker options={['cup', 'championship']} defaultText={'Tournament type'} setValue={setSelectedType} />
                    {selectedType === 'cup'
                        ?
                        <View>
                            <DropDownPicker options={['128', '64', '32', '16', '8', '4']} defaultText={'Count of members'} setValue={setCountOfMembers} />
                            <DropDownPicker options={['one_match', 'two_match', 'to_three_win']} defaultText={'Scenario'} setValue={setScenario} />
                        </View>
                        :
                        <DropDownPicker options={['1', '2', '3', '4', '5', '6', '7', '8', '9']} defaultText={'Count or members'} setValue={setCountOfMembers} />
                    }
                </View>
                <View style={styles.buttonsBlock}>
                    <TouchableOpacity style={styles.buttons} onPress={() => {
                        console.log(tournamentName, selectedType, countOfMembers, scenario, status, selectedLevel, startDate, lastRegistrationDate, tournamentPlace, tournamentDescription, 'aaaaaaaaaa', currentUserData.accessToken, currentUserData.uid, currentUserData.client)
                        sendCreateTournamentRequest(tournamentName, tournamentPlace, tournamentDescription, countOfMembers, selectedType, scenario, status, selectedLevel, startDate, lastRegistrationDate, currentUserData.accessToken, currentUserData.uid, currentUserData.client)
                    }} >
                        <Text>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => setOpenStateStartDate(true)}>
                        <Text>Select start date</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.applyButton} onPress={() => setOpenStateLastRegistrationDate(true)}>
                        <Text>Select last registration date</Text>
                    </TouchableOpacity>
                    <DateSelector setOpenState={() => setOpenStateStartDate()} setDate={() => setStartDate(startDate)} date={startDate} openState={openStateStartDate} />
                    <DateSelector setOpenState={() => setOpenStateLastRegistrationDate()} setDate={() => setLastRegistrationDate(lastRegistrationDate)} date={lastRegistrationDate} openState={openStateLastRegistrationDate} />
                </View>
            </View >
        </ScrollView>
    );
});