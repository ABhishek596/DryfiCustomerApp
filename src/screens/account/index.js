import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import globalStyles from '../../styles/globalStyles';
import {COLORS, images} from '../../constants';
import styles from './styles';
import Icons from '../../component/Icons';
import {connect} from 'react-redux';
import {GetUserDataApi, LogoutApi} from '../../redux/actions/authActions';
import Loading from '../../component/loading';
import {http2} from '../../services/api';

const ScreenNavigation = ({iconName, onPress, children}) => {
  return (
    <TouchableOpacity
      style={[
        styles.screen_btn,
        children == 'Logout' && {borderBottomWidth: 0},
      ]}
      onPress={onPress}>
      <Icons
        name={iconName}
        size={25}
        color={COLORS.secondary}
        style={styles.icon_style}
      />
      <Text style={styles.screen_title}>{children}</Text>
    </TouchableOpacity>
  );
};

const Account = ({
  navigation,
  LogoutApi,
  loading,
  userData,
  GetUserDataApi,
}) => {
  useEffect(() => {
    GetUserDataApi();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          {/* header */}
          <ImageBackground source={images.bg} style={styles.header_bg}>
            <View style={styles.header_row}>
              <View style={globalStyles.row}>
                <TouchableOpacity
                  style={styles.back_btn}
                  onPress={() => navigation.goBack()}>
                  <Icons name={'back'} size={22} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.page_title}>Profile</Text>
              </View>
              <TouchableOpacity style={styles.notification_btn}>
                <Icons name={'notification'} size={22} color={COLORS.black} />
              </TouchableOpacity>
            </View>

            <View style={styles.profile_box}>
              {/* <Image source={!userData?.profile_picture.slice(-10, -4)  == "avatar" ? {uri: userData.profile_picture} : images.profile1} style={styles.profile}
                                resizeMode='stretch'
                            />  */}
              <View style={styles.image_box}>
                <Image
                  source={
                    userData?.profile_picture
                      ? {uri: userData.profile_picture}
                      : images.profile1
                  }
                  style={styles.profile}
                  resizeMode="stretch"
                />
              </View>
              <Text
                style={
                  styles.user_name
                }>{`${userData?.customer_details?.customer_name}`}</Text>
              <Text style={styles.text}>Welcome Back</Text>
            </View>
          </ImageBackground>
          {/* button container */}
          <View style={styles.btn_container}>
            <ScreenNavigation
              iconName={'profile'}
              onPress={() => navigation.navigate('EditProfile')}>
              Edit Profile
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'profile'}
              onPress={() => navigation.navigate('ActivePlan')}>
              Subscription
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'call1'}
              onPress={() => navigation.navigate('ContactUs')}>
              Contact Us
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'shield'}
              onPress={() => navigation.navigate('PrivacyPolicy')}>
              Privacy Policy
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'info'}
              onPress={() => navigation.navigate('Services')}>
              Services
            </ScreenNavigation>
            {/* <ScreenNavigation
                            iconName={"setting"}
                            onPress={() => navigation.navigate("PaymentSuccess")}  //ActivePlan Subscription
                        >Settings</ScreenNavigation> */}
            <ScreenNavigation iconName={'logout'} onPress={LogoutApi}>
              Logout
            </ScreenNavigation>
          </View>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.userData,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  LogoutApi,
  GetUserDataApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
