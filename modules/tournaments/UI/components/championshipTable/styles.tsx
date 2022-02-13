import { FC, useContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { ThemesContext } from '../../../../../src/themes';

const WINDOW_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
    },
    table: {
        borderWidth: 2,
        borderColor: '#fff'
    },
    head: {
        width: '100%',
        height: 40,
        alignItems: 'center'
    },
    text: {
        margin: 6,
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
    },
    rows: {
        width: '100%',
    }
});
