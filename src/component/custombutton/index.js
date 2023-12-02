import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.rowContainer}>
      <View style={{padding:5,backgroundColor:'white', borderRadius:180/2}}>
        <Image
          source={require('../../assets/images/van.png')}
          style={styles.icon}
          resizeMode='contain'
        />
                </View>

        <Text style={styles.text}>Pickup My Laundry</Text>
        <View style={{padding:5,backgroundColor:'white', borderRadius:180/2}}>
        <Image
          source={require('../../assets/images/left.png')}
          style={styles.icon}
          resizeMode='contain'
        />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: '8%',
    backgroundColor: '#B70689', // Add your desired background color
    borderRadius: 10, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop:'5%'
    
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20, // Adjust as needed
    height: 20, // Adjust as needed
    // marginRight: 10, // Adjust spacing between elements
    padding:0,
    backgroundColor:'white',
    borderRadius:180/2
  },
  text: {
    fontSize: 18, // Adjust font size as needed
    fontWeight: 'bold', // Adjust font weight as needed
    color:'white',
    marginHorizontal:15
  },
});

export default CustomButton;
