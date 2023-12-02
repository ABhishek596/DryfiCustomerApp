import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
// import { Dimensions } from "react-native";
// const { width, height } = Dimensions.get("window");
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomButton1 from '../../component/button2';
import Button1 from '../../component/button/Button1';
import uuid from 'react-native-uuid';
const Bid = uuid.v4();
// console.log('BookingId=====>>>>>', Bid);
// const SIZES = {

//     // app dimensions
//     width,
//     height
// };

function AppointmentCompleted({ navigation }) {

    const [data, setData] = useState([]);
    console.log('data==', data);
    const handlePress = () => {
        const newOrder = {
            "order_id": Bid,
            "created_at": new Date().toISOString(),
            "label_name": "Booking Confirm"
        };

        // Update the data state by creating a new array with the newOrder object
        setData([...data, newOrder]);
    };

    const handleButtonPress = () => {
        handlePress();
        navigation.navigate('Booking', { orderList: data });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 20 }} />
            <View style={{
                height: '8%', width: '90%', justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: '#B70689',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25
            }}>
                <Text style={styles.text}>Your Booking Completed</Text>
            </View>

            <View style={{
                height: '13%',
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: '#FBCFFF' + 50,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,

            }}>
                <Text style={{ color: '#B70689', fontWeight: '500' }}>Thanks For appointment We will Reach {'\n'}you in 24 hour.</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginTop: 20 }}>
                <Image
                    source={require('../../assets/images/imagelast.png')}
                    style={{ width: responsiveWidth(100), height: responsiveHeight(45) }}
                    resizeMode='contain'
                />
            </View>
            {/* <View style={{ height: 300 }} /> */}
            {/* <Text style={{ color: '#B70689', fontWeight: '500',alignSelf:'center', fontSize: responsiveFontSize(2.5), }}>If urgent then call us</Text>
        <View style={{ backgroundColor: 'white' }}>
          <Image
            source={require('./src/constant/icons/down.png')}
            style={{ width: 15, height: 20,alignSelf:'center' }}
            resizeMode='contain'
          />
        </View> */}


            <View style={{ marginTop: -5 }}>
                <CustomButton1
                    // onPress={handleButtonPress}
                    imageSource={require('../../assets/images/phone.png')}
                    buttonText="+91-9830303060"
                />
            </View>
            <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                <Button1 children={'Continue'} onPress={handleButtonPress} style={{ borderRadius: 25, paddingVertical: 15 }} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    text: {
        fontSize: 20, // Adjust font size as needed
        color: 'white',
        // fontWeight: '600'
        fontWeight: 'bold', // Adjust font weight as needed
        // marginHorizontal: 
    }
});


export default AppointmentCompleted;











