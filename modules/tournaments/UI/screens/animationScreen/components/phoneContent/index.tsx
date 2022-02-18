import React, { FC, useCallback } from 'react';
import { LayoutRectangle, Text, View } from 'react-native';
import { Value } from 'react-native-reanimated';
import { styles } from './styles';

interface IProps {
    setContentHeight: (value: number) => void
}

export const PhoneContent: FC<IProps> = ({ setContentHeight }) => {

    const onLayout = useCallback((event) => {
        setContentHeight(event.nativeEvent.layout.height)
    }, [])

    return (
        <View style={styles.container} onLayout={onLayout}>
            <View style={styles.numberWrapper}>
                <Text style={styles.numberText}>(044) 585-88-99</Text>
                <Text style={styles.cityText}>Киев</Text>
            </View>
            <View style={styles.numberWrapper}>
                <Text style={styles.numberText}>0-800-357-000</Text>
                <Text style={styles.cityText}>Бесплатный</Text>
            </View>
            <View style={styles.numberWrapper}>
                <Text style={styles.numberText}>+1-718-475-92-72</Text>
                <Text style={styles.cityText}>Нью-Йорк</Text>
            </View>
            <View style={styles.numberWrapper}>
                <Text style={styles.numberText}>+7-495-204-15-31</Text>
                <Text style={styles.cityText}>Москва</Text>
            </View>
        </View>
    );
};