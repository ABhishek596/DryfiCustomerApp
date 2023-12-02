import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from './styles';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import {
  COLORS,
  images,
  icons,
  data,
  ChangeDimention,
  Width,
  Height,
  SIZES,
} from '../../constants';
import globalStyles from '../../styles/globalStyles';
import Icons from '../../component/Icons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const OnBoardingScreen = ({navigation}) => {
  const [deviceOrientation, setDeviceOrientation] = useState(
    Dimensions.get('window').width < Dimensions.get('window').height
      ? 'portrait'
      : 'landscape',
  );
  // console.log("width height ; ", width, height)
  useEffect(() => {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      setDeviceOrientation('portrait');
    } else {
      setDeviceOrientation('landscape');
      // ChangeDimention()
    }
    // const deviceOrientation = () => {
    //     if (Dimensions.get('window').width < Dimensions.get('window').height) {
    //         setDeviceOrientation('portrait');
    //     } else {
    //         setDeviceOrientation('landscape');
    //     }
    // };
    // Dimensions.addEventListener('change', deviceOrientation);
    // return () => {
    //     //cleanup work
    //     Dimensions.removeEventListener('change', deviceOrientation);
    // };
  }, [deviceOrientation]);

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const Slide = ({item}) => {
    return (
      <View style={styles.slide_main}>
        <Image
          source={item.image}
          style={styles.onBoarding_Img}
          resizeMode="contain"
        />
        <View style={styles.box}>
          <View style={styles.text_box}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </View>
      </View>
    );
  };

  const indicator = () => {
    return (
      <View style={styles.indicator_container}>
        <View style={styles.Indicator_main_view}>
          {data.onBoarding.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.buttonColor,
                  width: SIZES.width * 0.12,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.footer_main}>
        {indicator()}
        <View style={styles.Button_parent_view}>
          {currentSlideIndex < data.onBoarding.length - 1 ? (
            <View style={styles.btn_row}>
              <TouchableOpacity
                style={{...styles.next_btn, backgroundColor: COLORS.lightGreen}}
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.8}>
                <Text style={{...styles.btn_text, color: COLORS.buttonColor}}>
                  Skip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.next_btn]}
                onPress={goNextSlide}
                activeOpacity={0.8}>
                <Text style={styles.btn_text}>Next</Text>
                {/* <Icons name={"right"} size={20} color={COLORS.white}/> */}
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={[styles.btn]}
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.8}>
              <Text style={styles.btn_text}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    // console.log(currentIndex)
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != data.onBoarding.length) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      {/* <View style={globalStyles.center}> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={data.onBoarding}
          // contentContainerStyle={{ height: SIZES.height * .999 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
