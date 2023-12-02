import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { COLORS, images } from '../../constants';
import Button1 from '../../component/button/Button1';

const PaymentFailed = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
            <View style={styles.imageBox}>
                <Image source={images.failed} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.box}>
                <Text style={styles.failed_text}>Failed</Text>
                <Text style={styles.title}>Payment Failed</Text>
                <Text style={styles.text}>Oops! Something went{"\n"}
                    terribly wrong here</Text>
                <View style={styles.line} />

               <Button1
                onPress={() => navigation.goBack()}
               >
                Please try again
               </Button1>
            </View>
        </View>
    )
}

export default PaymentFailed;