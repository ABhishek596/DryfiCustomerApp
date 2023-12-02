import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Moment from 'moment';
import StepIndicator from 'react-native-step-indicator';
import {COLORS, SIZES, icons} from '../../constants';
import {useState} from 'react';
import styles from './styles';
import {useEffect} from 'react';
import {GetOrderStatusList} from '../../redux/actions/orderAction';
import {connect} from 'react-redux';
import ProgressCircle from 'react-native-progress-circle';

const labels = [
  'Order Placed',
  'Assigned',
  'On the way to pickup',
  'Processing',
  'Ready to dispatch',
  'On the way to deliver',
  'Completed',
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 35,
  currentStepStrokeWidth: 3,
  currentStepIndicatorLabelFontSize: 13,
  currentStepLabelColor: COLORS.primary,
  stepIndicatorCurrentColor: COLORS.white,
  stepStrokeCurrentColor: COLORS.primary,
  separatorStrokeWidth: 2,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: COLORS.primary,
  stepStrokeUnFinishedColor: COLORS.gray69,
  separatorFinishedColor: COLORS.primary,
  separatorUnFinishedColor: COLORS.gray69,
  stepIndicatorFinishedColor: COLORS.white,
  stepIndicatorUnFinishedColor: COLORS.gray69,
  stepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: COLORS.gray69,
  stepIndicatorLabelFinishedColor: COLORS.primary,
  stepIndicatorLabelUnFinishedColor: COLORS.white,
  labelColor: COLORS.gray69,
  backgroundColor: COLORS.primary,
  labelSize: 16,
  labelAlign: 'flex-start',
};

const Divider = () => {
  return <View style={styles.order_divider} />;
};

const OrderDetails = ({
  navigation,
  GetOrderStatusList,
  route,
  orderStatusList,
}) => {
  // console.log("order details : ", route.params?.data)

  const singleOrder = route.params.data;

  console.log('This is objjjjjj-->>>>', singleOrder);

  const [active, setActive] = useState(1);

  useEffect(() => {
    GetOrderStatusList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tab_row}>
        <TouchableOpacity
          onPress={() => setActive(1)}
          style={[
            styles.tab_btn,
            active == 1 && {backgroundColor: COLORS.primary},
          ]}>
          <Text
            style={[styles.tab_title, active == 1 && {color: COLORS.white}]}>
            Order Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActive(2)}
          style={[
            styles.tab_btn,
            active == 2 && {backgroundColor: COLORS.primary},
          ]}>
          <Text
            style={[styles.tab_title, active == 2 && {color: COLORS.white}]}>
            Track Order
          </Text>
        </TouchableOpacity>
      </View>
      {singleOrder && (
        <ScrollView>
          {active == 1 && (
            <View style={{padding: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                }}>
                {/* <View style={{ height: 90, width: 90 }} >
                                        <Image
                                            style={{ flex: 1, width: undefined, height: undefined }}
                                            source={{ uri: singleOrder.image }}
                                        />
                                    </View> */}
                <View style={styles.image_box}>
                  <ProgressCircle
                    percent={14}
                    radius={SIZES.width * 0.1}
                    borderWidth={3}
                    color={COLORS.primary}
                    // shadowColor="#999"
                    bgColor={COLORS.light7}>
                    <Image
                      style={styles.order_image}
                      // source={{ uri: item.image }}
                      source={icons.orderPlace}
                    />
                  </ProgressCircle>
                </View>
                <View
                  style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    width: '60%',
                  }}>
                  <Text style={styles.order_id}>
                    Order Id - {singleOrder.order_id}
                  </Text>
                  {/* <View style={{ margin: 3 }} /> */}
                  <Text style={styles.created_at}>
                    {Moment(singleOrder.created_at).format('DD MMM-YYYY hh:mm')}
                  </Text>
                  <Text style={styles.status}>{singleOrder.label_name}</Text>
                </View>
              </View>

              <Divider />

              {/* <View style={styles.row}>
                                <View>
                                    <Text style={styles.title}>Door No. / Landmark</Text>
                                    <Text style={styles.text}>{singleOrder.door_no}</Text>
                                </View>
                            </View>
                            */}
              {/* <Divider /> */}

              <View style={styles.row}>
                <Text style={styles.title}>Pickup Date : </Text>
                <Text style={styles.text}>
                  {Moment(singleOrder.pickup_date).format('DD MMM-YYYY')}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Pickup Time : </Text>
                <Text style={styles.text}>{singleOrder.pickup_time}</Text>
              </View>

              <Divider />

              <View style={styles.row}>
                <Text style={styles.title}>Delivery Date : </Text>
                <Text style={styles.text}>
                  {Moment(singleOrder.delivery_date).format('DD MMM-YYYY')}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Delivery Time : </Text>
                <Text style={styles.text}>{singleOrder.delivery_time}</Text>
              </View>
              <Divider />
              <View style={styles.row}>
                <View>
                  <Text style={styles.title}>Delivery Address</Text>
                  <Text style={styles.text}>{singleOrder.address}</Text>
                </View>
              </View>
              <Divider />
              <View style={styles.row}>
                <Text style={styles.title}>Payment Mode : </Text>
                <Text style={styles.text}>{singleOrder.payment_mode}</Text>
              </View>
              <Divider />
              <Text style={styles.title}>Your clothes</Text>
              <View style={{margin: 5}} />
              {singleOrder.items.map((row, index) => (
                <View>
                  <View style={{flexDirection: 'row', width: '100%'}}>
                    <View
                      style={{
                        width: '60%',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        marginTop: 5,
                      }}>
                      <Text style={styles.txt}>{row.qty}</Text>
                      <View style={{margin: 5}} />
                      <Text style={styles.txt}>
                        {row.product_name}( {row.service_name} )
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '40%',
                        alignItems: 'flex-end',
                        marginTop: 5,
                      }}>
                      <Text style={styles.txt}>₹ {row.price}</Text>
                    </View>
                  </View>
                </View>
              ))}
              <View style={{margin: 5}} />
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View
                  style={{
                    width: '60%',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.txt}>Subtotal</Text>
                </View>
                <View style={{width: '40%', alignItems: 'flex-end'}}>
                  <Text style={styles.txt}>₹ {singleOrder.total}</Text>
                </View>
              </View>
              <View style={{margin: 5}} />
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View
                  style={{
                    width: '60%',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.txt}>Discount</Text>
                </View>
                <View style={{width: '40%', alignItems: 'flex-end'}}>
                  <Text style={styles.txt}>₹ {singleOrder.discount}</Text>
                </View>
              </View>
              <View style={{margin: 5}} />
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View
                  style={{
                    width: '60%',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.txt}>Delivery Cost</Text>
                </View>
                <View style={{width: '40%', alignItems: 'flex-end'}}>
                  <Text style={styles.txt}>₹ {singleOrder.delivery_cost}</Text>
                </View>
              </View>
              <Divider />
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View
                  style={{
                    width: '60%',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.total}>Total</Text>
                </View>
                <View style={{width: '40%', alignItems: 'flex-end'}}>
                  <Text style={styles.total}>₹ {singleOrder.total}</Text>
                </View>
              </View>
              {/* <Divider /> */}
            </View>
          )}
          {active == 2 && (
            <View style={{height: 500, padding: 10}}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={Number(singleOrder?.status) - 1}
                labels={labels}
                // labels={orderStatusList.label_name}
                stepCount={7}
                direction="vertical"
              />
            </View>
          )}
        </ScrollView>
      )}

      {/* {active == 2 &&
                <View style={{ height: 500, padding: 10 }}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={2}
                        labels={labels}
                        stepCount={7}
                        direction="vertical"
                    />
                </View>
            } */}
    </View>
  );
};

const mapStateToProps = state => ({
  orderStatusList: state.order.orderStatusList,
});

const mapDispatchToProps = {
  GetOrderStatusList,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
