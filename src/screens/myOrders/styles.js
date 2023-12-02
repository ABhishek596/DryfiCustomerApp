import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  // ============== order button ================
  order_btn: {
    width: SIZES.width * 0.98,
    //   height: SIZES.width * .34,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.height * 0.025,
    padding: SIZES.width * 0.03,
    elevation: 4,
    // borderWidth: 1,
    borderColor: COLORS.gray30,
    borderRadius: SIZES.width * 0.03,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image_box: {
    // width: SIZES.width * .2,
    // height: SIZES.width * .2,
    // backgroundColor: COLORS.light7,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginRight: SIZES.width * 0.03,
    // borderWidth: 0.7,
    // borderColor: COLORS.gray30,
    // borderRadius:  SIZES.width * .25,
  },

  order_image: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    // tintColor: COLORS.primary
  },

  content_box: {
    width: SIZES.width * 0.55,
    alignItems: 'flex-start',
    // borderWidth: 1,
  },

  service: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.045,
    color: COLORS.black,
    // color: COLORS.white,
    marginBottom: -6,
  },

  order_id: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    marginBottom: -3,
  },

  order_status: {
    width: SIZES.width * 0.45,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.035,
    color: COLORS.primary,
    // color: COLORS.white,
    marginBottom: -4,
  },

  price: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    // color: COLORS.white,
    marginBottom: -4,
  },
});
