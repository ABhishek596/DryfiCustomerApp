import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ImageBackground,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {COLORS, SIZES, icons, images} from '../../constants';
import Loading from '../../component/loading';
import {http2} from '../../services/api';
import Icons from '../../component/Icons';
import CategoryCard from '../../component/card/CategoryCard';
import ServiceCard from '../../component/card/ServiceCard';
import messaging from '@react-native-firebase/messaging';
import {GetActiveSubscription} from '../../redux/actions/subscriptionAction';
import CustomButton from '../../component/custombutton';

const Home = ({
  navigation,
  userData,
  loading,
  categoryList,
  serviceList,
  GetActiveSubscription,
}) => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    // GetNotificationApi(navigation)
    console.log('Message handled in the background!', remoteMessage);
  });

  messaging().getInitialNotification(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    GetActiveSubscription();
  }, []);

  // console.log('category list : ====>>>>', JSON.stringify(categoryList));
  // console.log('service list :===>>>>', serviceList);

  // console.log("skldjf : ",  userData?.profile_picture?.slice(-10, -4))

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
              <View style={styles.logo_box}>
                <Image
                  source={icons.dryfinewlogo}
                  style={styles.logo}
                  resizeMode="stretch"
                />
              </View>
              <View style={globalStyles.row}>
                <View style={styles.image_box}>
                  {/* <Image source={userData?.profile_picture?.slice(-10, -4) == "avatar" ? images.profile1 : { uri: userData.profile_picture }} style={styles.profile}
                  resizeMode='stretch' 
                /> */}
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
                <TouchableOpacity
                  style={styles.notification_btn}
                  onPress={() => navigation.navigate('Notification')}>
                  <Icons
                    name={'notification'}
                    size={22}
                    color={COLORS.secondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.profile_box}>
              {/* <Text style={styles.user_name}>Hello {userData && (`${userData.name}`)}</Text> */}
              <Text style={styles.user_name}>
                Hello {userData?.customer_details?.customer_name}
              </Text>
              <Text style={styles.text}>Welcome Back</Text>
            </View>

            {/* <TouchableOpacity style={styles.loc_btn}>
              <View style={styles.loc_box}>
                <Icons name={"location"} size={20} color={COLORS.white} />
              </View>
              <View style={styles.loc_row}>
                <View>
                  <Text style={styles.your_loc}>Your Location</Text>
                  <Text style={styles.loc_text}>643292 Weber Fork, Cruzcheater</Text>
                </View>
                <Icons name={"down-outline"} size={20} color={COLORS.black} />
              </View>
            </TouchableOpacity> */}
          </ImageBackground>
          <CustomButton 
          onPress={()=>navigation.navigate('PickupSchedule',{pickupmylaundry:true})}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={globalStyles.center}>
              {/* category container */}
              <>
                {/* <View style={styles.row1}>
                  <Text style={styles.title}>Category</Text> */}
                  {/* <TouchableOpacity
                    onPress={() => navigation.navigate("Category")}
                  >
                    <Text style={styles.see_all}>See All</Text>
                  </TouchableOpacity> */}
                {/* </View> */}
                {/* {categoryList && (
                  <FlatList
                    data={categoryList}
                    renderItem={({item, index}) => (
                      <CategoryCard
                        marginLeft={index == 0 ? SIZES.width * 0.05 : null}
                        mr={
                          index == categoryList?.length - 1
                            ? SIZES.width * 0.05
                            : SIZES.width * 0.02
                        }
                        category={item.category_name}
                        source={{uri: item.images}}
                        onPress={() =>
                          navigation.navigate('Product', {catId: item})
                        }
                      />
                    )}
                    horizontal={true}
                    key={item => item.id}
                    showsHorizontalScrollIndicator={false}
                  />
                )} */}
              </>

              {/* offer box */}
              {/* <View style={styles.offer_box}>
                <View>
                  <View style={globalStyles.row}>
                    <Text style={styles.offer}>20% </Text>
                    <Text style={styles.off_text}>off</Text>
                  </View>
                  <Text style={styles.offer_text}>Only first order</Text>

                  <View style={styles.offer_btn}>
                    <Text style={styles.offer_btn_text}>Special 20%</Text>
                  </View>
                </View>

                <Image source={images.offer} style={styles.offer_image} resizeMode='contain' />
              </View> */}

              {/* service container */}
              <>
                <View
                  style={{
                    ...globalStyles.row1,
                    marginVertical: SIZES.height * 0.02,
                  }}>
                  <Text style={styles.title}>All Services</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AllServices')}>
                    <Text style={styles.see_all}>See All</Text>
                  </TouchableOpacity>
                </View>
                {serviceList?.map(item => (
                  <ServiceCard
                    key={item.service?.id}
                    // source={images.primWash}
                    source={{uri: item.image}}
                    service={item.service?.service_name}
                    subTitle={item.service?.description}
                    onPress={() =>
                      navigation.navigate('Product', {
                        serviceId: item.service,
                      })
                    }
                  />
                ))}
              </>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.userData,
  loading: state.home.loading,
  categoryList: state.home.categoryList,
  serviceList: state.home.serviceList,
});

const mapDispatchToProps = {
  GetActiveSubscription,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const category = [
  {
    id: 1,
    category_name: 'Men',
    category_name_ar: null,
    category_image: 'categories/6b92e366d82c3c92deaed75974fd7545.png',
    service_id: ['1'],
    status: 1,
    created_at: '2023-10-09T06:30:49.000000Z',
    updated_at: '2023-10-09T06:30:49.000000Z',
    services: [{id: 1, service_name: 'Dry Cleaning'}],
    images:
      'https://dryfi.theprojecttest.xyz/public/uploads/categories/6b92e366d82c3c92deaed75974fd7545.png',
  },
  {
    id: 2,
    category_name: 'Women',
    category_name_ar: null,
    category_image: 'categories/2577ecdc7eb5f0141df74358eee429c0.png',
    service_id: ['2', '3'],
    status: 1,
    created_at: '2023-10-09T06:31:49.000000Z',
    updated_at: '2023-10-09T06:31:49.000000Z',
    services: [
      {id: 2, service_name: 'Ironing'},
      {id: 3, service_name: 'Wash & Clean'},
    ],
    images:
      'https://dryfi.theprojecttest.xyz/public/uploads/categories/2577ecdc7eb5f0141df74358eee429c0.png',
  },
  {
    id: 3,
    category_name: 'Kids',
    category_name_ar: null,
    category_image: 'categories/e2cff0705861f2e45251761b6d3cd44f.png',
    service_id: ['1', '3'],
    status: 1,
    created_at: '2023-10-09T06:32:06.000000Z',
    updated_at: '2023-10-09T06:32:06.000000Z',
    services: [
      {id: 1, service_name: 'Dry Cleaning'},
      {id: 3, service_name: 'Wash & Clean'},
    ],
    images:
      'https://dryfi.theprojecttest.xyz/public/uploads/categories/e2cff0705861f2e45251761b6d3cd44f.png',
  },
];

const service = [
  {
    image:
      'https://dryfi.theprojecttest.xyz/public/uploads/services/f9b05ca89ba2e6899ad4a1b83175b61c.png',
    service: {
      created_at: '2023-10-09T06:27:36.000000Z',
      description: 'Dry Cleaning',
      description_ar: null,
      id: 1,
      image: 'services/f9b05ca89ba2e6899ad4a1b83175b61c.png',
      service_name: 'Dry Cleaning',
      service_name_ar: null,
      status: 1,
      updated_at: '2023-10-09T06:27:36.000000Z',
    },
  },
  {
    image:
      'https://dryfi.theprojecttest.xyz/public/uploads/services/cff14d111f88e238d5314f6f3690aa3b.png',
    service: {
      created_at: '2023-10-09T06:28:48.000000Z',
      description: 'ironing',
      description_ar: null,
      id: 2,
      image: 'services/cff14d111f88e238d5314f6f3690aa3b.png',
      service_name: 'Ironing',
      service_name_ar: null,
      status: 1,
      updated_at: '2023-10-09T06:28:48.000000Z',
    },
  },
  {
    image:
      'https://dryfi.theprojecttest.xyz/public/uploads/services/15c2441979364ee709d29474185ea199.png',
    service: {
      created_at: '2023-10-09T06:29:17.000000Z',
      description: 'wash and clean',
      description_ar: null,
      id: 3,
      image: 'services/15c2441979364ee709d29474185ea199.png',
      service_name: 'Wash & Clean',
      service_name_ar: null,
      status: 1,
      updated_at: '2023-10-09T06:29:17.000000Z',
    },
  },
];
