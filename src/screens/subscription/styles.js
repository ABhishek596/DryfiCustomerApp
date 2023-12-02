import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  listTouch: {
    marginHorizontal: SIZES.width * 0.04,
    marginTop: SIZES.width * 0.03,
    marginBottom: SIZES.width * 0.01,
    borderRadius: SIZES.width * 0.05,
    backgroundColor: COLORS.white,
    elevation: 5,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.lightPrimary,
    paddingHorizontal: SIZES.width * 0.04,
    paddingVertical: SIZES.width * 0.04,
    borderRadius: SIZES.width * 0.05,
  },
  imgView: {
    backgroundColor: COLORS.white,
    padding: SIZES.width * 0.01,
    borderRadius: SIZES.width * 0.03,
  },
  img: {
    height: SIZES.height * 0.1,
    width: SIZES.width * 0.2,
    borderRadius: SIZES.width * 5,
    resizeMode: 'contain',
  },
  nameTxt: {
    color: COLORS.primary,
    fontSize: SIZES.body3,
    fontWeight: 'bold',
    flex: 0.5,
  },
  feeTxtView: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.width * 0.03,
    paddingVertical: SIZES.width * 0.02,
    borderRadius: SIZES.width * 0.015,
    flex: 0.3,
  },
  feeTxt: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  activeSubBtn: {
    // position: 'absolute',
    alignSelf: 'center',
    bottom: SIZES.width * 0.05,
    borderRadius: SIZES.width * 0.1,
    width: SIZES.width * 0.4,
  },
  continueBtn: {
    // position: 'absolute',
    alignSelf: 'center',
    bottom: SIZES.width * 0.05,
    borderRadius: SIZES.width * 0.1,
    width: SIZES.width * 0.4,
  },
});
