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

export const sendFindTournamentsRequest = async (setTournamentsData, page, setPage) => {
    try {
        let response = await axios.get(`https://tournament-t.herokuapp.com/tournaments/${page}`,
        );
        setTournamentsData(response.data)
        console.log(response.data)
        if (response.data.tournament.length <= 0) {
            Alert.alert('There is no more info here :(')
            setPage(page - 1)
        }

    }
    catch (error) {
        console.log(error)
    }
}