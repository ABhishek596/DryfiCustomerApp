import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../constants';
import styles from './styles';
import {
  CreateNewAddressApi,
  UpdateAddressApi,
} from '../../redux/actions/addressAction';
import {connect, useDispatch} from 'react-redux';
import Button1 from '../../component/button/Button1';
import {RNToasty} from 'react-native-toasty';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const AddCurrentAddress = ({
  navigation,
  userData,
  route,
  CreateNewAddressApi,
}) => {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {cData, currentCoords, addressLngLat, firstTime} = route?.params;
  const [changingCoords, setchangingCoords] = useState(addressLngLat);
  const [coordinates, setCoordinates] = useState(addressLngLat);
  const [locationData, setLocationData] = useState(cData);
  const [isFirstTime, setIsFirstTime] = useState(firstTime);

  console.log('This is location data', cData);

  const [postData, setPostData] = useState({
    customer_name: null,
    phone_number: null,
    pincode: null,
    address: null,
    locality: null,
    city: null,
    state: null,
    country: null,
    longitude: 0,
    map: 0,
    latitude: 0,
  });

  useEffect(() => {
    if (userData) {
      setPostData({
        ...postData,
        customer_name: userData.customer_details?.customer_name,
        phone_number: userData.customer_details?.phone_number,
        pincode: locationData?.postal_code,
        address: locationData?.fullAddress,
        locality: locationData?.sublocality,
        city: locationData?.administrative_area_level_3,
        state: locationData?.administrative_area_level_1,
        country: locationData?.country,
        longitude: changingCoords?.longitude,
        map: 0,
        latitude: changingCoords?.latitude,
      });
    }
  }, [locationData]);

  const handleSubmit = () => {
    if (
      postData.address &&
      postData.city &&
      postData.pincode &&
      postData.locality &&
      postData.state &&
      postData.country
    ) {
      CreateNewAddressApi(postData, navigation, data => setLoading(data));
      setPostData({
        customer_name: null,
        phone_number: null,
        pincode: null,
        address: null,
        locality: null,
        city: null,
        state: null,
        country: null,
        longitude: 0,
        map: 0,
        latitude: 0,
      });
    } else {
      RNToasty.Error({
        title: 'Something went wrong',
        duration: 2,
      });
    }
  };

  const getInvidualEntities = Obj => {
    const addressDetails = {};
    addressDetails.fullAddress = Obj?.formatted_address;

    Obj.address_components.forEach(component => {
      component.types.forEach(type => {
        addressDetails[type] = component.long_name;
      });
    });

    setLocationData(addressDetails);
  };

  const getLocationData = coords => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=AIzaSyCyEktzf7E30JTYeKWqQWbmqYA0d2du9vY`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        getInvidualEntities(result?.results?.[0]);
      })
      .catch(error => console.log('error', error));
  };

  const recenterToUserLocation = () => {
    mapRef.current.animateToRegion({
      latitude: currentCoords.latitude,
      longitude: currentCoords.longitude,
      latitudeDelta: 0.0006,
      longitudeDelta: 0.0023,
    });
  };

  // useEffect(() => {
  //   getLocationData();
  // }, [changingCoords]);

  return (
    <View
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={{flex: 1}}>
        <View style={styles.boxContainer}>
          <View style={styles.square}>
            <Text style={styles.text1}>Order will be delivered here</Text>
            <Text style={styles.text2}>
              Place the pin accurately on the map
            </Text>
          </View>
          <View style={styles.triangle} />
        </View>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          onRegionChangeComplete={data => {
            if (isFirstTime) {
              setIsFirstTime(false);
            } else {
              setchangingCoords(data);
              getLocationData(data);
            }
          }}
          zoomTapEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          region={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0006,
            longitudeDelta: 0.0023,
          }}></MapView>
        <TouchableOpacity
          onPress={recenterToUserLocation}
          activeOpacity={0.7}
          style={styles.locateBtn}>
          <Image source={icons.locateme} style={styles.locateme} />
          <Text style={styles.locateTxt}>LOCATE ME</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.labelSelect}>SELECT DELIVERY LOCATION</Text>
        <View style={styles.locateView}>
          <Image source={icons.locate} style={styles.locate} />
          <Text style={styles.label}>
            {locationData?.sublocality || locationData?.locality}
          </Text>
        </View>
        <Text style={styles.text}>{locationData?.fullAddress}</Text>
        <Button1
          disabled={loading}
          loading={loading}
          onPress={handleSubmit}
          style={styles.addBtn}>
          Confirm Location
        </Button1>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.userData,
});

const mapDispatchToProps = {
  CreateNewAddressApi,
  UpdateAddressApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrentAddress);
