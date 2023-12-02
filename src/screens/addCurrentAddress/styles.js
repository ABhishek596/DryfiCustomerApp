import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  formContainer: {
    paddingHorizontal: SIZES.width * 0.05,
    // paddingBottom: SIZES.height * 0.02,
    marginVertical: SIZES.height * 0.02,
    backgroundColor: COLORS.white,
  },
  locateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelSelect: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.025,
    color: COLORS.gray50,
    marginBottom: SIZES.height * 0.01,
  },
  label: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    marginHorizontal: SIZES.width * 0.015,
    // marginBottom: SIZES.height * 0.01,
  },
  locate: {
    height: SIZES.height * 0.03,
    width: SIZES.width * 0.05,
    // resizeMode: 'contain',
  },
  locateme: {
    height: SIZES.height * 0.03,
    width: SIZES.width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
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
  locateBtn: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  locateTxt: {
    fontFamily: 'Poppins Medium 500',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginHorizontal: 5,
  },
  text1: {
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    // lineHeight: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  text2: {
    fontFamily: 'Poppins Regular 400',
    fontSize: 9,
    // lineHeight: 18,
    color: '#A7A7A7',
  },
  text: {
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 18,
    color: '#A7A7A7',
  },
  addBtn: {
    marginTop: SIZES.height * 0.02,
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

  //box
  boxContainer: {
    flex: 1,
    // justifyContent: 'flex-end', // Align the content at the bottom
    alignItems: 'center', // Center the content horizontally
    position: 'absolute',
    alignSelf: 'center',
    height: 50,
    // marginTop: SIZES.height * 0.27,
    marginTop: -50,
    top: '50%',
    zIndex: 2,
  },
  square: {
    // width: 150,
    // height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'black', // Change the background color to your desired color
    borderRadius: 5, // Adjust the border radius for slightly rounded corners
    alignItems: 'center',
    justifyContent: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5, // Adjust the width to control the V shape
    borderRightWidth: 5, // Adjust the width to control the V shape
    borderTopWidth: 10, // Adjust the height to control the V shape
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black', // Match the square's background color
  },
  locationCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
  },
});
