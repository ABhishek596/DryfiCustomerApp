import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  accor_box: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    backgroundColor: COLORS.lightGreen2,
    borderRadius: SIZES.width * 0.03,
    paddingHorizontal: SIZES.width * 0.05,
    // marginBottom: SIZES.height * .025,
  },

  accor_title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.041,
    marginBottom: -4,
    color: COLORS.black,
  },

  product_box: {
    borderTopWidth: 1,
    borderTopColor: COLORS.black50,
    // borderBottomWidth: 5,
    backgroundColor: COLORS.lightGreen2,
    paddingTop: SIZES.height * 0.03,
    paddingBottom: SIZES.height * 0.015,
    borderBottomLeftRadius: SIZES.width * 0.02,
    borderBottomRightRadius: SIZES.width * 0.02,
    marginBottom: SIZES.height * 0.02,
  },

  product_row: {
    height: SIZES.height * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginBottom: SIZES.height * 0.01,
    paddingHorizontal: SIZES.width * 0.02,
  },

  product_name: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.04,
    marginBottom: -4,
    color: COLORS.black,
    flex: 0.8,
  },

  price: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.04,
    marginBottom: -4,
    color: COLORS.black,
    flex: 0.2,
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
    marginBottom: SIZES.width * 0.03,
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

  // ========= service container ================

  title: {
    width: SIZES.width * 0.9,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.043,
    color: COLORS.black,
    marginTop: SIZES.width * 0.03,
    marginBottom: SIZES.width * 0.02,
  },
});
