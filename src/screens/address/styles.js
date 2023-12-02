import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
 
    address_box: {
        flex: 1,
        // height: SIZES.height, 
        alignItems: 'center',
        justifyContent: 'center',
    },
 
    btn: {
        width: SIZES.width * .94,
        alignSelf: 'center',
        marginBottom: SIZES.height * .03,
    },

      // ============== address card =============
      card: {
        width: SIZES.width * .94,
        backgroundColor: COLORS.white,
        elevation: 5,
        borderRadius: SIZES.width * .03,
        paddingVertical: SIZES.height * .02,
        marginBottom: SIZES.height * .025,
        // paddingLeft: SIZES.width * .04,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    box: {
        width: SIZES.width * .7,
        borderWidth: 1,
    },

    box_row: {
        width: SIZES.width * .74,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .005,
    },

    key: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .034,
        color: COLORS.black82,
        marginBottom: -4,
    },

    value: {
        width: SIZES.width * .48,
        fontFamily: FONTS.medium, 
        fontSize: SIZES.width * .034,
        color: COLORS.black1,
        marginBottom: -4,
        // borderWidth: 1,
    },

    edit_btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderBottomLeftRadius: SIZES.width * .03,
        backgroundColor: COLORS.light,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
    },

    delete_btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderTopLeftRadius: SIZES.width * .03,
        backgroundColor: COLORS.light,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
})