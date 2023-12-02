import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  title_box: {
    width: SIZES.width * 0.94,
    alignSelf: 'center',
    marginVertical: SIZES.height * 0.02,
  },

  title: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
    fontSize: SIZES.width * 0.05,
    marginBottom: -4,
  },

  date_btn: {
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.056,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.015,
    borderWidth: 1.2,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    marginRight: SIZES.width * 0.03,
  },

  date_text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.036,
    color: COLORS.primary,
    marginBottom: -3,
  },

  time_container: {
    width: SIZES.width * 0.94,
    minHeight: SIZES.height * 0.25,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.height * 0.01,
    borderRadius: SIZES.width * 0.024,
  },

  time_btn_box: {
    width: SIZES.width * 0.45,
    alignItems: 'center',
  },

  time_btn: {
    width: SIZES.width * 0.42,
    height: SIZES.height * 0.056,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.015,
    borderWidth: 1.2,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    marginVertical: SIZES.height * 0.01,
  },

  time_text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.027,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: -3,
  },

  no_time_text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.038,
    color: COLORS.primary,
    marginBottom: -3,
  },

  btn: {
    width: SIZES.width * 0.94,
    marginBottom: SIZES.height * 0.03,
    alignSelf: 'center',
  },
});
