import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flatViewMain: {
    backgroundColor: COLORS.lightPrimary,
    margin: SIZES.width * 0.03,
    padding: SIZES.width * 0.04,
    borderRadius: SIZES.width * 0.06,
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconView: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginRight: SIZES.width * 0.05,
    borderRadius: SIZES.width * 0.02,
    padding: SIZES.width * 0.02,
    backgroundColor: COLORS.white,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: '600',
    marginVertical: SIZES.width * 0.01,
  },
  txtBold: {
    fontSize: SIZES.body3,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginVertical: SIZES.width * 0.01,
  },
  icon: {
    height: SIZES.width * 0.1,
    width: SIZES.width * 0.1,
    tintColor: 'black',
  },
  totalView: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.width * 0.05,
    paddingHorizontal: SIZES.width * 0.08,
    borderTopLeftRadius: SIZES.width * 0.08,
    borderTopRightRadius: SIZES.width * 0.08,
  },
  totalTxt: {
    fontSize: SIZES.body3,
    color: COLORS.white,
    fontWeight: '600',
    marginVertical: SIZES.width * 0.01,
  },
  totalTxtBold: {
    fontSize: SIZES.body3,
    color: COLORS.white,
    fontWeight: 'bold',
    marginVertical: SIZES.width * 0.01,
  },
});
