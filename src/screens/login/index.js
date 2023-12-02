import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Linking, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Button1 from '../../component/button/Button1';
import Icons from '../../component/Icons';
import InputWithIcon from '../../component/input/InputWithIcon';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import {COLORS, SIZES} from '../../constants';
import styles from './styles';
import {RNToasty} from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
import {
  AuthFunction,
  GoogleLoginApi,
  LoginApi,
} from '../../redux/actions/authActions';
import Loading from '../../component/loading';
import {googleLogin} from '../../services/socialLogin';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Loader from '../../component/Loader/Loader';
import messaging from '@react-native-firebase/messaging';

const Login = ({navigation, LoginApi, AuthFunction, GoogleLoginApi}) => {
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
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
    phone_number: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (postData.phone_number) {
      LoginApi({...postData, fcm_token: fcm}, navigation, data =>
        setLoading(data),
      );
      setPostData({
        phone_number: null,
      });
    } else {
      RNToasty.Error({
        title: 'Please Enter Mobile Number.',
        duration: 2,
      });
    }
  };

  useEffect(() => {
    // GoogleSignin.configure();
    GoogleSignin.configure({
      androidClientId:
        '224749907988-9r04i0gq53ktr9c0qef2dh6b4st3jd6l.apps.googleusercontent.com', //debug
      offlineAccess: true,
      webClientId:
        '224749907988-39nk28ebu1dijftbtjvon9tqbrbtdf41.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    // GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log('user info : ', userInfo);
      GoogleLoginApi(userInfo, data => setLoading(data));
      // setState({ userInfo });
      // return userInfo
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('sign in cancel : ', error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('already in progress : ', error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('not available : ', error);
        // play services not available or outdated
      } else {
        console.log(' other error : ');
        // some other error happened
      }
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />

      <Loader loading={loading} />

      <View style={globalStyles.justify_between}>
        <View style={globalStyles.center}>
          <View style={globalStyles.title_box}>
            <Text style={globalStyles.title}>Log In Now</Text>
            <Text style={globalStyles.text}>
              Please login to continue using our app
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              marginBottom: SIZES.width * 0.05,
            }}>
            <Text
              style={{
                textAlign: 'left',
                color: COLORS.black,
                fontSize: SIZES.body3,
                fontWeight: 'bold',
              }}>
              Phone Number
            </Text>
          </View>
          <InputWithIcon
            placeholder={'Enter Number'}
            leftIcon={'smartphone'}
            value={postData.phone_number}
            keyboardType={'numeric'}
            onChangeText={text => handleChange('phone_number', text)}
          />
          {/* <InputWithIcon1
            placeholder={'Password'}
            leftIcon={'lock'}
            rightIcon={secure ? 'eye-off' : 'eye'}
            onPress={() => setSecure(!secure)}
            secureTextEntry={secure}
            value={postData.password}
            onChangeText={text => handleChange('password', text)}
          /> */}
          {/* <View style={styles.box}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Otp')}
              style={styles.forget_btn}>
              <Text style={styles.forget_text}>Forgot Your Password?</Text>
            </TouchableOpacity>
          </View> */}
          <Button1
            disabled={loading}
            // loading={loading}
            onPress={handleSubmit}>
            Submit
          </Button1>

          {/* <View style={globalStyles.center}>
            <View style={styles.or_box}>
              <Text style={styles.or}>Or</Text>
            </View>
          </View> */}

          {/* <View style={styles.btnRow}>
            <TouchableOpacity
              style={styles.socailBtn}
              // onPress={signIn}
              // onPress={() => GoogleLoginApi(googleLogin((data) => setLoading(data)), (data) => setLoading(data))}
              onPress={() =>
                googleLogin(GoogleLoginApi, data => setLoading(data))
              }>
              <Icons name={'google'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socailBtn}>
              <Icons name={'facebook'} size={25} color={COLORS.blue} />
            </TouchableOpacity>
          </View> */}
        </View>

        <View style={globalStyles.row}>
          <Text style={globalStyles.text}>Don’t have an account? </Text>
          <TouchableOpacity
            style={styles.signup_btn}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signup_text}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  LoginApi,
  AuthFunction,
  GoogleLoginApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
