import axios from "axios";
import { Alert } from "react-native";

const REGISTRATION_URL = 'http://tournament-t.herokuapp.com/auth'

export const userRegistration = async (email: string, password: string, name:string) => {
    try {
        const response = await axios.post(REGISTRATION_URL, {
            name: name,
            email: email,
            password: password
        })
        console.log("result========>>>>", response.data)
        return response
    } catch (e: any) {
        Alert.alert('User already exists')
        return
    }

}
