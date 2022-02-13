import React, { useContext, useState, FC, memo } from 'react';
import { View, Button, TextInput } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../../src/localization';
import { DropDownPicker } from '../../components/DropDownPicker';
import { selectUserData } from '../../../../../src/appStore/redux/authenticationState/authenticationStateSelector';
import { NavigationProp } from '@react-navigation/core';
import { DateSelector } from '../../components/datePicker';



interface IProps {
    navigation: NavigationProp<any>
};

export const CreateTournamentsScreen: FC<IProps> = memo(({ navigation }) => {
    const [startDate, setStartDate]: [Date, Function] = useState(new Date())
    const [lastRegistrationDate, setLastRegistrationDate]: [Date, Function] = useState(new Date())
    const [openStateStartDate, setOpenStateStartDate]: [boolean, Function] = useState(false)
    const [openStateLastRegistrationDate, setOpenStateLastRegistrationDate]: [boolean, Function] = useState(false)
    const [selectedType, setSelectedType]: [string, Function] = useState('')
    const [selectedLevel, setSelectedLevel]: [string, Function] = useState('')
    const [countOfCupMembers, setCountOfCupMembers]: [string, Function] = useState('')
    const [countOfChampionshipMembers, setCountOfChampionshipMembers]: [string, Function] = useState('')
    const [Scenario, setScenario]: [string, Function] = useState('')

    return (
        <View style={styles.container} >
            <Button title="Select start date" onPress={() => setOpenStateStartDate(true)} />
            <Button title="Select last registration date" onPress={() => setOpenStateLastRegistrationDate(true)} />
            <DateSelector setOpenState={() => setOpenStateStartDate()} setDate={() => setStartDate(startDate)} date={startDate} openState={openStateStartDate} />
            <DateSelector setOpenState={() => setOpenStateLastRegistrationDate()} setDate={() => setLastRegistrationDate(lastRegistrationDate)} date={lastRegistrationDate} openState={openStateLastRegistrationDate} />
            <View>
                <TextInput placeholder='Place' style={styles.inputs} />
                <TextInput placeholder='Name' maxLength={255} style={styles.inputs} />
                <TextInput placeholder='Description' maxLength={10000} style={styles.inputs} multiline={true} numberOfLines={4} />
            </View>
            <DropDownPicker options={['Beginner', 'Middle', 'Advanced']} defaultText={'Tournament level'} setValue={setSelectedLevel} />
            <DropDownPicker options={['CUP', 'CHAMPIONSHIP']} defaultText={'Tournament type'} setValue={setSelectedType} />
            {selectedType === 'CUP'
                ?
                <View>
                    <DropDownPicker options={['128', '64', '32', '16', '8', '4']} defaultText={'Count of members'} setValue={setCountOfCupMembers} />
                    <DropDownPicker options={['One-match', 'Two-matches', 'Three wins']} defaultText={'Scenario'} setValue={setScenario} />
                </View>
                :
                <DropDownPicker options={['1', '2', '3', '4', '5', '6', '7', '8', '9']} defaultText={'Count or members'} setValue={setCountOfChampionshipMembers} />
            }
        </View >
    );
});