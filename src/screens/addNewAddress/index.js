import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {icons} from '../../constants';
import styles from './styles';
import {
  CreateNewAddressApi,
  UpdateAddressApi,
} from '../../redux/actions/addressAction';
import {connect} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const AddNewAddress = ({navigation, route}) => {
  const {currentCoords} = route?.params;
  const [textInput, setTextInput] = useState('');
  const autocompleteRef = useRef(null);

  const handleClearButtonClick = () => {
    // Call the clear method on the autocomplete component using the ref
    if (autocompleteRef.current) {
      autocompleteRef.current.clear();
    }
  };

  const renderRightBtn = () => {
    if (textInput.length > 0) {
      return (
        <TouchableOpacity onPress={handleClearButtonClick}>
          <Image source={icons.cross} style={styles.inputIcon} />
        </TouchableOpacity>
      );
    }
  };
  const renderLeftIcon = () => {
    return (
      <TouchableOpacity disabled>
        <Image source={icons.magnify} style={styles.leftIcon} />
      </TouchableOpacity>
    );
  };

  function extractSpanValues(details, data) {
    const spanValues = {};
    const input = details.adr_address;
    spanValues.sublocality = data.structured_formatting.main_text;
    spanValues.fullAddress = data.structured_formatting.secondary_text;
    spanValues.latitude = details.geometry.location.lat;
    spanValues.longitude = details.geometry.location.lng;

    const obj = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    };

    const spanRegex = /<span class="(.*?)">(.*?)<\/span>/g;
    let match;

    while ((match = spanRegex.exec(input)) !== null) {
      const className = match[1].replace(/-/g, '_'); // Replace hyphens with underscores
      const value = match[2];
      spanValues[className] = value;
    }

    navigation.navigate('AddCurrentAddress', {
      currentCoords: currentCoords,
      addressLngLat: obj,
      cData: spanValues,
      firstTime: true,
    });
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.formContainer}>
        <GooglePlacesAutocomplete
          ref={autocompleteRef}
          textInputProps={{
            placeholderTextColor: 'grey',
            value: textInput,
            onChangeText: setTextInput,
          }}
          placeholder="Type for search your address..."
          minLength={2}
          autoFocus={true}
          returnKeyType={'search'}
          listViewDisplayed="true"
          fetchDetails={true}
          renderRow={row => {
            return (
              <View style={styles.txtView}>
                <Text numberOfLines={1} style={styles.mainTxt}>
                  {row?.structured_formatting?.main_text}
                </Text>
                <Text numberOfLines={1} style={styles.decTxt}>
                  {row?.structured_formatting?.secondary_text}
                </Text>
              </View>
            );
          }}
          isRowScrollable={false}
          keepResultsAfterBlur={true}
          onPress={(data, details = null) => {
            extractSpanValues(details, data);
          }}
          // getDefaultValue={() => {
          //   return ''; // text input default value
          // }}
          query={{
            key: 'AIzaSyCyEktzf7E30JTYeKWqQWbmqYA0d2du9vY',
            language: 'en',
            location: 'india',
            components: 'country:in',
          }}
          renderRightButton={renderRightBtn}
          renderLeftButton={renderLeftIcon}
          styles={{
            textInputContainer: {
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 0,
              padding: 0,
            },
            textInput: {
              color: 'black',
              borderRadius: 10,
              alignSelf: 'center',
              // borderWidth: 0.5,
              paddingHorizontal: 5,
              marginBottom: 0,
            },
            description: {
              fontWeight: 'bold',
              color: 'black',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          predefinedPlaces={[]}
          enablePoweredByContainer={false}
          currentLocation={true}
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          GooglePlacesDetailsQuery={{fields: ['geometry', 'formatted_address']}}
          debounce={300}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.userData,
});

const mapDispatchToProps = {
  CreateNewAddressApi,
  UpdateAddressApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewAddress);

// const add = {
//   postal_code: dd?.postal_code,
//   fullAddress: dd?.formatted_address,
//   sublocality: dd?.sublocality,
//   administrative_area_level_3: dd?.administrative_area_level_3,
//   administrative_area_level_1: dd?.administrative_area_level_1,
//   country: dd?.country,
//   longitude: geometry?.location?.lng,
//   map: 0,
//   latitude: geometry?.location?.lat,
// };

// const bb = {
//   address_components: [
//     {long_name: '5HGC+VF6', short_name: '5HGC+VF6', types: [Array]},
//     {long_name: 'Ranaghat', short_name: 'Ranaghat', types: [Array]},
//     {long_name: 'Nadia', short_name: 'Nadia', types: [Array]},
//     {
//       long_name: 'Presidency Division',
//       short_name: 'Presidency Division',
//       types: [Array],
//     },
//     {long_name: 'West Bengal', short_name: 'WB', types: [Array]},
//     {long_name: 'India', short_name: 'IN', types: [Array]},
//     {long_name: '741201', short_name: '741201', types: [Array]},
//   ],
//   adr_address:
//     '5HGC+VF6, <span class="locality">Ranaghat</span>, <span class="region">West Bengal</span> <span class="postal-code">741201</span>, <span class="country-name">India</span>',
//   business_status: 'OPERATIONAL',
//   current_opening_hours: {
//     open_now: true,
//     periods: [[Object]],
//     weekday_text: [
//       'Monday: Open 24 hours',
//       'Tuesday: Open 24 hours',
//       'Wednesday: Open 24 hours',
//       'Thursday: Open 24 hours',
//       'Friday: Open 24 hours',
//       'Saturday: Open 24 hours',
//       'Sunday: Open 24 hours',
//     ],
//   },
//   formatted_address: '5HGC+VF6, Ranaghat, West Bengal 741201, India',
//   geometry: {
//     location: {lat: 23.1771543, lng: 88.571146},
//     viewport: {northeast: [Object], southwest: [Object]},
//   },
//   icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png',
//   icon_background_color: '#7B9EB0',
//   icon_mask_base_uri:
//     'https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet',
//   name: 'SUNSHINE IT SOLUTION',
//   opening_hours: {
//     open_now: true,
//     periods: [[Object]],
//     weekday_text: [
//       'Monday: Open 24 hours',
//       'Tuesday: Open 24 hours',
//       'Wednesday: Open 24 hours',
//       'Thursday: Open 24 hours',
//       'Friday: Open 24 hours',
//       'Saturday: Open 24 hours',
//       'Sunday: Open 24 hours',
//     ],
//   },
//   place_id: 'ChIJoc2h14rF-DkR8kivuxOX8Ao',
//   rating: 5,
//   reference: 'ChIJoc2h14rF-DkR8kivuxOX8Ao',
//   reviews: [
//     {
//       author_name: 'Ayan Mallick',
//       author_url:
//         'https://www.google.com/maps/contrib/109574720260944724360/reviews',
//       language: 'en',
//       original_language: 'en',
//       profile_photo_url:
//         'https://lh3.googleusercontent.com/a-/ALV-UjXKSN-0Cg_POSAyJ3PYkUYvGjy4z4VUod79-et8b67PctE=s128-c0x00000000-cc-rp-mo',
//       rating: 5,
//       relative_time_description: '2 years ago',
//       text: "It' A Computer Tutorial Point.It's Open For Everyone.Here I Teach Class 5 To 12 Computer And Other Basic To Advance Computer Class Is Available Here",
//       time: 1614531239,
//       translated: false,
//     },
//     {
//       author_name: 'SOUMAJYOTI GUHA ROY',
//       author_url:
//         'https://www.google.com/maps/contrib/112469028469350177490/reviews',
//       language: 'en',
//       original_language: 'en',
//       profile_photo_url:
//         'https://lh3.googleusercontent.com/a-/ALV-UjV2FM94W6Z4cB3krbLHlT8UgdEbLKDvNvIdIPS3FvuSG3c=s128-c0x00000000-cc-rp-mo-ba2',
//       rating: 5,
//       relative_time_description: 'a year ago',
//       text: 'Well known person, helpful, cheap service,',
//       time: 1662709404,
//       translated: false,
//     },
//   ],
//   types: ['point_of_interest', 'establishment'],
//   url: 'https://maps.google.com/?cid=788296045798836466',
//   user_ratings_total: 2,
//   utc_offset: 330,
//   vicinity: '5HGC+VF6, Ranaghat',
// };

const t = {
  description:
    'SUN SHINE IT SOLUTIONS, Vijay Nagar Square, near Krozzon, Scheme 54 PU4, Indore, Madhya Pradesh, India',
  matched_substrings: [],
  place_id: 'ChIJv-fgRe8DYzkRSjBX9Ypab7E',
  reference: 'ChIJv-fgRe8DYzkRSjBX9Ypab7E',
  structured_formatting: {
    main_text: 'SUN SHINE IT SOLUTIONS',
    secondary_text:
      'Vijay Nagar Square, near Krozzon, Scheme 54 PU4, Indore, Madhya Pradesh, India',
  },
  terms: [
    {offset: 0, value: 'SUN SHINE IT SOLUTIONS'},
    {offset: 24, value: 'Vijay Nagar Square'},
    {offset: 44, value: 'near Krozzon'},
    {offset: 58, value: 'Scheme 54 PU4'},
    {offset: 73, value: 'Indore'},
    {offset: 81, value: 'Madhya Pradesh'},
    {offset: 97, value: 'India'},
  ],
  types: ['point_of_interest', 'establishment'],
};

const v = {
  country_name: 'India',
  extended_address: 'Scheme 54 PU4',
  locality: 'Indore',
  postal_code: '452010',
  region: 'Madhya Pradesh',
  street_address: 'Vijay Nagar Square',
};
