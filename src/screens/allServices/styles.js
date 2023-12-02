import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .043,
        marginBottom: -5,
        color: COLORS.black,
    },

    box: {
        width: SIZES.width * .94,
        alignItems: 'center',
        // borderWidth: 1,
    },
})