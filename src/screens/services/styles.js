import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    //  ================  service card =====================

    box: {
        width: SIZES.width * .9,
        alignItems: 'center',
        borderRadius: SIZES.width * .05,
        overflow: 'hidden',
        backgroundColor: COLORS.light1,
        marginBottom: SIZES.height * .025,
    },

    box_header: {
        width: SIZES.width * .9,
        height: SIZES.height * .07,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.width * .05,
    },

    icon_box: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.width * .05,
        marginRight: SIZES.width * .03,
    },

    icon: {
        width: SIZES.width * .06,
        height: SIZES.width * .06,
        tintColor: COLORS.secondary,
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
        marginBottom: -4,
        color: COLORS.black,
    },

    text_box: {
        width: SIZES.width * .8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .03,
    },

})