import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { getData } from '../../../../../src/appStore/asyncStorage/getData';
import { setIsAuthorizeAction, setUserData } from '../../../../../src/appStore/redux/authenticationState/authenticationStateActions';
import { AppDispatch } from '../../../../../src/appStore/redux/store';
import {styles} from './styles'


export const LoadingScreen: FC = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect((): void => {
        const checkUserAuthorization = async () => {
            const getDataUser = await getData('userData');
            if (getDataUser) {
                dispatch(setUserData(getDataUser));
                dispatch(setIsAuthorizeAction(true));
            };
        };
        checkUserAuthorization();
    }, []);

    return (
        <View style={styles.container}></View>
    );
};