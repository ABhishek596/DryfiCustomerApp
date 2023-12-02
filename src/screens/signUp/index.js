import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Linking, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Button1 from '../../component/button/Button1';
import InputWithIcon from '../../component/input/InputWithIcon';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import styles from './styles';
import {RNToasty} from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
import {SignUpApi} from '../../redux/actions/authActions';
import {COLORS} from '../../constants';
import messaging from '@react-native-firebase/messaging';

const SignUp = ({navigation, SignUpApi}) => {
  const [loading, setLoading] = useState(false);

  const [secure, setSecure] = useState(true);
  const [secure1, setSecure1] = useState(true);
  const [disable, setDisable] = useState(true);
  const [fcm, setFcm] = useState();

  useEffect(() => {
    getDeviceToken();
  }, []);

  const getDeviceToken = async () => {
    let fcmToken = await messaging().getToken();
    console.log('signin fcm : ', fcmToken);
    setFcm(fcmToken);
  };

  const [postData, setPostData] = useState({
    name: null,
    phone_number: null,
    email: null,
    password: null,
    confirm_password: null,
  });
  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('signup postdata ; ', postData);
    // console.log("phone slice : ", postData.phone_with_code?.slice(-10))

    if (
      postData.name &&
      postData.email &&
      postData.password &&
      postData.confirm_password &&
      postData.phone_number
    ) {
      // SignUpApi(postData, navigation)
      if (postData.password == postData.confirm_password) {
        SignUpApi({...postData, fcm_token: fcm}, navigation, data =>
          setLoading(data),
        );
        setPostData({
          name: null,
          phone_number: null,
          email: null,
          password: null,
          confirm_password: null,
        });
      } else {
        RNToasty.Error({
          title: 'Password and confirm password does not match',
          duration: 2,
        });
      }
    } else {
      RNToasty.Error({
        title: 'Please fill all fields',
        duration: 2,
      });
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        style={globalStyles.container}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="light-content"
        />
        <View style={styles.justify_between}>
          <View style={globalStyles.center}>
            <View style={globalStyles.title_box}>
              <Text style={globalStyles.title}>Create Account</Text>
              <Text style={globalStyles.text}>
                Please fill the details and create account
              </Text>
            </View>

            <InputWithIcon
              placeholder={'Name'}
              leftIcon={'user'}
              value={postData.name}
              onChangeText={text => handleChange('name', text)}
            />
            <InputWithIcon
              placeholder={'Phone number'}
              leftIcon={'call'}
              value={postData.phone_number}
              keyboardType={'numeric'}
              maxLength={10}
              onChangeText={text => handleChange('phone_number', text)}
            />

            <InputWithIcon
              placeholder={'Email Address'}
              leftIcon={'email'}
              value={postData.email}
              onChangeText={text => handleChange('email', text)}
            />

            <InputWithIcon1
              placeholder={'Password'}
              leftIcon={'lock'}
              rightIcon={secure ? 'eye-off' : 'eye'}
              onPress={() => setSecure(!secure)}
              secureTextEntry={secure}
              value={postData.password}
              onChangeText={text => handleChange('password', text)}
            />

            <InputWithIcon1
              placeholder={'Confirm password'}
              leftIcon={'lock'}
              rightIcon={secure1 ? 'eye-off' : 'eye'}
              onPress={() => setSecure1(!secure1)}
              secureTextEntry={secure1}
              value={postData.confirm_password}
              onChangeText={text => handleChange('confirm_password', text)}
            />

            <Button1
              disabled={loading}
              loading={loading}
              onPress={handleSubmit}>
              Sign Up
            </Button1>
          </View>
        </View>
        <View
          style={{
            ...globalStyles.row,
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <Text style={globalStyles.text}>Already have an account? </Text>
          <TouchableOpacity
            style={styles.signup_btn}
            onPress={() => navigation.navigate({name: 'Login'})} //back to login page
          >
            <Text style={styles.signup_text}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  SignUpApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
