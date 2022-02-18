import React, { FC, } from 'react';
import { Text, Animated, Dimensions } from 'react-native';
import { PhoneContent } from '../phoneContent';
import { styles } from './styles';

const { width } = Dimensions.get('screen')

interface IProps {
    animatedValue: Animated.Value;
    contentHeight: number;
}

export const AnimatedSheet: FC<IProps> = ({ animatedValue, children, contentHeight }) => {
    console.log(contentHeight)
    return (
        <Animated.View style={[styles.container, {
            height: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [48, contentHeight]
            }),
            width: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [48, width]
            }),
            right: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [15, 0]
            }),
            top: animatedValue.interpolate({
                inputRange: [0, 0.1, 1],
                outputRange: [15, 0, 0]
            }),
        }]}>
            {children}
        </Animated.View>
    )
};