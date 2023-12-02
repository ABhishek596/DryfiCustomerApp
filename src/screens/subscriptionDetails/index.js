import {Text, View, Image, SafeAreaView, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Button1 from '../../component/button/Button1';
import {connect} from 'react-redux';
import {
  GetSubsPackagesDetails,
  BuySubscription,
} from '../../redux/actions/subscriptionAction';
import Loading from '../../component/loading';
import RazorpayCheckout from 'react-native-razorpay';
import {COLORS} from '../../constants';
import HeaderLeft from '../../component/Header/HeaderLeft';

const SubscriptionDetails = ({
  navigation,
  loading,
  route,
  GetSubsPackagesDetails,
  subsPackageDetails,
  userData,
  BuySubscription,
  buySubStatus,
}) => {
  const {
    id,
    headerTitle = 'Plan Details',
    line1Title = 'Number of Booking',
    line2Title = 'Plan Validity',
    line3Title = 'Subscription Fee',
  } = route.params;

  useEffect(() => {
    GetSubsPackagesDetails(id);
  }, []);

  const handlePayment = () => {
    var options = {
      description: 'Payment to Dryfi Laundry',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      // image: userData.picture,
      currency: 'INR',
      key: 'rzp_test_pnG5OaLilqPgMb', // my razor pay api key
      // key: 'rzp_test_sHuXJaB9QnKnlO', // my razor pay api key
      // key: 'rzp_test_APKjeA7r85HKW4',
      // amount: item.price * 100,
      amount: subsPackageDetails?.sub_fee * 100,
      name: userData.customer_name,
      prefill: {
        email: userData.email,
        contact: userData.phone_number,
        name: userData.customer_name,
      },
      theme: {color: COLORS.primary},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // UpdateTransactionApi(data.razorpay_payment_id, navigation, id);
        // navigation.navigate("PaymentSuccess")
        // console.log('transaction id : ', data.razorpay_payment_id);
        // console.log('All data : ', data);
        BuySubscription(subsPackageDetails?.id, data.razorpay_payment_id);
      })
      .catch(error => {
        // navigation.navigate('PaymentFailed');
        console.log(`Error: ${error.code} | ${error.description}`);
        alert('Payment Failed.');
        // alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const navigatetoproduct =()=>{
    navigation.navigate('Home');
  }

  const handleCashSubscription = () => {
    BuySubscription(subsPackageDetails?.id, 'cash');
    navigatetoproduct();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderLeft
        navigation={navigation}
        title={headerTitle}
        showNotificationButton={true}
      />
      <View style={styles.mainView}>
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.mainSubView}>
            <View style={styles.rowView}>
              <View style={styles.imgView}>
                <Image
                  source={{uri: subsPackageDetails?.sub_image}}
                  style={styles.img}
                />
              </View>
              <View style={styles.textView}>
                <Text style={styles.nameTxt}>
                  {subsPackageDetails?.sub_name}
                </Text>
                <Text style={styles.feeTxt}>
                  {subsPackageDetails?.sub_description}
                </Text>
              </View>
            </View>
            <View style={styles.subDetailsView}>
              <Text style={styles.infoTxt}>{line1Title}</Text>
              <Text style={styles.infoTxtBold}>
                {subsPackageDetails?.no_of_bookings}
              </Text>
            </View>
            <View style={styles.horizLine} />
            <View style={styles.subDetailsView}>
              <Text style={styles.infoTxt}>{line2Title}</Text>
              <Text style={styles.infoTxtBold}>
                {subsPackageDetails?.validity_label}
              </Text>
            </View>
            <View style={styles.horizLine} />
            <View style={styles.subDetailsView}>
              <Text style={styles.infoTxt}>{line3Title}</Text>
              <Text style={styles.infoTxtBold}>
                {`₹ ${subsPackageDetails?.sub_fee}`}
              </Text>
            </View>
            <View style={styles.horizLine} />
            <Button1
              onPress={() => {
                // handlePayment();
                // navigation.navigate('QrScreen');
                Alert.alert('Payment Method', 'Please choose payment method', [
                  {
                    text: 'Cash',
                    onPress: () => handleCashSubscription(),
                  },
                  {
                    text: 'Online',
                    onPress: () => navigation.navigate('QrScreen'),
                  },
                ]);
              }}
              style={styles.btn}>
              Purchase Subscription
            </Button1>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  userData: state.auth.userData,
  subsPackageDetails: state.subscription.subsPackageDetails,
  buySubStatus: state.subscription.buySubStatus,
});

const mapDispatchToProps = {
  GetSubsPackagesDetails,
  BuySubscription,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscriptionDetails);
