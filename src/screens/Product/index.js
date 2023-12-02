import {View, FlatList, StatusBar, Alert,RefreshControl } from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import globalStyles from '../../styles/globalStyles';
import styles from './styles';
import Loading from '../../component/loading';
import {SIZES} from '../../constants';
import {
  GetAllProduct,
  GetProductByCatId,
  GetProductByServiceId,
  GetProductFeatures,
} from '../../redux/actions/productAction';
import {GetActiveSubscription} from '../../redux/actions/subscriptionAction';
import NoDataBox from '../../component/noDataBox';
import ProductCard from '../../component/card/ProductCard';
import CategoryButton from '../../component/button/CategoryButton';
import Button1 from '../../component/button/Button1';
import { useFocusEffect } from '@react-navigation/native';

const Product = ({
  navigation,
  route,
  loading,
  GetProductFeatures,
  productData,
  categoryList,
  serviceList,
  GetProductByServiceId,
  GetActiveSubscription,
  subsDetails,
}) => {
  const [itemList, setItemList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  console.log('subsDetails=========>>>>>',subsDetails);
  const onRefresh = () => {
    setRefreshing(true);
    refreshData().then(() => {
      setRefreshing(false);
    });
  };

  // const { subsDetails } = route.params.subsDetails;
  
  // Define your refreshData function to fetch the latest data
  const refreshData = async () => {
    await GetProductByServiceId();
    await GetProductFeatures();
  };
  
  // useEffect(() => {
  //   GetActiveSubscription();
  // }, []);

  // console.log('categoryList', categoryList);
  // console.log('serviceList', serviceList);

  const [currentCatName, setcurrentCatName] = useState('');
  const [currentServName, setCurrentServName] = useState('');

  const [catId, setCatId] = useState(
    route?.params?.catId?.id ? route?.params?.catId?.id : 1,
  );

  const [serviceId, setServiceId] = useState(
    route?.params?.serviceId?.id ? route?.params?.serviceId?.id : 1,
  );

  useEffect(() => {
    categoryList.map(cat => {
      if (cat.id === catId) {
        setcurrentCatName(cat.category_name);
      }
    });
    serviceList.map(ser => {
      if (ser.service.id === serviceId) {
        setCurrentServName(ser.service.service_name);
      }
    });
  }, [serviceId, catId]);

  // console.log('This is service name', currentServName);
  // console.log('This is cat name', currentCatName);

  function updateQuantity(productId, serveId, categoryId, action) {
    const updatedArray = itemList.map(product => {
      if (
        product.id === productId &&
        product.service_id === serveId &&
        product.category_id === categoryId
      ) {
        if (action === 'increase') {
          product.qty = (product.qty || 0) + 1;
        } else if (action === 'decrease') {
          // Check if quantity is greater than 0 before decreasing
          product.qty = Math.max(0, (product.qty || 0) - 1);
        } else if (action === 'delete') {
          // Check if quantity is greater than 0 before decreasing
          product.qty = 0;
        }
        product.service_name = currentServName;
        product.category_name = currentCatName;
      }
      return product;
    });
    setItemList(updatedArray);
  }

  useEffect(() => {
    setItemList(productData);
  }, [productData]);

  useEffect(() => {
    GetProductByServiceId();
    GetProductFeatures();
    GetActiveSubscription();
  }, []);


  

  // console.log('itemList', itemList);

  const checkAvailibleOrder = () => {
    let totalQty = 0;
    itemList.map(item => {
      if (item.qty > 0) {
        totalQty = totalQty + item.qty;
      }
    });
    if (
      totalQty <=
      Number(
        subsDetails?.existing_subscription_details?.available_no_of_bookings,
      )
    ) {
      navigation.navigate('AddOn', {
        csIds: {...route?.params},
        items: itemList,
      });
    } else {
      Alert.alert(
        'Subscription Alert!',
        `Your available number of booking is ${subsDetails?.existing_subscription_details?.available_no_of_bookings} less than your order quantity ${totalQty}`,
      );
    }
  };

  const continueFunc = () => {
    if (!subsDetails) {
      Alert.alert(
        'Subscription Alert!',
        'Please purchase a subscription plan to continue order',
        [
          {
            text: 'Buy Subscription',
            onPress: () => navigation.navigate('Subscription'),
          },
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    } else {
      checkAvailibleOrder();
    }
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     if (subsDetails !== null) {
  //       checkAvailibleOrder();
  //       // Perform actions or updates when subsDetails is not null
  //       // For example, you can call a function here or set a state variable.
  //     }
  //   }, [subsDetails])
  // );

  return (
    <View style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View>
        <FlatList
          data={serviceList}
          renderItem={({item, index}) => (
            <CategoryButton
              marginLeft={index == 0 ? SIZES.width * 0.03 : 0}
              marginBottom={SIZES.height * 0.007}
              title={item.service?.service_name}
              isActive={serviceId == item.service?.id ? true : false}
              onPress={() => {
                setServiceId(item.service?.id);
              }}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          key={(_, index) => index}
        />
      </View>
      <View>
        <FlatList
          data={categoryList}
          renderItem={({item, index}) => (
            <CategoryButton
              marginLeft={index == 0 ? SIZES.width * 0.03 : 0}
              title={item.category_name}
              isActive={catId == item.id ? true : false}
              onPress={() => {
                setCatId(item.id);
              }}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          key={(_, index) => index}
        />
      </View>
      {loading ? (
        <Loading />
      ) : (
        <View style={{flex: 1}}>
          {itemList?.[0] ? (
            <FlatList
              data={itemList}
              renderItem={({item, index}) => {
                if (item.service_id == serviceId && item.category_id == catId) {
                  return (
                    <ProductCard
                      marginBottom={
                        itemList[0] && index == itemList.length - 1
                          ? SIZES.height * 0.28
                          : SIZES.height * 0.025
                      }
                      marginTop={index == 0 ? SIZES.height * 0.025 : 0}
                      source={{uri: item.image}}
                      productName={item?.product_name}
                      quantity={item?.qty}
                      price={`₹ ${item.amount ? item.amount : 0}`}
                      onPlusPress={() => {
                        updateQuantity(
                          item.id,
                          item.service_id,
                          item.category_id,
                          'increase',
                        );
                      }}
                      onMinusPress={() => {
                        updateQuantity(
                          item.id,
                          item.service_id,
                          item.category_id,
                          'decrease',
                        );
                      }}
                      deletePress={() => {
                        updateQuantity(
                          item.id,
                          item.service_id,
                          item.category_id,
                          'delete',
                        );
                      }}
                    />
                  );
                }
              }}
              keyExtractor={(item, index) => item + index}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  // You can customize the loading indicator style
                  // tintColor="yourColor"
                  // title="Pull to refresh..."
                  // titleColor="yourColor"
                />
              }
            />
          ) : (
            <View style={{height: SIZES.height * 0.7}}>
              <NoDataBox title={'No Product'} />
            </View>
          )}
        </View>
      )}
      {itemList?.[0] && (
        <View style={styles.bottom_container}>
          <View style={styles.bottom_btn_box}>
            <Button1 onPress={() => continueFunc()}>Continue</Button1>
          </View>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.product.loading,
  productData: state.product.productData,
  categoryList: state.home.categoryList,
  serviceList: state.home.serviceList,
  colorList: state.product.colorList,
  damageList: state.product.damageList,
  packingList: state.product.packingList,
  addonList: state.product.addonList,
  stainsList: state.product.stainsList,
  subsDetails: state.subscription.subsDetails,
});

const mapDispatchToProps = {
  GetAllProduct,
  GetProductByServiceId,
  GetProductByCatId,
  GetProductFeatures,
  GetActiveSubscription,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
