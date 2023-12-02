import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, SIZES} from '../../constants';
import {
  DeleteAddressApi,
  GetAllAddressApi,
} from '../../redux/actions/addressAction';
import styles from './styles';
import Loading from '../../component/loading';
import Button1 from '../../component/button/Button1';
import Icons from '../../component/Icons';
import {RadioButton} from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';

const Address = ({
  navigation,
  GetAllAddressApi,
  DeleteAddressApi,
  // CreateOrder,
  address,
  loading,
  route,
}) => {
  const [userAddress, setUserAddress] = useState(0);
  const [currentCoords, setCurrentCoords] = useState(null);
  const [gettingCords, setGettingCords] = useState(false);
  const [locationAllowed, setLocationAllowed] = useState(false);

  const valuestatus = route.params?.valuestatus;
  console.log('valuestatus............', valuestatus);

  const getGPSLocation = () => {
    setGettingCords(true);
    Geolocation.getCurrentPosition(
      position => {
        setGettingCords(false);
        setCurrentCoords(position.coords);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
        setGettingCords(false);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setLocationAllowed(true);
      } else {
        setLocationAllowed(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    permission();
    GetAllAddressApi();
  }, []);

  useEffect(() => {
    getGPSLocation();
  }, [locationAllowed]);

  const postData = {
    ...route.params.data,
    address_id: userAddress,
  };
  console.log('postData--on--addressScreen', postData);
  const handlePress = ()=>{
    // CreateOrder(
    //   {
    //     ...postData,
    //     // payment_mode: id,
    //   },
    //   navigation,
    // );
    //Payment
    if (valuestatus === true) {
      navigation.navigate('AppointmentCompleted', { data: postData });
    } else if (valuestatus === false) {
      navigation.navigate('Payment', { data: postData });
    }
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading || gettingCords ? (
        <View style={{height: SIZES.height * 0.9, justifyContent: 'center'}}>
          <Loading />
        </View>
      ) : (
        <View
          style={[
            styles.address_box,
            address?.length > 0 && {justifyContent: 'space-between'},
            address?.length <= 3 && {height: SIZES.height * 0.92},
          ]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {address &&
                address[0] &&
                address.map((item, index) => {
                  // const address_field = item.address?.split(",")
                  // console.log("add : ", address_field)
                  return (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.5}
                      // onPress={() => {setUserAddress(item.id), navigation.navigate("Payment")}}
                      onPress={() => setUserAddress(item.id)}
                      style={[
                        styles.card,
                        index == 0 && {marginTop: SIZES.height * 0.025},
                      ]}>
                      <RadioButton
                        // value={userAddress}
                        color={COLORS.primary}
                        status={
                          userAddress === item.id ? 'checked' : 'unchecked'
                        }
                        onPress={() => setUserAddress(item.id)}
                      />
                      <View
                      //  style={styles.box}
                      >
                        {item.customer_name && (
                          <View style={styles.box_row}>
                            <Text style={styles.key}>Name</Text>
                            <Text style={styles.value}>
                              {item.customer_name}
                            </Text>
                          </View>
                        )}
                        {item.phone_number && (
                          <View style={styles.box_row}>
                            <Text style={styles.key}>Phone</Text>
                            <Text style={styles.value}>
                              {item.phone_number}
                            </Text>
                          </View>
                        )}
                        <View style={styles.box_row}>
                          <Text style={styles.key}>Address</Text>
                          <Text style={styles.value}>{item.address}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>Locality</Text>
                          <Text style={styles.value}>{item.locality}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>Country</Text>
                          <Text style={styles.value}>{item.country}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>City</Text>
                          <Text style={styles.value}>{item.city}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>State</Text>
                          <Text style={styles.value}>{item.state}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>Pin Code</Text>
                          <Text style={styles.value}>{item.pincode}</Text>
                        </View>
                      </View>

                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.edit_btn}
                        onPress={() =>
                          navigation.navigate('EditAddress', {
                            addressData: item,
                          })
                        }>
                        <Icons name={'edit1'} size={20} color={COLORS.gray30} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.delete_btn}
                        onPress={() => DeleteAddressApi(item.id)}>
                        <Icons
                          name={'delete'}
                          size={20}
                          color={COLORS.danger}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
          {userAddress && address && address[0] ? (
            <Button1
              style={styles.btn}                  //Payment
              onPress={handlePress}>
              Place Booking
            </Button1>
          ) : (
            <View>
              <Button1
                style={{
                  ...styles.btn,
                  marginBottom: SIZES.height * 0.01,
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                }}
                backgroundColor={COLORS.white}
                textColor={COLORS.primary}
                onPress={() => {
                  if (locationAllowed) {
                    navigation.navigate('AddCurrentAddress', {
                      currentCoords: currentCoords,
                      addressLngLat: currentCoords,
                      firstTime: false,
                    });
                  } else {
                    Alert.alert(
                      'Location Permission',
                      'Please allow location permission first.',
                    );
                  }
                }}>
                Use my current location
              </Button1>
              <Button1
                style={styles.btn}
                onPress={() => {
                  if (locationAllowed) {
                    navigation.navigate('AddNewAddress', {
                      currentCoords: currentCoords,
                    });
                  } else {
                    Alert.alert(
                      'Location Permission',
                      'Please allow location permission first.',
                    );
                  }
                }}>
                Add New Address
              </Button1>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  loading: state.address.loading,
  address: state.address.address,
});

const mapDispatchToProps = {
  GetAllAddressApi,
  DeleteAddressApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
