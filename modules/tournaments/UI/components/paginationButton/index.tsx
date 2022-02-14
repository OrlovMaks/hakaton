import React, { FC, memo, } from 'react';
import { Image, ImageSourcePropType, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
    icon: ImageSourcePropType;
    buttonFunction: () => void;
}

export const PaginationButton: FC<IProps> = memo(({ icon, buttonFunction }) => {
    return (
        <TouchableOpacity onPress={buttonFunction}>
            <Image
                source={icon} />
        </TouchableOpacity>
    );
});