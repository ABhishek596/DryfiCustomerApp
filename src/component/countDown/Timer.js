import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const Timer = () => {

    const [countUp, setCountUp] = useState("00:00:00")

    const countUpTimer = () => {
        let hours = 0, minutes = 0, seconds = 0;
        const countUp = setInterval(() => {
            hours = parseInt(hours)
            minutes = parseInt(minutes)
            seconds = parseInt(seconds)
            seconds++

            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes == 60) {
                hours++;
                minutes = 0;
                seconds = 0;
            }
            // if( hours == 12 ){
            //   hours = 0;
            // }

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            setCountUp(hours + ":" + minutes + ":" + seconds)

        }, 1000);
    }
    useEffect(() => {
        countUpTimer()
    }, [])


    return (
            <View style={styles.box}>
                {/* <Text style={styles.title}>countUpTimer</Text> */}
                <Text style={styles.text}>{countUp}</Text>
            </View>
    )
}

export default Timer;

const styles = StyleSheet.create({
    box: {
        marginVertical: SIZES.height * .02,
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