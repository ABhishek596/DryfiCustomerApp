import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
const CustomButton1 = ({ onPress, imageSource, buttonText }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.rowContainer}>
      <View style={{padding:5,backgroundColor:'white', borderRadius:180/2,marginRight: 10,}}>
        <Image source={imageSource} style={styles.image} resizeMode='contain'/>
        </View>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#B70689', // Background color for the button
    padding: 10,
    borderRadius:responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    width:responsiveWidth(90),
    alignSelf:'center'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 15, // Set your desired image width
    height: 15, // Set your desired image height
    backgroundColor:'white',
    padding: 10,
    // marginRight: 10, // Adjust the spacing between image and text
    // borderRadius:180/2,
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: responsiveFontSize(2), // Set your desired font size
    fontWeight: 'bold', // Set font weight if needed
  },
});

export default CustomButton1;
