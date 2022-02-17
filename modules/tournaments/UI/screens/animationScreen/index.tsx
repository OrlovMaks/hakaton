import { NavigationProp } from '@react-navigation/native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Animated, Button, Easing, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

export const AnimationScreen = () => {
    const valueTranslateX = useRef(new Animated.Value(0)).current
    const [animateX, setAnimateX] = useState(false)
    const valueFade = useRef(new Animated.Value(0)).current
    const [fade, setFade] = useState(false)
    const spinValue = useRef(new Animated.Value(0)).current

    const startTranslateX = () => {
        if (animateX) {
            setAnimateX(false)
            Animated.timing(valueTranslateX, { toValue: 200, useNativeDriver: true }).start()
        } else {
            setAnimateX(true)
            Animated.timing(valueTranslateX, { toValue: 0, useNativeDriver: true }).start()
        }

    }

    const startFade = () => {
        if (fade) {
            setFade(false)
            Animated.timing(valueFade, { toValue: 1, duration: 1000, useNativeDriver: false }).start();
        } else {
            setFade(true)
            Animated.timing(valueFade, { toValue: 0, duration: 1000, useNativeDriver: false }).start();
        }
    }

    useEffect(() => {
        const spin = () => {
            spinValue.setValue(0)
            Animated.timing(spinValue, { toValue: 1, duration: 4000, easing: Easing.linear, useNativeDriver: false }).start(()=>spin())
        }
        spin()
    }, [])



    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View>
            <Animated.View style={[styles.kub, { transform: [{ translateX: valueTranslateX }] }]}  >
                <Button title={'translate X'} onPress={startTranslateX} />
            </Animated.View>
            <View style={styles.fadeWrapp}>
                <Animated.View style={[styles.kub, { opacity: valueFade }]} />
                <Button title={'fade'} onPress={startFade}></Button>
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 70 }}>
                    <Animated.View style={[styles.kub, { transform: [{ rotate: spin }] }]}/>
            </View>
        </View>

    )
};