import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const CountDown = ({ minute, style }) => {

    const [countdown, setCountdown] = useState(`0${minute}:00`)

    const countdownTimer = (duration) => {
        var timer = duration, minutes, seconds;
        const countdown = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            setCountdown(minutes + ":" + seconds)

            if (timer-- <= 0) {
                clearInterval(countdown)
            }
        }, 1000);
    }

    useEffect(() => {
        var minutes = 60 * minute;
        countdownTimer(minutes);
    }, [])


    return (
        <View style={{...styles.box, style}}>
            {/* <Text style={styles.title}>CountDown</Text> */}
            <Text style={styles.text}>{countdown}</Text>
        </View>
    )
}

CountDown.defaultProps = {
    minute: 2,
    style: null,
}

export default CountDown;

const styles = StyleSheet.create({

    box: {
        // marginVertical: SIZES.height * .02,
        alignItems: 'center',
    },
    title: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
        marginBottom: -3,
    },
    text: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
        marginBottom: -3,
    },
})