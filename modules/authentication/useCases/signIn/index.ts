import axios from "axios";
import { Alert } from "react-native";

const AUTHORIZATION_URL: string = 'https://tournament-t.herokuapp.com/auth/sign_in'

export const userAuthorization = async (email: string, password: string): Promise<{ [key: string]: string } | undefined> => {
    try {
        const response: { [key: string]: string } | undefined = await axios.post(AUTHORIZATION_URL, {
            email: email,
            password: password
        });
        // console.log('result======>>>', response.data.data.email);
        // console.log('result======>>>', response.data.data.id);
        // console.log('result======>>>', response.data.data.role);
        // console.log('result======>>>', response.headers.client);
        // console.log('result======>>>', response.headers.uid);
        // console.log('result======>>>', response.headers['access-token']);
        return response;
    } catch (e: any) {
        Alert.alert('Invalid password or email')
        return undefined;
    }
}
