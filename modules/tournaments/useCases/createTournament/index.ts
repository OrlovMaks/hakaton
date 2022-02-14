import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';


const axios = require("axios");


interface IProps {
    name: string,
    place: string,
    description: string,
    mode: string,
    participants: string,
    scenario: string,
    status: string,
    level: string,
    startDate: Date,
    lastRegistrationDate: Date,
    accessToken: string
}

export const sendCreateTournamentRequest = async (name, place, description, participants, mode, scenario, status, level, startDate, lastRegistrationDate, accessToken, uid, client) => {
    console.log(name, place, description, participants, mode, scenario, status, level, startDate, lastRegistrationDate, accessToken, uid, client)

    try {
        let response = await axios.post('https://tournament-t.herokuapp.com/tournaments',
            {
                name: name,
                mode: mode,
                place: place,
                participants: participants || '10',
                scenario: scenario || 'one-match',
                status: status,
                level: level || 'middle'
            },
            {
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'uid': uid,
                }
            }
        );
        console.log(response)
        if (response.status === 200) { Alert.alert('Tournament was successfully created!') }
    }

    catch (error) {
        console.log(error)

    }
}