import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button1 from '../../component/button/Button1';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import globalStyles from '../../styles/globalStyles';
import styles from './styles';
import {connect} from 'react-redux';
import {RNToasty} from 'react-native-toasty';
import {ForgetPasswordApi, VerifyOtpApi} from '../../redux/actions/authActions';
// import CountDown from '../../component/countDown/CountDown';

const Otp = ({
  ResendOtpApi,
  navigation,
  route,
  VerifyOtpApi,
  ForgetPasswordApi,
}) => {
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const [countdownTime, setCountdownTime] = useState(`02:00`);

  // console.log("otp data: ", route.params.data, route.params.otp )
  console.log("otp data: ", route.params.data.otp );

  const userdata = route.params && route.params.data;

  const [postData, setPostData] = useState({    
    userid: userdata?.id,
    otp: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (postData.otp) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [postData]);

  const handleSubmit = () => {
    if (postData.otp) {
      VerifyOtpApi(postData, navigation, userdata.id, data => setLoading(data));
      setPostData({
        otp: null,
      });
    } else {
      RNToasty.Error({
        title: 'Please enter otp',
        duration: 2,
      });
    }
  };

  const countdownTimer = async duration => {
    var timer = 60 * duration,
      minutes,
      seconds;
    // var timer = duration, minutes, seconds;
    const countdown = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      setCountdownTime(`${minutes}:${seconds}`);

      if (timer-- <= 0) {
        clearInterval(countdown);
      }
    }, 1000);
  };

  // useEffect(() => {
  //     countdownTimer(2);
  //     return () => {
  //         setCountdownTime(null);
  //     }
  // }, [])

  const resendOtp = () => {
    if (countdownTime == `00:00`) {
      ForgetPasswordApi(route.params.data);
      setCountdownTime(`02:00`);
      countdownTimer(2);
    } else {
      RNToasty.Normal({
        title: 'Please wait',
        duration: 2,
      });
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
      <View style={globalStyles.justify_between}>
        <View style={globalStyles.center}>
          <View style={globalStyles.title_box}>
        {/* <Text style={{alignSelf:'center'}}>{route.params.data.otp}</Text> */}
            <Text style={globalStyles.title}>OTP Verification</Text>
            <Text style={globalStyles.text}>
              Enter the 6 digits code that you received on your mobile.{' '}
            </Text>

            {/* <Text style={globalStyles.title}>otp - {userdata?.otp}</Text> */}
          </View>

          <View style={styles.OtpRow}>
            <OTPInputView
              // onPress={() => console.log("press me")}
              style={styles.OtpinputBox}
              pinCount={6}
              // code={postData.otp ? postData.otp : null}
              codeInputFieldStyle={styles.boxstyle}
              codeInputHighlightStyle={{borderColor: COLORS.secondary}}
              // onCodeFilled={(code => setOtp(code))}
              onCodeFilled={text => handleChange('otp', text)}
            />
          </View>
          <Button1
            disabled={loading}
            loading={loading}
            onPress={handleSubmit}
            // onPress={() => navigation.navigate("ResetPassword")}
          >
            Verify
          </Button1>

          {/* <View style={{ ...globalStyles.row1, ...styles.mv2 }}>
                        <TouchableOpacity
                            onPress={resendOtp}
                        >
                            <Text style={styles.btn_text}>Resend OTP</Text>
                        </TouchableOpacity>
                        <Text style={styles.time}>{countdownTime}</Text>
                    </View> */}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  VerifyOtpApi,
  ForgetPasswordApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Otp);
