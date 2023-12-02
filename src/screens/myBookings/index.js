import {
    View,
    Text,
    ScrollView,
    Pressable,
    StatusBar,
    FlatList,
    ImageBackground,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import {connect} from 'react-redux';
  import styles from './styles';
  import globalStyles from '../../styles/globalStyles';
  import {COLORS, SIZES, icons, images} from '../../constants';
  import Loading from '../../component/loading';
  import {useEffect} from 'react';
  import {GetAllOrders} from '../../redux/actions/orderAction';
  import Moment from 'moment';
  import ProgressCircle from 'react-native-progress-circle';
  
  const MyBookings = ({navigation, route}) => {
    // console.log("orderlist data : ", orderList)
    const [refresh, setRefresh] = useState(false);
    
    // useEffect(() => {
    //   GetAllOrders();
    // }, []);
  
    // const onRefresh = () => {
    //   setRefresh(true);
    //   GetAllOrders();
    //   setRefresh(false);
    // };

    // useEffect(() => {
    //     setRefresh(false);
    //   }, [orderList]);

    const orderList = route.params?.orderList;
    // console.log('orderListAAAAAAAA', orderList);


    // const { orderList } = route.params;
  
    return (
      <>
        {/* {loading && orderList == null ? (
          <Loading />
        ) : ( */}
          <View style={globalStyles.container}>
            <StatusBar
              backgroundColor="transparent"
              translucent={true}
              barStyle="light-content"
            />
            <View>
              {/* category container */}
              <View>
                {orderList && (
                  <FlatList
                    data={[orderList]}
                    renderItem={({item, index}) => (
                      <Pressable
                        // onPress={() =>
                        //   navigation.navigate('OrderDetails', {data: item})
                        // }
                        style={[
                          styles.order_btn,
                          index == 0 && {marginTop: SIZES.height * 0.025},
                        ]}>
                        <View style={styles.row}>
                          <View style={styles.image_box}>
                            <ProgressCircle
                              percent={100}
                              radius={SIZES.width * 0.09}
                              borderWidth={3}
                              color={COLORS.primary}
                              // shadowColor="#999"
                              bgColor={COLORS.light7}>
                              <Image
                                style={styles.order_image}
                                // source={{ uri: item.image }}
                                source={require('../../assets/icons/appointment_outline.png')}
                                // source={icons.orderPlace}
                              />
                            </ProgressCircle>
                          </View>
                          <View>
                            <Text style={styles.order_id}>
                             {/* {` Booking Id: ${item.order_id}`} */} Booking Id: 001
                            </Text>
                            <Text style={{fontSize: 12, color: COLORS.black}}>
                              {Moment(item.created_at).format(
                                'DD MMM-YYYY hh:mm',
                              )}
                            </Text>
                            <Text numberOfLines={1} style={styles.order_status}>
                              {/* {item.label_name} */} Booking Confirm
                            </Text>
                          </View>
                        </View>
                        {/* <Image
                                style={styles.order_image}
                                // source={{ uri: item.image }}
                                source={icons.orderPlace}
                              /> */}
                        {/* <View>
                          <Text style={styles.price}>₹ {item.total}</Text>

                        </View> */}
                      </Pressable>
                    )}
                    refreshing={refresh}
                    // onRefresh={onRefresh}
                    key={(item, index) => item.index}
                    showsVerticalScrollIndicator={false}
                  />
                )}
              </View>
              <View>
                {!orderList && (<Text style={{alignSelf:'center',fontSize:16,fontWeight:'bold',marginTop:100}}>No Booking Found</Text>)}
              </View>
            </View>
          </View>
        {/* )} */}
      </>
    );
  };
  
//   const mapStateToProps = state => ({
//     loading: state.order.loading,
//     orderList: state.order.orderList,
//   });
  
//   const mapDispatchToProps = {
//     GetAllOrders,
//   };
  
//   export default connect(mapStateToProps, mapDispatchToProps)(MyBookings);
  export default MyBookings;