import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },

    imageBox: {
        width: SIZES.width * .7,
        height: SIZES.height * .28,
        alignItems: 'center',
        // borderWidth: 1,
        marginTop: SIZES.height * .06,
    },

    image: {
        width: SIZES.width * .7,
        height: SIZES.height * .3,
    },

    box: {
        width: SIZES.width * .9,
        alignItems: 'center',
        marginTop: SIZES.height * .02,
    },

    success_text: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .09, 
        color: COLORS.success,
        marginBottom: SIZES.width * -.025, 
    },
    
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .045, 
        color: COLORS.black,
        // marginBottom: SIZES.height * .02,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .038, 
        color: COLORS.black,
        textAlign: 'center',
        marginTop:  SIZES.height * .01,
        marginVertical:  SIZES.height * .02,
    },

    blueText: {
        fontFamily: FONTS.semiBold,
        fontSize: 14, 
        color: "#0F56CC",
        marginBottom:  SIZES.height * .02,
    },

    price: {
        fontFamily: FONTS.semiBold,
        fontSize: 14, 
        color: "#222222",
    },

    row: {
        // width: SIZES.width * .86,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        // borderBottomColor: '#E1E1E1',
    },

    line: {
        width: SIZES.width * .9,
        height: 1.5,
        backgroundColor: '#E1E1E1',
        marginVertical:  SIZES.height * .02,
    },

  
})