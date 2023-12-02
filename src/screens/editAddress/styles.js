import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    formContainer: {
        paddingHorizontal: SIZES.width * .05,
        paddingBottom: SIZES.height * .02,
        marginVertical: SIZES.height * .02,
        backgroundColor: COLORS.white,
    },
    label: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        marginBottom: SIZES.height * .01,
    },
    inputRow:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
  
   
    BtnRow:{
        flexDirection: 'row',
        alignItems:'center',
    },
    btn:{
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#A7A7A7',
        width: SIZES.width * .2,
        height: SIZES.height * .06,
        alignItems:"center",
        justifyContent: 'center',
        marginRight: SIZES.width * .02,
    },
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color:'#A7A7A7',
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: '#A7A7A7',
    },
   addBtn:{
        marginTop: SIZES.height * .03,
    },
   
    row:{
        flexDirection:'row',
        alignItems: 'center',
        marginHorizontal: SIZES.width * .03,
        // marginTop: height * .04,
    },
    
})