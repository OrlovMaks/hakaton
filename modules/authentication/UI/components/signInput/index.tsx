import React, { FC, useState, useMemo, useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

interface IProps {
    title: string,
    placeholder: string,
    autoComplete: string | any,
    secureTextEntry: boolean,
    value: string,
    setValue: (value: string) => void,
    titleColor: string,
    backgroundColor: string,
    isValid: boolean
};

export const SignInput: FC<IProps> = ({ title, placeholder, autoComplete, secureTextEntry, value, setValue, titleColor, backgroundColor, isValid }) => {
    const [isFocused, setIsFocused] = useState(false);

    const inputStyle = useMemo(() => {
        let result;
        if (isFocused && isValid) {
            result = { borderColor: 'green' };
        } else if (isFocused && !isValid) {
            result = { borderColor: 'red' };
        }
        return result;
    }, [isFocused, isValid]);

    const onFocus = useCallback(() => { setIsFocused(true) }, []);


    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: titleColor || "white" }]}>{title}</Text>
            <TextInput
                style={[styles.input, { backgroundColor: backgroundColor, color: titleColor }, inputStyle]}
                onChangeText={setValue}
                value={value}
                placeholder={placeholder}
                autoComplete={autoComplete}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={titleColor || "rgba(255, 255, 255, 0.8)"}
                onFocus={onFocus}
            />
        </View>
    );
};