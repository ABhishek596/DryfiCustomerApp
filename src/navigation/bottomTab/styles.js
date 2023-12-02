import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    tabBarStyle:{
        backgroundColor: COLORS.secondary, 
        borderRadius: 12, 
        marginHorizontal: 0, 
        paddingVertical: 8,  
        height: SIZES.height * .08, 
        paddingBottom: 8, 
        elevation: 15,
    },
    
    activeLabelStyle: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .03,
        marginBottom: -3,
        color: COLORS.white,
    },

    inactiveLabelStyle: {
        fontFamily: FONTS.regular,
        // fontSize: 11,
        fontSize: SIZES.width * .03,
        marginBottom: -3,
        color: COLORS.white,
    },


    
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
    header:{
        backgroundColor: COLORS.white,
        elevation:10,
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
   
  })