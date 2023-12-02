import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({

    box: {
        width: SIZES.width * .9,
        alignItems: "flex-end",
        marginTop: SIZES.height * -.02,
        marginBottom: SIZES.height * .03,
    },

    forget_btn: {
        // borderWidth: 1,
        alignItems: "flex-end",
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary,
    },

    forget_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -4,
        color: COLORS.secondary,
    },

    or: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -4,
        color: COLORS.black2,
    },

    or_box: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        backgroundColor: COLORS.light1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.width * .05,
        marginVertical: SIZES.height * .05,
    },

    socailBtn: {
        width: SIZES.width * .3,
        height: SIZES.height * .07,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.light1,
        borderWidth: 0.6,
        borderColor: COLORS.borderColor,
        borderRadius: 8,
    },

    btnRow: {
        width: SIZES.width * .65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        // marginVertical: SIZES.height * .05,
    },

    signup_btn: {
        // borderWidth: 1,
        alignItems: "flex-end",
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black1,
    },

    signup_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -5,
        color: COLORS.black1,
    },

})