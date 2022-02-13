import { Alert } from 'react-native';
import { getStoreData } from '../getStorageData';

const axios = require("axios");
interface IProps {
    name: string,
    mode: string,
    participants: string,
    scenario: string,
    status: string,
    level: string,
    startDate: Date,
    lastRegistrationDate: Date,
}

export const sendCreateTournamentRequest = async ( name, mode, participants, scenario, status, level, startDate, lastRegistrationDate) => {
    console.log(name, mode, participants, scenario, status, level, startDate, lastRegistrationDate)

    try {
        let response = await axios.post('https://tournament-t.herokuapp.com/tournaments/',
            {
                name: name,
                mode: mode,
                participants: participants,
                scenario: scenario,
                status: status,
                level: level || 'Middle',
                start_date: startDate,
                last_registration_date: lastRegistrationDate
            }
        );
        console.log(response.status)
        if (response.status === 200) {
        }
    }

    catch (error) {
        console.log(error) 
    }
}