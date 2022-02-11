import axios from "axios";
import { Alert } from "react-native";

const AUTHORIZATION_URL = 'https://enigmatic-meadow-94776.herokuapp.com/authorization'

export const userAuthorization = async (email: string, password: string) => {
    try {
        const response = await axios.post(AUTHORIZATION_URL, {
            email: email,
            password: password
        })
        console.log('result======>>>', response)
        return response
    } catch (e: any) {
        Alert.alert(e)
        return
    }

}
