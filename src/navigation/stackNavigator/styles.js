import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


export default StyleSheet.create({
  
    logo:{
        width: SIZES.width * .15,
        height: SIZES.height * .05,
    },
   
    headerBtn:{
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:50,
        backgroundColor: '#FDFDFD',
        borderColor: '#E3E9ED',
        marginRight: SIZES.width * .04,
    },
   

    headerStyle: {
        backgroundColor: COLORS.primary,
        elevation: 10,
        // shadowColor: 'rgba(0, 0, 0, 0.25)'
    },

    headerTitleStyle: {
        fontFamily: FONTS.medium,
        // fontSize: 17,
        fontSize: SIZES.width * .052,
        color: COLORS.white,
        marginBottom: -6,
        textAlign: 'center',
    },

    //  ========= header style ==========
    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
        paddingVertical: SIZES.height * .03,
        paddingHorizontal: SIZES.width * .05,
    },

    back: {
        width: SIZES.width * .06,
        height: SIZES.width * .06,
        tintColor: COLORS.white,
    },

    headerTitleStyle1: {
        fontFamily: FONTS.medium,
        // fontSize: 17,
        fontSize: SIZES.width * .052,
        color: COLORS.white,
        marginBottom: -6,
        marginLeft: SIZES.height * -.01,
    },
 
  })