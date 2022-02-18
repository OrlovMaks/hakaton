import { NavigationProp } from '@react-navigation/native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Animated, Button, Dimensions, Easing, Pressable, Text, Touchable, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { PhoneBlock } from './components/phoneBlock';
import { styles } from './styles';

export const AnimationScreen = () => {
    // const valueTranslateX = useRef(new Animated.Value(0)).current
    const valueBurgerMenuWidth = useRef(new Animated.Value(0)).current
    const valueBurgerMenuHeight = useRef(new Animated.Value(0)).current
    const [animateBurger, setAnimateBurger] = useState(false)
    const SCREEN_WIDTH = Dimensions.get('window').width
    // const [animateX, setAnimateX] = useState(false)
    // const valueFade = useRef(new Animated.Value(0)).current
    // const [fade, setFade] = useState(false)
    // const spinValue = useRef(new Animated.Value(0)).current

    // const startTranslateX = () => {
    //     Animated.timing(valueTranslateX, { toValue: animateX ? 200 : 0, useNativeDriver: true }).start()
    //     setAnimateX(value => !value);
    // }

    // const startFade = () => {
    //     if (fade) {
    //         setFade(false)
    //         Animated.timing(valueFade, { toValue: 1, duration: 1000, useNativeDriver: false }).start();
    //     } else {
    //         setFade(true)
    //         Animated.timing(valueFade, { toValue: 0, duration: 1000, useNativeDriver: false }).start();
    //     }
    // }

    // useEffect(() => {
    //     const spin = () => {
    //         spinValue.setValue(0)
    //         Animated.timing(spinValue, { toValue: 1, duration: 4000, easing: Easing.linear, useNativeDriver: false })
    //             .start(({ finished }) => {
    //                 if (finished) {
    //                     spin()
    //                 }
    //             })
    //     }
    //     spin()
    // }, [])

    const startBurgerMenu = () => {
        Animated.timing(valueBurgerMenuWidth, { toValue: animateBurger ? SCREEN_WIDTH : 0, useNativeDriver: false }).start()
        Animated.timing(valueBurgerMenuHeight, { toValue: animateBurger ? 1 : 0, useNativeDriver: false }).start()
        setAnimateBurger(value => !value);
    }
    const burgerHeight = valueBurgerMenuHeight.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '600%']
    })

    // const spin = spinValue.interpolate({
    //     inputRange: [0, 0.5, 1.5],
    //     outputRange: ['0deg', '190deg', '-190deg']
    // })

    return (
        <View style={styles.container}>
            <PhoneBlock />
            {/* <ScrollView> */}
            {/* <View style={styles.burgerWrapp}>
                <View style={{ zIndex: 2 }}>
                    <TouchableOpacity onPress={startBurgerMenu}>
                        <View style={styles.burger}>
                        </View>
                    </TouchableOpacity>
                </View>
                <Animated.View style={[styles.burgerMenu, { height: burgerHeight, width: valueBurgerMenuWidth }]}>
                        <Text>ssdfsdfsdfsdfsssssssssssssssssss</Text>
                        <Text>ssdfsdfsdfsdfsssssssssssssssssss</Text>
                        <Text>ssdfsdfsdfsdfsssssssssssssssssss</Text>
                        <Text>ssdfsdfsdfsdfsssssssssssssssssss</Text>
                </Animated.View>
            </View> */}
            {/* <Animated.View style={[styles.kub, { transform: [{ translateX: valueTranslateX }] }]}  >
                    <Button title={'translate X'} onPress={startTranslateX} />
                </Animated.View>
                <View style={styles.fadeWrapp}>
                    <Animated.View style={[styles.kub, { opacity: valueFade }]} />
                    <Button title={'fade'} onPress={startFade}></Button>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 70 }}>
                    <Animated.View style={[styles.kub, { transform: [{ rotate: spin }] }]} />
                </View>
            </ScrollView> */}
        </View>

    )
};