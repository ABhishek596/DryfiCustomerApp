import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from '../../constants'

export default StyleSheet.create({
    box: {
        width: SIZES.width * .9,
        // borderWidth: 1,
        // borderBottomWidth: 1,
        borderBottomColor: COLORS.black1,
        marginTop: SIZES.height * .02,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .045,
        // marginBottom: -5,
        color: COLORS.black,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .038,
        marginBottom: -5,
        color: COLORS.black,
    },

    policy_container: {
        backgroundColor: COLORS.white,
        marginBottom: SIZES.height * .02,
    },

})
