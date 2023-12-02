import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  image: {
    width: SIZES.width,
    height: SIZES.height * 0.33,
    marginTop: SIZES.height * 0.02,
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.045,
    marginBottom: -5,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: SIZES.height * 0.01,
  },

  // ================ contact button =============
  btn_row: {
    width: SIZES.width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: SIZES.height * .1,
  },

  contact_btn: {
    width: SIZES.width * 0.26,
    height: SIZES.height * 0.11,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.03,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.light,
    marginVertical: SIZES.height * 0.025,
    paddingHorizontal: SIZES.width * 0.03,
  },

  icon_box: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderRadius: SIZES.width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    marginBottom: SIZES.height * 0.005,
  },

  btn_title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.032,
    marginBottom: -4,
    color: COLORS.black,
  },
});
