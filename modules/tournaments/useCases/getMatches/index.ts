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

export const sendFindMatchesRequest = async (id, uid, client, accessToken) => {

    console.log(`https://tournament-t.herokuapp.com/tournaments/${id}/matche`);

    try {
        let response = await axios.get(`https://tournament-t.herokuapp.com/tournament/${id}/matches`,
        {
            headers:{
                'access-token': accessToken,
                'client': client,
                'uid': uid,

            }
        }
        );
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",response.data)
        return response.data.matches;
    }

    catch (error) {
        console.log(error);
    }
}