import React, { FC, } from 'react';
import { Text, Animated, Dimensions } from 'react-native';
import { PhoneContent } from '../phoneContent';
import { styles } from './styles';

const { width } = Dimensions.get('screen')

interface IProps {
    animatedValue: Animated.Value;
    contentHeight: number;
}

const OFFSET = 15;
const BUTTON_SIZE = 48;
const MIN_HEIGHT = BUTTON_SIZE + OFFSET * 2


export const AnimatedSheet: FC<IProps> = ({ animatedValue, children, contentHeight }) => {
    return (
        <Animated.View style={[styles.container, {
            height: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [48, contentHeight + MIN_HEIGHT]
            }),
            width: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [48, width]
            }),
            right: animatedValue.interpolate({
                inputRange: [0, 0.3, 1],
                outputRange: [15, 0, 0]
            }),
            top: animatedValue.interpolate({
                inputRange: [0, 0.3, 1],
                outputRange: [15, 0, 0]
            }),
        }]}>
            <Animated.View style={{
                position: 'absolute', right: 0,
                top: animatedValue.interpolate({
                    inputRange: [0, 0.3, 1],
                    outputRange: [0, 15 + MIN_HEIGHT, 15 + MIN_HEIGHT]
                }),
            }}>
                {children}
            </Animated.View>
        </Animated.View>
    )
};