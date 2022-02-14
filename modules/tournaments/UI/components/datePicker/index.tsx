import React, { FC, } from 'react';
import DatePicker from 'react-native-date-picker'

interface IProps {
    setOpenState: (param: boolean) => void;
    setDate: (param: Date) => void;
    date: any;
    openState: boolean;
}

export const DateSelector: FC<IProps> = ({ setOpenState, setDate, date, openState }) => {

    return (
        <DatePicker
            modal
            open={openState}
            date={date}
            onConfirm={(date) => {
                setOpenState(false)
                setDate(date)
                // console.log(date)
            }}
            onCancel={() => {
                setOpenState(false)
            }}
        />
    );
};