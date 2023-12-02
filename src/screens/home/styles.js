import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  // ========== header =================
  header_bg: {
    width: SIZES.width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    paddingVertical: SIZES.height * 0.03,
    tintColor: COLORS.primary,
  },

  header_row: {
    width: SIZES.width * 0.92,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * 0.02,
    // marginBottom: SIZES.height * .01,
    // borderWidth: 1,
  },

  back_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.05,
    // borderWidth: 1,
    alignItems: 'center',
    // justifyContent: "center",
    marginRight: SIZES.width * 0.03,
  },

  page_title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.05,
    marginBottom: -5,
    color: COLORS.white,
  },

  notification_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderRadius: SIZES.width * 0.05,
    backgroundColor: COLORS.white,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo_box: {
    width: SIZES.width * 0.2,
    height: SIZES.width * 0.2,
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.02,
    // backgroundColor: COLORS.white,
  },

  logo: {
    width: SIZES.width * 0.4,
    height: SIZES.width * 0.4,
    // borderRadius: SIZES.width * 0.02,
    tintColor: COLORS.white,
    // marginLeft: SIZES.width * 0.0,
    // borderRadius: 8,
    // overflow: 'hidden',
    // marginBottom: SIZES.height * .015,
  },

  // ============= profile ==================
  profile_box: {
    width: SIZES.width * 0.9,
    // alignItems: 'center',
    // marginVertical: SIZES.height * .01,
  },

  image_box: {
    width: SIZES.width * 0.12,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.width * 0.12,
    overflow: 'hidden',
    marginRight: SIZES.width * 0.03,
    backgroundColor: COLORS.light,
    // marginBottom: SIZES.height * .015,
  },

  profile: {
    width: SIZES.width * 0.12,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.width * 0.12,
    // overflow: 'hidden',
    // marginRight: SIZES.width * .03,
    // marginBottom: SIZES.height * .015,
  },

  user_name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.054,
    marginBottom: -5,
    color: COLORS.white,
  },

  text: {
    fontFamily: FONTS.regular,
    // fontSize: 12,
    fontSize: SIZES.width * 0.031,
    marginBottom: -5,
    color: COLORS.white,
  },

  // =============== location button  =====================
  loc_btn: {
    width: SIZES.width * 0.9,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * 0.03,
  },

  loc_box: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderRadius: SIZES.width * 0.05,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.03,
  },
  loc_row: {
    width: SIZES.width * 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    marginVertical: SIZES.height * 0.015,
  },

  your_loc: {
    fontFamily: FONTS.regular,
    // fontSize: 12,
    fontSize: SIZES.width * 0.031,
    marginBottom: -2,
    color: COLORS.black,
  },
  loc_text: {
    fontFamily: FONTS.medium,
    // fontSize: 12,
    fontSize: SIZES.width * 0.031,
    marginBottom: -3,
    color: COLORS.black,
  },

  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.width * 0.9,
    marginTop: SIZES.height * 0.02,
    marginVertical: SIZES.height * 0.01,
  },

  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.043,
    marginBottom: -5,
    color: COLORS.black,
  },

  see_all: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.043,
    marginBottom: -5,
    color: COLORS.secondary,
  },

  // ==============  offer box ================

  offer_box: {
    width: SIZES.width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    backgroundColor: COLORS.purple,
    borderRadius: SIZES.width * 0.03,
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.height * 0.01,
    marginTop: SIZES.height * 0.025,
  },

  offer_row: {
    width: SIZES.width * 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    marginVertical: SIZES.height * 0.015,
  },

  offer_image: {
    width: SIZES.width * 0.25,
    height: SIZES.width * 0.25,
    marginRight: SIZES.width * -0.02,
  },

  offer: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.07,
    // marginBottom: -6,
    color: COLORS.white,
  },

  off_text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.04,
    marginBottom: SIZES.height * -0.012,
    color: COLORS.white,
  },

  offer_text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.032,
    // marginBottom: -3,
    marginTop: SIZES.height * -0.012,
    color: COLORS.white,
  },

  offer_btn: {
    width: SIZES.width * 0.25,
    height: SIZES.height * 0.034,
    borderRadius: SIZES.width * 0.015,
    backgroundColor: COLORS.lightGreen1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.width * 0.02,
  },

  offer_btn_text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.031,
    marginBottom: -3,
    color: COLORS.secondary,
  },
});
