import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({onPress, source, navigation}) => {
  let userData = useSelector(state => state.auth.userData);

  // console.log("user data : ", userData)
  return (
    <View style={styles.box}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0.5}}
        colors={[COLORS.primary, COLORS.primary1]}
        // colors={["#1C3FAA", "#2351DB"]}
        style={styles.container}>
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <Image
              source={icons.dryfinewlogo}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          {/* <Text style={styles.title}>Dryfi</Text> */}
        </View>
      </LinearGradient>
    </View>
  );
};

Header.defaultProps = {
  onPress: null,
};

export default Header;

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.white,
  },
  container: {
    width: SIZES.width,
    height: SIZES.height * 0.24,
    // backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBox: {
    // width: SIZES.width * .2,
    // height: SIZES.height * .1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    marginTop: SIZES.height * 0.03,
  },

  image: {
    width: SIZES.width * 0.5,
    height: SIZES.width * 0.5,
    tintColor: COLORS.white,
  },

  title: {
    fontFamily: FONTS.bold,
    // fontSize: 22,
    fontSize: SIZES.width * 0.056,
    color: COLORS.white,
    marginTop: -3,
  },
});
