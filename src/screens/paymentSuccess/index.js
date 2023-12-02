import { View, Text, Image, StatusBar, TouchableOpacity, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles';
import { COLORS, images } from '../../constants';
import formatAMPM from '../../services/time';
import formatDate from '../../services/date';
import Button1 from '../../component/button/Button1';

const PaymentSuccess = ({ navigation, route }) => {
    // result = route.params && route.params.paymentResult
    const date = new Date()
    // console.log("route success : ",route.params && route.params.routeName)
    // useEffect(() => {
    //     const backAction = () => {
    //         return true;
    //     };
    //     const backHandler = BackHandler.addEventListener(
    //         'hardwareBackPress',
    //         backAction,
    //     );
    //     return () => backHandler.remove();
    // }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
            <View style={styles.imageBox}>
                <Image source={images.success} style={styles.image} resizeMode='contain' />
            </View>

            <View style={styles.box}>
                <Text style={styles.success_text}>Thank you!</Text>
                <Text style={styles.title}>Payment Successful</Text>
                <Text style={styles.text}>Now you can track your booking or{"\n"}
                    go back to home screen</Text>
                {/* <View style={styles.line} /> */}
                {/* <Text style={styles.blueText}>{success ? `Transaction Number : ${route.data.transaction_id}` : "Your Payment wasn’t completed."}</Text> */}
            </View>
            <Button1
                onPress={() => navigation.navigate("Order")}
            >
                Back to Orders
            </Button1>
        </View>
    )
}

export default PaymentSuccess;