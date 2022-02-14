import { Alert } from 'react-native';
import { getStoreData } from '../getStorageData';

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
    // console.log(name,  mode, participants, scenario, status, level,  accessToken, uid, client)

    try {
        let response = await axios.post('https://tournament-t.herokuapp.com/tournaments',
          {  name: name,
            mode: mode,
            participants: participants,
            scenario: scenario,
            status: status,
            level: level 
        },
            {
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'uid': uid,
                }
            }
        );
        // console.log(response.data)

    }

    catch (error) {
        console.log(error)
    }
}