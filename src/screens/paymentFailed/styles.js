import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },
 
    imageBox: {
        width: SIZES.width * .7,
        height: SIZES.height * .28,
        alignItems: 'center',
        // borderWidth: 1,
        marginTop: SIZES.height * .06,
    },

    image: {
        width: SIZES.width * .7,
        height: SIZES.height * .3,
    },

    box: {
        width: SIZES.width * .7,
        alignItems: 'center',
        marginTop: SIZES.height * .02,
    },

    failed_text: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .09, 
        color: COLORS.danger,
        marginBottom: SIZES.width * -.025, 
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .045, 
        color: COLORS.black,
        // marginBottom: SIZES.height * .02,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .038, 
        color: COLORS.black,
        textAlign: 'center',
        marginTop:  SIZES.height * .01,
        marginVertical:  SIZES.height * .02,
    },

})