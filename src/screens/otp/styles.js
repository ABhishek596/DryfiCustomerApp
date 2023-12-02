import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  OtpRow: {
    width: SIZES.width * 0.9,
  },

  OtpinputBox: {
    height: SIZES.height * 0.1,
  },

  boxstyle: {
    // width: SIZES.width * .16,
    borderWidth: 1,
    // borderColor: COLORS.primary,
    borderColor: COLORS.light,
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: COLORS.black,
    paddingBottom: SIZES.height * 0.01,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },

  time: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: COLORS.secondary,
    marginBottom: -4,
  },

  btn_text: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.black,
    marginBottom: -4,
  },

  mv2: {
    marginVertical: SIZES.height * 0.02,
  },
});
