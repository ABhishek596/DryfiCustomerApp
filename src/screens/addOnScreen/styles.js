import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bottom_btn_box: {
    width: SIZES.width,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    // borderTopLeftRadius: SIZES.width * .09,
    // borderTopRightRadius: SIZES.width * .09,
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: SIZES.height * .1,
    paddingVertical: SIZES.height * 0.02,
    paddingHorizontal: SIZES.width * 0.05,
  },
  bottom_container: {
    // width: SIZES.width,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.width * 0.09,
    borderTopRightRadius: SIZES.width * 0.09,
    // alignItems: 'center',
    // marginHorizontal: 20,
    // position: 'absolute',
    // bottom: 0,
    // paddingTop: SIZES.height * .02,
  },

  // ============== filter bottom sheet =================

  bottomSheet: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center',
  },

  titleRow: {
    width: SIZES.width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.height * 0.02,
  },

  bottomTitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.black,
  },

  radioBtnRow: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.06,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    elevation: 4,
    alignItems: 'center',
    marginBottom: SIZES.height * 0.025,
    borderRadius: 8,
  },
  radioLabelTxt: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    lineHeight: 18,
    color: '#302F33',
    marginLeft: SIZES.width * 0.03,
  },

  bottomSheet1: {
    height: SIZES.height * 0.8,
    // height: SIZES.height * .5,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center',
  },

  //    ========== feature container ===========

  row2: {
    width: SIZES.width,
    flexDirection: 'row',
    // marginTop: SIZES.height * .02,
  },
  sideBar: {
    width: SIZES.width * 0.4,
    height: SIZES.height,
    borderRadius: 8,
    elevation: 5,
    // overflow: 'hidden',
    backgroundColor: COLORS.white,
  },

  row1: {
    // maxWidth: SIZES.width * .54,
    width: SIZES.width * 0.52,
    // maxHeight: SIZES.height * .3,
    // height: SIZES.height * .6,
    flexDirection: 'row',
    alignItems: 'center',
    // flexWrap: 'wrap',
    // marginTop: SIZES.height * .01,
    // borderWidth: 1,
    // backgroundColor: COLORS.black,
  },
  rightBox: {
    // marginTop: SIZES.height * .02,
    height: SIZES.height * 0.65,
    marginLeft: SIZES.width * 0.03,
    // borderWidth: 1,
  },
  label: {
    // width: SIZES.width * .45,
    maxWidth: SIZES.width * 0.45,
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    marginLeft: SIZES.width * 0.02,
    marginBottom: -5,
  },

  charge_row: {
    // width: SIZES.width * .45,
    maxWidth: SIZES.width * 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // marginBottom: SIZES.height * .01,
  },

  charges: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.03,
    color: COLORS.black,
    marginLeft: SIZES.width * 0.02,
  },

  color_box: {
    width: SIZES.width * 0.03,
    height: SIZES.width * 0.03,
    borderRadius: SIZES.width * 0.03,
    marginLeft: SIZES.width * 0.03,
    backgroundColor: COLORS.primary,
    // borderWidth: 1,
  },

  btn: {
    backgroundColor: COLORS.light,
    height: SIZES.height * 0.06,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.02,
    paddingHorizontal: SIZES.width * 0.06,
  },
  btnTxt: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: COLORS.secondary,
  },
  checkBox: {
    transform: [{scaleX: 1.1}, {scaleY: 1.1}],
  },
  btnRow: {
    position: 'absolute',
    // marginTop: SIZES.height * .02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width * 0.9,
    bottom: SIZES.height * 0.03,
    // marginLeft: SIZES.width * -.2,
  },
  bottomBtn: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.05,
    width: SIZES.width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.015,
    elevation: 5,
  },
  bottomBtnTxt: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.038,
    color: COLORS.white,
  },
});
