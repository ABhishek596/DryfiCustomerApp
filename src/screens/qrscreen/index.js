import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { images } from '../../constants';
import Button1 from '../../component/button/Button1';


const QrScreen = ({navigation}) => {

  const handleButtonPress = () => {
    navigation.navigate('Order');
}
  return (
    <View style={styles.container}>
      <Text style={styles.payTxt}>Pay amount to this QR</Text>
      <Image style={styles.qrImg} source={images.qrimg} />
      <View style={{ alignSelf: 'center', paddingTop: 5,marginTop:20 }}>
        <Button1 children={'Continue'} onPress={handleButtonPress} style={{ borderRadius: 25, paddingVertical: 15 }} />
      </View>
    </View>
  );
};

export default QrScreen;
