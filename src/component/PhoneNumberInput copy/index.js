import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import PhoneInput from 'react-native-phone-number-input';

const PhoneNumberInput = () => {
    return (
        <View>
            {/* <PhoneInput
                defaultValue={'234325'}
                defaultCode='AE'
                backgroundColor='black'
                containerStyle={styles.phoneNumberViewContatiner}
                textContainerStyle={{ borderRadius: 5, borderWidth: 1 }}
                textInputProps={{ showSoftInputOnFocus: false }}
                onChangeFormattedText={text => { setPhoneNumber(text); }}
            /> */}
        </View>
    )
}

export default PhoneNumberInput

const styles = StyleSheet.create({
    phoneNumberViewContatiner : {
        width: '80%',
        height: 65,
        fontSize : 60,
        fontWeight : 'bold',
        backgroundColor: 'yellow',
        borderColor : 'grey', 
        borderWidth : 4, 
        borderRadius : 7,
        marginTop : -45
       },
})