import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import PhoneInput from 'react-native-phone-input'
import { useRef } from 'react'
import { useEffect } from 'react'
// import PhoneInput from "react-native-phone-number-input";



const PhoneNumberInput = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    editable,
    label,
    onChangePhoneNumber,
    maxLength,
    getCountryCode,
    inputStyle }) => {


    const phone_ref = useRef(null);
    const [validation, setValidation] = useState(false);
    const [focusColor, setFocusColor] = useState(COLORS.borderColor)

    const phone_validation = async () => {
        Keyboard.dismiss();
        if ('+' + phone_ref.current.getCountryCode() == phone_ref.current.getValue()) {
            await setValidation(false);
            alert('Please enter your phone number')
        } else if (!phone_ref.current.isValidNumber()) {
            await setValidation(false);
            alert('Please enter valid phone number')
        } else {
            await setValidation(true);
            // check_phone(phone_ref.current.getValue())
        }
    }

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
                //   setFocusColor(COLORS.secondary)
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
                //   setFocusColor(COLORS.borderColor)
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const handlePhoneNumber = () => {
        onChangeText && onChangeText(phone_ref.current.getValue())
        getCountryCode && getCountryCode(phone_ref.current.getCountryCode())
        onChangePhoneNumber && onChangePhoneNumber(phone_ref.current.getValue())
    }
    // phone_ref.current.focus() ? setFocusColor(COLORS.secondary) : setFocusColor(COLORS.borderColor)

    //   console.log("keyboard visible ; ", isKeyboardVisible)

    return (
        <View>
            {label &&
                <Text style={styles.label}>{label}</Text>
            }
            <View style={[styles.inputBox, inputStyle, { borderColor: focusColor }]}>
                <PhoneInput
                    ref={phone_ref}
                    // value={value}
                    // style={[styles.inputTextStyle, inputTextStyle,]}
                    style={{ borderColor: COLORS.primary }}
                    flagStyle={styles.flag_style}
                    initialCountry="in"
                    offset={10}
                    textStyle={styles.inputTextStyle}
                    textProps={{ placeholder: placeholder, placeholderTextColor: COLORS.placeholderColor }}
                    autoFormat={true}
                    // onChangePhoneNumber={(text) => {onChangePhoneNumber(text), onChangeText && onChangeText(phone_ref.current.getCountryCode())}}
                    onChangePhoneNumber={handlePhoneNumber}
                />

                {/* <PhoneInput
                    ref={phone_ref}
                    // defaultValue={value}
                    value='35353'
                    defaultCode="IN"
                    // layout="first"
                    onChangeText={(text) => {
                   onChangePhoneNumber(text)
                        // setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        // setFormattedValue(text);
                    }}
                    // withDarkTheme
                    // withShadow
                    // autoFocus
                /> */}
            </View>
        </View>

    )
}

PhoneNumberInput.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    keyboardType: "default",
    maxLength: 10,
    inputStyle: null,
    editable: true,
    label: null,
    onChangePhoneNumber: null,
    getCountryCode: null,
}

export default PhoneNumberInput;

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
    },

    icon: {
        paddingLeft: SIZES.width * .03,
    },

    inputBox: {
        width: SIZES.width * .9,
        height: SIZES.height * .065,
        borderWidth: 1.2,
        borderRadius: SIZES.width * .024,
        // borderColor: COLORS.borderColor,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: SIZES.height * .03,
        marginBottom: SIZES.height * .02,
        overflow: 'hidden',
        // paddingVertical: SIZES.height * .02,
    },

    inputTextStyle: {
        flex: 1,
        // borderWidth: 1,
        backgroundColor: COLORS.white,
        // width: SIZES.width * .78,
        fontFamily: FONTS.regular,
        // fontSize: 15,
        fontSize: SIZES.width * .041,
        color: COLORS.black,
        // borderWidth: 1.2,
        borderRadius: SIZES.width * .024,
        // borderColor: COLORS.borderColor,
        marginBottom: -4,
        // paddingLeft: SIZES.width * .03,
    },

    label: {
        // borderWidth: 1,
        fontFamily: FONTS.medium,
        // fontSize: 15,
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        marginBottom: SIZES.height * .005,
    },

    flag_style: {
        width: 30,
        height: 20,
        marginLeft: SIZES.width * .03,
    },

})