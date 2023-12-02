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

  
})