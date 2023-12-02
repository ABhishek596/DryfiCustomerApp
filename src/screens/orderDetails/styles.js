import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center',
    },

    tab_row: {
        width: SIZES.width * .94,
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    tab_btn: {
        width: SIZES.width * .45,
        height: SIZES.height * .06,
        borderRadius: SIZES.width * .2,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 1,
        borderWidth: 1.3,
        borderColor: COLORS.primary,
    },

    tab_title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .042,
        color: COLORS.primary,
        marginBottom: -4,
    },
    image_box: {
        // width: SIZES.width * .4,
        marginRight: SIZES.width * .05,
    },

    order_image: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        // tintColor: COLORS.primary
    },

    order_divider: {
        width: SIZES.width,
        borderBottomWidth: 1.3,
        borderColor: COLORS.gray30,
        alignSelf: 'center',
        marginVertical: SIZES.height * .015,
    },

    order_id: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .036,
        color: COLORS.black,
        marginBottom: -4,
    },
    created_at: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .036,
        color: COLORS.black,
        marginBottom: -4,
    },
    status: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.width * .045,
        color: COLORS.primary,
        marginBottom: -6,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .036,
        color: COLORS.black,
        marginBottom: -4,
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        marginBottom: -4,
    },

    
    txt: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .036,
        color: COLORS.black,
        marginBottom: -4,
    },


    total: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .042,
        color: COLORS.black,
        marginBottom: -4,
    },
    
   

    row: {
        flexDirection: 'row',
         alignItems: 'center',
    },
})