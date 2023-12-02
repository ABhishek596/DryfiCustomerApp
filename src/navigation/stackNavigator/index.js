import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {COLORS, Icons, SIZES, icons, images} from '../../constants';
import styles from './styles';
import EditProfile from '../../screens/editProfile';
import HeaderLeft from '../../component/Header/HeaderLeft';
import Category from '../../screens/category';
import AllServices from '../../screens/allServices';
import BottomTab from '../bottomTab';
import Header from '../../component/Header/Header';
import Notification from '../../screens/notification';
import Payment from '../../screens/payment';
import PaymentSuccess from '../../screens/paymentSuccess';
import PaymentFailed from '../../screens/paymentFailed';
import home from '../../screens/home';
import ContactUs from '../../screens/contactUs';
import PrivacyPolicy from '../../screens/privacyPolicy';
import {Image, View} from 'react-native';
import services from '../../screens/services';
import Product from '../../screens/Product';
import editAddress from '../../screens/editAddress';
import AddNewAddress from '../../screens/addNewAddress';
import address from '../../screens/address';
import schedule from '../../screens/schedule';
import PickupSchedule from '../../screens/pickupSchedule';
import DeliverySchedule from '../../screens/deliverySchedule';
import OrderDetails from '../../screens/orderDetails';
import discount from '../../screens/discount';
import addCurrentAddress from '../../screens/addCurrentAddress';
import Subscription from '../../screens/subscription';
import SubscriptionDetails from '../../screens/subscriptionDetails';
import ActivePlan from '../../screens/activePlan';
import CheckOut from '../../screens/checkout';
import AddOnScreen from '../../screens/addOnScreen';
import QrScreen from '../../screens/qrscreen';
import AppointmentCompleted from '../../screens/appointmentCompleted';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      // initialRouteName='ContactUs'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={() => ({
          headerShown: false,
        })}
      />
      {/* <Stack.Screen name="Home" component={home}
        options={() => ({
          headerShown: false,
        })}
      /> */}

      <Stack.Screen
        name="Category"
        component={Category}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Category'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AllServices"
        component={AllServices}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'All Services'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Payment Method'} />
          ),
        })}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={({navigation}) => ({
          // headerTitle: "Payment Success",
          // headerStyle: styles.headerStyle,
          // headerTitleStyle: styles.headerTitleStyle1,
          // headerTitleAlign: 'left',
          // headerTintColor: COLORS.white,
          // headerBackImage: () => (
          //    <Image source={icons.back} style={styles.back} resizeMode='contain' />
          // ),
          // headerBackground: () => (
          //   <View style={styles.header}>
          //     <Image source={images.bg} style={{ height: SIZES.height * .1 }} />
          //   </View>
          // ),

          header: () => (
            <HeaderLeft navigation={navigation} title={'Payment Successful'} />
          ),
        })}
      />
      <Stack.Screen
        name="PaymentFailed"
        component={PaymentFailed}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Payment Failed'} />
          ),
        })}
      />
      {/* <Stack.Screen name="MyBucket" component={RateList}
        options={({ navigation }) => ({
           options={() => ({
                headerTitle: "Active Order",
                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTintColor: COLORS.white,
                // headerRight: () => (
                //   <HeaderRight icon={"clothing"} onPress={() => navigation.navigate("Filter")} />
                // ),
              })}
        })}
      /> */}

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Notification'} />
          ),
        })}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Contact Us'} />
          ),
        })}
      />
      <Stack.Screen
        name="Discount"
        component={discount}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Discount'} />
          ),
        })}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Privacy Policy'} />
          ),
        })}
      />
      <Stack.Screen
        name="Services"
        component={services}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Services'} />
          ),
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Product'} />
          ),
        })}
      />
      <Stack.Screen
        name="AddOn"
        component={AddOnScreen}
        options={({navigation}) => ({
          header: () => <HeaderLeft navigation={navigation} title={'Add On'} />,
        })}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Check Out'} />
          ),
        })}
      />
      <Stack.Screen
        name="Address"
        component={address}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Address'} />
          ),
        })}
      />
      <Stack.Screen
        name="AddNewAddress"
        component={AddNewAddress}
        options={({navigation, route}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={route?.params?.data ? 'Edit Address' : 'Add New Address'}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddCurrentAddress"
        component={addCurrentAddress}
        options={({navigation, route}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={
                route?.params?.data ? 'Edit Address' : 'Add Current Location'
              }
            />
          ),
        })}
      />
      <Stack.Screen
        name="EditAddress"
        component={editAddress}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Edit Address'} />
          ),
        })}
      />
      <Stack.Screen
        name="Schedule"
        component={schedule}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Schedule'} />
          ),
        })}
      />
      <Stack.Screen
        name="PickupSchedule"
        component={PickupSchedule}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Pickup Schedule'} />
          ),
        })}
      />
      <Stack.Screen
        name="DeliverySchedule"
        component={DeliverySchedule}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Delivery Schedule'} />
          ),
        })}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Order Details'} />
          ),
        })}
      />
      <Stack.Screen
        name="Subscription"
        component={Subscription}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Subscription Plans'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="SubscriptionDetails"
        component={SubscriptionDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ActivePlan"
        component={ActivePlan}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Active Plan'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen           
        name="QrScreen"
        component={QrScreen}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'QR'}
              showNotificationButton={true}
            />
          ),
        })}
      />
  <Stack.Screen
        name="AppointmentCompleted"
        component={AppointmentCompleted}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Booking Completed'}
              showNotificationButton={true}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
