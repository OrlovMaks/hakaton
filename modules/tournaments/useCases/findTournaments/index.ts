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

export const sendFindTournamentsRequest = async (accessToken, client, uid, setTournamentsData) => {


    try {
        let response = await axios.get('https://tournament-t.herokuapp.com/tournaments',
            {
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'uid': uid,
                }
            }
        );
        console.log(response.data)
         setTournamentsData(response.data)
    }

    catch (error) {
        console.log(error)
    }
}