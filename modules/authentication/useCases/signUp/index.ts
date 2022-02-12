import axios from "axios";
import { Alert } from "react-native";

const REGISTRATION_URL = 'https://enigmatic-meadow-94776.herokuapp.com/registration'

export const userRegistration = async (email: string, password: string) => {
    try {
        const response = await axios.post(REGISTRATION_URL, {
            email: email,
            password: password
        })
        console.log("result========>>>>", response)
        return response
    } catch (e: any) {
        Alert.alert(e)
        return
    }

}
