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

export const sendFindMatchesRequest = async (id) => {
    try {
        let response = await axios.get(`https://tournament-t.herokuapp.com/tournament/${id}/matches`
        );
        return response.data.matches;
    }

    catch (error) {
        console.log(error);
    }
}