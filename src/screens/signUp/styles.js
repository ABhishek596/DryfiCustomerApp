import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  signup_btn: {
    // borderWidth: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black1,
  },

  signup_text: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginBottom: -5,
    color: COLORS.black1,
  },
  justify_between: {
    // width: SIZES.width * .9,
    // height: SIZES.height * 0.78,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.height * 0.03,
    // borderWidth: 1,
  },
});
