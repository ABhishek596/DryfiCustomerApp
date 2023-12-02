import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
// ========== header =================
    header_bg: {
        width: SIZES.width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30, 
        overflow: 'hidden',
        alignItems: 'center',
        paddingVertical: SIZES.height * .03,
    },

    header_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .03,
        marginBottom: SIZES.height * .01,
        // borderWidth: 1,
    },

    back_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: SIZES.width * .03,
    },

    page_title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .05,
        marginBottom: -5,
        color: COLORS.white,
    },

    notification_btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderRadius: SIZES.width * .05,
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
    },


    // ============= profile ==================
    profile_box: {
        alignItems: 'center',
    },

    image_box: {
        width: SIZES.width * .3,
        height: SIZES.height * .15,
        borderRadius: SIZES.width * .3,
        overflow: 'hidden',
        marginBottom: SIZES.height * .015,
        backgroundColor: COLORS.light,
    },

    profile: {
        width: SIZES.width * .3,
        height: SIZES.height * .15,
        borderRadius: SIZES.width * .3,
        // overflow: 'hidden',
        // marginBottom: SIZES.height * .015,
    },

    user_name: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .044,
        marginBottom: -5,
        color: COLORS.white,
    },

    text: {
        fontFamily: FONTS.regular,
        // fontSize: 12,
        fontSize: SIZES.width * .031,
        marginBottom: -5,
        color: COLORS.white,
    },

    // ================= screen navigation =============
    btn_container: {
        marginTop: SIZES.height * .03,
    },

    screen_btn: {
        height: SIZES.height * .06,
        borderBottomWidth: 1.3,
        borderBottomColor: COLORS.gray30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.height * .02,
    },

    screen_title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .044,
        marginBottom: -5,
        color: "#555555",
    },

    icon_style: {
        marginHorizontal: SIZES.width * .05,
    },
})