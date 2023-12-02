import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  payTxt: {
    color: COLORS.black,
    fontSize: SIZES.h5,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: SIZES.width * 0.02,
  },
  qrImg: {
    height: SIZES.height * 0.7,
    width: SIZES.width * 1,
    resizeMode: 'contain',
  },
});
