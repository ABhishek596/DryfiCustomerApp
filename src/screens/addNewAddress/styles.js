import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  formContainer: {
    // flex: 1,
    paddingHorizontal: SIZES.width * 0.02,
    // paddingBottom: SIZES.height * 0.02,
    marginVertical: SIZES.height * 0.01,
    // backgroundColor: 'red',
    backgroundColor: COLORS.white,
  },
  label: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    marginBottom: SIZES.height * 0.01,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  BtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#A7A7A7',
    width: SIZES.width * 0.2,
    height: SIZES.height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.02,
  },
  btnTxt: {
    fontFamily: 'Poppins Medium 500',
    fontSize: 14,
    lineHeight: 18,
    color: '#A7A7A7',
  },
  text: {
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 18,
    color: '#A7A7A7',
  },
  addBtn: {
    marginTop: SIZES.height * 0.03,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZES.width * 0.03,
    // marginTop: height * .04,
  },

  // map
  mapview: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.24,
    alignSelf: 'center',
    borderRadius: 8,
  },
  mapimage: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.05,
    resizeMode: 'contain',
  },

  //   Here comes the new style start
  txtView: {},
  mainTxt: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontFamily: 'Poppins Regular 400',
  },
  decTxt: {
    color: COLORS.gray40,
    fontSize: SIZES.body5,
    fontFamily: 'Poppins Regular 400',
  },
  inputIcon: {
    height: SIZES.width * 0.06,
    width: SIZES.width * 0.06,
    marginRight: 10,
  },
  leftIcon: {
    height: SIZES.width * 0.06,
    width: SIZES.width * 0.06,
    marginLeft: 5,
  },
  //   Here comes the new style end
});
