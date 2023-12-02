import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const CategoryButton = ({ onPress, title, isActive, marginLeft, marginBottom }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={{ ...styles.cat_touch, backgroundColor: isActive ? COLORS.primary : COLORS.white, marginLeft: marginLeft, marginBottom: marginBottom }}
            onPress={onPress}
        >
            <Text style={[styles.cat_text, isActive && styles.active_cat_text]}>{title}</Text>
        </TouchableOpacity>
    )
}

CategoryButton.defaultProps = {
    onPress: null,
    title: null,
    isActive: false,
    marginLeft: null,
    marginBottom: null,
}

export default CategoryButton

const styles = StyleSheet.create({
    // ============= category button =========
    cat_touch: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        borderRadius: SIZES.width * .015,
        backgroundColor: COLORS.white,
        elevation: 5,
        paddingHorizontal: SIZES.width * .04,
        paddingVertical: SIZES.height * .01,
        marginRight: SIZES.width * .03,
        marginVertical: SIZES.height * .02,
    },

    cat_text: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .034,
        color: COLORS.black,
        marginBottom: -4,
        // textAlign: 'center',
    },

    active_cat_text: {
        fontFamily: FONTS.medium,
        color: COLORS.white,
    },
})