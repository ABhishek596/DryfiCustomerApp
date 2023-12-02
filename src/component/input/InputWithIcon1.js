import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import Icons from '../Icons'


const InputWithIcon1 = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    secureTextEntry,
    leftIcon,
    onPress,
    rightIcon,
    inputStyle }) => {

    const [focusColor, setFocusColor] = useState(COLORS.borderColor)

    return (

        <View style={[styles.inputBox, inputStyle, { borderColor: focusColor }]}>
            <Icons
                name={leftIcon}
                size={20}
                color={focusColor == COLORS.secondary ? COLORS.secondary : COLORS.placeholderColor}
                style={styles.icon}
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.placeholderColor}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                style={[styles.inputTextStyle, inputTextStyle]}
                onBlur={() => setFocusColor(COLORS.borderColor)}
                onFocus={() => setFocusColor(COLORS.secondary)}
            />
            <TouchableOpacity
                onPress={onPress}
                style={styles.btn}>
                <Icons
                    name={rightIcon}
                    size={20}
                    color={focusColor == COLORS.secondary ? COLORS.secondary : COLORS.placeholderColor}
                />
            </TouchableOpacity>
        </View>
    )
}

InputWithIcon1.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    keyboardType: "default",
    maxLength: null,
    inputStyle: null,
    leftIcon: "email",
    secureTextEntry: true,
    onPress: null,
}

export default InputWithIcon1;

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
    },

    icon: {
        paddingLeft: SIZES.width * .03,
    },

    inputBox: {
        width: SIZES.width * .9,
        // height: SIZES.height * .06,
        borderWidth: 1.2,
        // borderRadius: 8,
        borderRadius: SIZES.width * .024,
        borderColor: COLORS.borderColor,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.height * .03,
    },

    inputTextStyle: {
        // borderWidth: 1,
        width: SIZES.width * .72,
        fontFamily: FONTS.regular,
        // fontSize: 15,
        fontSize: SIZES.width * .041,
        color: COLORS.black,
        paddingBottom: SIZES.height * .01,
        // paddingVertical: SIZES.height * .01,
        paddingLeft: SIZES.width * .03,
    },
})