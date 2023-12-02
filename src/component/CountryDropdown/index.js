import React, { useState } from 'react'
import { View, Text, StyleSheet, PixelRatio, Switch, TouchableOpacity, TextInput } from 'react-native'
// import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import { COLORS, FONTS, SIZES } from '../../constants'
import { CountryPicker } from "react-native-country-codes-picker";
import Icons from '../Icons';


const CountryDropdown = ({value, onChangeText, inputTextStyle }) => {
    const [countryCode, setCountryCode] = useState('IN')
    const [country, setCountry] = useState("")
    const [visible, setVisible] = useState(false)

    const [withCallingCode, setWithCallingCode] = useState(false)
    // const onSelect = (country: Country) => {
    //     setCountryCode(country.cca2)
    //     setCountry(country)
    // }
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setVisible(!visible)}
            style={styles.country_btn}
        >
            {/* <CountryPicker
                visible={visible}
                withModal={true}
                // countryCode='AQ'
                country={country}
                withCallingCode={true}
                theme={DARK_THEME}
                // containerButtonStyle={styles.country_btn}
            /> */}
            {/* <Text>{country}</Text> */}
            <TextInput
                placeholder={"Select Country"}
                placeholderTextColor={COLORS.placeholderColor}
                value={country}
                onChangeText={onChangeText}
                style={[styles.inputTextStyle, inputTextStyle]}
                editable={false}
                // onBlur={() => setFocusColor(COLORS.borderColor)}
                // onFocus={() => setFocusColor(COLORS.secondary)}
            />
            <Icons name={"down-outline"} size={20} color={COLORS.black} />
            <CountryPicker
                show={visible}
                style={{
                    // Styles for whole modal [View]
                    modal: {
                        height: SIZES.height * .5,
                        // backgroundColor: 'red'
                    },

                    // Dial code styles [Text]
                    dialCode: {
                        color: COLORS.black,
                    },
                    // Country name styles [Text]
                    countryName: {
                        color: COLORS.black,
                    }
                }}
                pickerButtonOnPress={(item) => {
                    console.log("country : ", item)
                    setCountryCode(item.dial_code);
                    setCountry(item.name.en)
                    setVisible(false);
                }}
            />
        </TouchableOpacity>
    )
}

CountryDropdown.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    value: null,
}

export default CountryDropdown

const styles = StyleSheet.create({
    inputTextStyle: {
        // borderWidth: 1,
        width: SIZES.width * .78,
        fontFamily: FONTS.regular,
        // fontSize: 15,
        fontSize: SIZES.width * .041,
        color: COLORS.black,
        paddingBottom: SIZES.height * .01,
        paddingLeft: SIZES.width * .03,
    },

    country_btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        borderWidth: 1,
        borderColor: COLORS.gray30,
        borderRadius: SIZES.width * .024,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * .02,
        marginBottom: SIZES.height * .02,
    },
})