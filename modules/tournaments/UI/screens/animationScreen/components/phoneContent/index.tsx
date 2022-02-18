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
            <Text>Ghjsfushdfkhsfhuishfuihfieru</Text>
            <Text>Ghjsfushdfkhsfhuishfuihfieru</Text>
            <Text>Ghjsfushdfkhsfhuishfuihfieru</Text>
            <Text>Ghjsfushdfkhsfhuishfuihfieru</Text>
            <Text>Ghjsfushdfkhsfhuishfuihfieru</Text>
        </View>
    );
};