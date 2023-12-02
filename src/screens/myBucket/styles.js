import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    card: {
        width: SIZES.width * .9,
        //   height: SIZES.width * .34,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.height * .025,
        padding: SIZES.width * .03,
        elevation: 4,
        // borderWidth: 1,
        borderColor: COLORS.gray30,
        borderRadius: SIZES.width * .03,
    },

    image_box: {
        width: SIZES.width * .25,
        height: SIZES.width * .25,
        backgroundColor: COLORS.light7,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .03,
        borderWidth: 0.7,
        borderColor: COLORS.gray30,
        borderRadius: SIZES.width * .03,
    },

    image: {
        width: SIZES.width * .2,
        height: SIZES.width * .2,
    },

    content_box: {
        width: SIZES.width * .55,
        alignItems: 'flex-start',
        // borderWidth: 1,
    },

    service: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .045,
        color: COLORS.black,
        // color: COLORS.white,
        marginBottom: -6,
    },

    sub_title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .031,
        color: COLORS.black2,
        // color: COLORS.white,
        marginBottom: -3,
    },

    price: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.width * .046,
        color: COLORS.black,
        // color: COLORS.white,
        marginBottom: -4,
    },

    rating_row: {
        marginTop: SIZES.height * .004,
        marginBottom: SIZES.height * .01,
    },




    // ============== filter bottom sheet ================= 
    

    bottomSheet: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        alignItems: 'center',
    },

    titleRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    bottomTitle: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        color: COLORS.black
    },

    radioBtnRow: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        elevation: 4,
        alignItems: 'center',
        marginBottom: SIZES.height * .025,
        borderRadius: 8,
    },
    radioLabelTxt: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: '#302F33',
        marginLeft: SIZES.width * .03,
    },

    bottomSheet1: {
        height: SIZES.height * .6,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        alignItems: 'center',
    },

})

