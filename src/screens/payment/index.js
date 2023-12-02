import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {COLORS, SIZES} from '../../constants';
import RazorpayCheckout from 'react-native-razorpay';
// import { CreditCardInput } from 'react-native-payment-card'
import styles from './styles';
import {
  CreateOrder,
  GetPaymentMethods,
  UpdateTransactionApi,
} from '../../redux/actions/orderAction';
import {connect} from 'react-redux';
import Loading from '../../component/loading';

const Payment = ({
  navigation,
  loading,
  CreateOrder,
  GetPaymentMethods,
  UpdateTransactionApi,
  paymentMethods,
  route,
}) => {
  let postData = {
    ...route.params?.data,
    payment_mode: 0,
  };

  useEffect(() => {
    GetPaymentMethods();
  }, []);

  const handlePayment = id => {
    // let postData = {
    //     ...route.params.data,
    //     "payment_mode": id,
    // }

    if (id == 1) {
      CreateOrder(
        {
          ...postData,
          payment_mode: id,
        },
        navigation,
      );
      // navigation.navigate("Order")
    } else {
      CreateOrder(
        {
          ...postData,
          payment_mode: id,
        },
        '',
        id => {
          if (id) {
            navigation.navigate('QrScreen');
            // var options = {
            //   description: 'Credits towards consultation',
            //   // image: 'https://i.imgur.com/3g7nmJC.png',
            //   // image: userData.picture,
            //   currency: 'INR',
            //   // key: "rzp_test_sHuXJaB9QnKnlO", // my razor pay api key
            //   key: 'rzp_test_APKjeA7r85HKW4',
            //   // amount: item.price * 100,
            //   amount: postData.sub_total * 100,
            //   // name: userData.name,
            //   // prefill: {
            //   //     email: userData.email,
            //   //     contact: userData.mobile,
            //   //     name: userData.name,
            //   // },
            //   theme: {color: COLORS.primary},
            // };
            // RazorpayCheckout.open(options)
            //   .then(data => {
            //     UpdateTransactionApi(data.razorpay_payment_id, navigation, id);
            //     // navigation.navigate("PaymentSuccess")
            //     console.log('transaction id : ', data.razorpay_payment_id);
            //   })
            //   .catch(error => {
            //     navigation.navigate('PaymentFailed');
            //     console.log(`Error: ${error.code} | ${error.description}`);
            //     // alert(`Error: ${error.code} | ${error.description}`);
            //   });
          }
        },
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.box}>
          {paymentMethods?.[0] && (
            <FlatList
              data={paymentMethods}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={[
                    styles.btn,
                    index == 0 && {marginTop: SIZES.height * 0.025},
                  ]}
                  onPress={() => handlePayment(item.Payment_Method?.id)}>
                  <View style={styles.row}>
                    <View style={styles.iconBox}>
                      <Image
                        source={{uri: item.Icon}}
                        style={{...styles.iconStyle}}
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text style={styles.btnText}>
                        {item.Payment_Method?.payment_mode}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                //   <ProductCard
                //     marginBottom={itemList[0] && (index == productData.length - 1) ? SIZES.height * .28 : SIZES.height * .025}
                //     marginTop={index == 0 ? SIZES.height * .025 : 0}
                //     source={{ uri: item.image }}
                //     productName={item.product?.product_name}
                //     quantity={itemList[itemList.findIndex(ele => ele?.product_id == item.product?.id)]?.qty}
                //     setQuantity={(quan) => addItem(item.product?.id, quan, item.price ? item.price : 0)}
                //     // price={"$300"}
                //     // totalPrice={itemList[itemList?.findIndex((ele) => ele.product_id == item.product?.id)]?.price}
                //     price={`₹${item.price ? item.price : 0}`}
                //     onPress={() => { setProduct(item), handleEditPress(item.product?.id) }}
                //   />
              )}
              key={item => item.Payment_Method?.id}
              showsVerticalScrollIndicator={false}
            />
          )}
          {/* <CreditCardInput /> */}
          {/* <CreditCardInput
                    autoFocus
                    requiresName
                    requiresCVC
                    requiresEmail
                    labelStyle={styles.labelStyle}
                    inputStyle={styles.inputStyle}
                    validColor={"black"}
                    invalidColor={"red"}
                    placeholderColor={"darkgray"}
                    onChange={(text) => console.log("onchange : ", text)}

                /> */}
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.order.loading,
  paymentMethods: state.order.paymentMethods,
});

const mapDispatchToProps = {
  GetPaymentMethods,
  CreateOrder,
  UpdateTransactionApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
