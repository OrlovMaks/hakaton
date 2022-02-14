import React, { FC, } from 'react';
import { styles } from './styles';
import { Image, TouchableOpacity, View } from 'react-native';

interface IProps {
    onPress: () => void
}

export const InfoButton: FC<IProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../../../../assets/infoButt.png')}
                />
            </View>
        </TouchableOpacity>
    );
};