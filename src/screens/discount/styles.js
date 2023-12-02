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
        height: SIZES.height * .9, 
        // alignItems: 'center',
        // justifyContent: 'center',
    },
 
    // btn: {
    //     position: 'absolute',
    //     alignSelf: 'center',
    //     bottom:0,
    // },

      // ============== address card =============
      card: {
        width: SIZES.width * .9,
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
        width: SIZES.width * .8,
        // borderWidth: 1,
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

   // ==============  offer box ================

   offer_box: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    backgroundColor: COLORS.purple,
    borderRadius: SIZES.width * .03,
    paddingHorizontal: SIZES.width * .05,
    paddingVertical: SIZES.height * .01,
    marginTop: SIZES.height * .025,
},

offer_row: {
    width: SIZES.width * .7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    marginVertical: SIZES.height * .015,
},

offer_image: {
    width: SIZES.width * .25,
    height: SIZES.width * .25,
    marginRight: SIZES.width * -.02,
},

offer: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * .07,
    // marginBottom: -6,
    color: COLORS.black,
},

off_text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * .04,
    marginBottom: SIZES.height * -.012,
    color: COLORS.black,
},

offer_text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * .032,
    // marginBottom: -3,
    marginTop: SIZES.height * -.012,
    color: COLORS.black,
},

offer_btn: {
    width: SIZES.width * .25,
    height: SIZES.height * .034,
    borderRadius: SIZES.width * .015,
    backgroundColor: COLORS.lightGreen1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.width * .02,
},

offer_btn_text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * .031,
    marginBottom: -3,
    color: COLORS.secondary,
},
 // ============= bottom containger =================
 bottom_container: {
    width: SIZES.width,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: SIZES.width * .09,
    borderTopRightRadius: SIZES.width * .09,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    // paddingTop: SIZES.height * .02,
},

total_amt_row: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: SIZES.height * .015,
    marginVertical: SIZES.height * .03,
},

bottom_btn_box: {
    width: SIZES.width,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingVertical: SIZES.height * .02,
},

amount_text: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .04,
    color: COLORS.white,
    marginBottom: -5,
},
})