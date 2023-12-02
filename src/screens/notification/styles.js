import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .048,
        marginBottom: -5,
        color: COLORS.black,
        marginTop: SIZES.height * .02,
    },


    //  ================  notification card =====================

    box: {
        width: SIZES.width,
        // height: SIZES.height * .07,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderBottomWidth: 1.3,
        borderColor: COLORS.gray30,
        paddingHorizontal: SIZES.width * .05,
        paddingVertical: SIZES.height * .02,
        // marginBottom: SIZES.height * .025,
    },


    image: {
        width: SIZES.width * .12,
        height: SIZES.width * .12,
        borderRadius: SIZES.width * .015,
        marginRight: SIZES.width * .03,
        // borderWidth: 1,
    },

    service_title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .042,
        marginBottom: -5,
        color: COLORS.white,
    },

    service_text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .037,
        marginBottom: -3,
        color: COLORS.black,
    },

    text_box: {
        width: SIZES.width * .75,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: SIZES.height * .02,
        // marginBottom: SIZES.height * .03,
    },

    view_btn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        // borderWidth: 1,
        // marginBottom: SIZES.height * -.02,
    },

    view_text: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .037,
        marginBottom: -3,
        color: COLORS.secondary,
        // borderWidth: 1,
    },

})