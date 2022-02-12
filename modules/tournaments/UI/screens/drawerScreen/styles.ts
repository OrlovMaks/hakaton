import { StyleSheet } from "react-native";
//import {theme} from "../../../../../src/theme/config/theme.json"

export const styles = StyleSheet.create({
    container:{
        flex:1,
        display: "flex",
        flexDirection:"column",
        justifyContent: "flex-start",
        alignItems:"center",
    },
    themeWrapper: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems:"center"
    },
    languageDrop:{
        width:"70%"
    }
})