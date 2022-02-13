import axios from "axios";
import { Alert } from "react-native";

const AUTHORIZATION_URL: string = 'https://tournament-t.herokuapp.com/auth/sign_in'

export const userAuthorization = async (email: string, password: string): Promise<{ [key: string]: string } | undefined> => {
    try {
        const response: { [key: string]: string } | undefined = await axios.post(AUTHORIZATION_URL, {
            email: email,
            password: password
        });
        console.log('result======>>>', response);
        // return response;
    } catch (e: any) {
        Alert.alert(e);
        return undefined;
    }

}
