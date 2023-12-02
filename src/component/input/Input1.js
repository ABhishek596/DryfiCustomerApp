import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'


const Input1 = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    editable,
    label,
    multiline,
    numberOfLines,
    inputStyle }) => {

    const [focusColor, setFocusColor] = useState(COLORS.borderColor)

    return (
        <View>
            {label &&
                <Text style={styles.label}>{label}</Text>
            }
            {/* <View style={[styles.inputBox, inputStyle, { borderColor: focusColor }, multiline && {alignItems: 'flex-start'}]}> */}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.placeholderColor}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    style={[styles.inputBox, inputStyle, { borderColor: focusColor }, multiline && {alignItems: 'flex-start'}]}
                    // style={[styles.inputTextStyle, inputTextStyle, multiline && {textAlignVertical: 'top'}]}
                    editable={editable}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onBlur={() => setFocusColor(COLORS.borderColor)}
                    onFocus={() => setFocusColor(COLORS.secondary)}
                />
            {/* </View> */}
        </View>

    )
}

Input1.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    keyboardType: "default",
    maxLength: null,
    inputStyle: null,
    editable: true,
    label: null,
    multiline: false,
    numberOfLines: null,
}

export default Input1;

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
    },

    icon: {
        paddingLeft: SIZES.width * .03,
    },

    inputBox: {
        width: SIZES.width * .9,
        // height: SIZES.height * .065,
        borderWidth: 1.2,
        borderRadius: SIZES.width * .024,
        backgroundColor: COLORS.white,
        // marginBottom: SIZES.height * .03,
        marginBottom: SIZES.height * .02,
        fontSize: SIZES.width * .041,
        color: COLORS.black,
        paddingBottom: SIZES.height * .01,
        paddingLeft: SIZES.width * .03,
    },

    inputTextStyle: {
        borderWidth: 1,
        width: SIZES.width * .8,
        fontFamily: FONTS.regular,
        // fontSize: 15,
        fontSize: SIZES.width * .041,
        color: COLORS.black,
        paddingBottom: SIZES.height * .01,
        paddingLeft: SIZES.width * .03,
    },

    label: {
        // borderWidth: 1,
        fontFamily: FONTS.medium,
        // fontSize: 15,
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        marginBottom: SIZES.height * .005,
    },
})