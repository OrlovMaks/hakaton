const axios = require("axios");

export const sendSetScoreRequest = async (matchId :string, scoreUser1: string, scoreUser2:string, status:string, uid, client, token) => {

    try {
        console.log(matchId, scoreUser1, scoreUser2, status,  uid, client, token)
        console.log(`https://tournament-t.herokuapp.com/matches/`+matchId)
        let response = await axios.put(`https://tournament-t.herokuapp.com/matches/${matchId}`,
            {
                score_user_1: scoreUser1,
                score_user_2: scoreUser2,
                status: status
            },
            {
                headers:{
                    'access-token':token,
                    'client': client,
                    'uid': uid

                }
            }
        );
        console.log(response.data)
        return response
    }
    catch (error) {
        console.log(error)
    }
}