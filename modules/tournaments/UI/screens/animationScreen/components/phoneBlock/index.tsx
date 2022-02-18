import React, { FC, useCallback, useRef, useState } from 'react';
import { Animated, LayoutRectangle, View } from 'react-native';

import { AnimatedSheet } from '../animatedSheet';
import { MenuButton } from '../menuButton';
import { PhoneContent } from '../phoneContent';
import { styles } from './styles';

interface IProps { }

export const PhoneBlock: FC<IProps> = ({ }) => {
    const [isSheetOpened, seIsSheetOpened] = useState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [contentHeight, setContentHeight] = useState(0)

    // const phoneContentDimensions = (layout: LayoutRectangle) => {
    //     const { x, y, width, height } = layout;
    //     setContentHeight(height)
    // }

    const onChangeAnimatedValue = useCallback(() => {
        Animated.timing(animatedValue, { toValue: isSheetOpened ? 0 : 1, useNativeDriver: false }).start();
        seIsSheetOpened(value => !value);
        console.log(contentHeight)
    }, [isSheetOpened]);

    return (
        <View style={styles.container}>
            <AnimatedSheet animatedValue={animatedValue} contentHeight={contentHeight} >
                <PhoneContent setContentHeight={setContentHeight}/>
            </AnimatedSheet>
            <MenuButton onPress={onChangeAnimatedValue} />
        </View>
    );
};
