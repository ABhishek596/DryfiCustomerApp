import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import AddonCard from '../../component/card/AddonCard';
import {COLORS, SIZES} from '../../constants';
import Button1 from '../../component/button/Button1';
import {connect} from 'react-redux';
import {BottomSheet} from 'react-native-btr';
import Icons from '../../component/Icons';
import CheckBox from '@react-native-community/checkbox';

const FeatureRow = ({title, onValueChange, value, colorCode, price}) => {
  return (
    <View style={styles.row1}>
      <CheckBox
        value={value}
        onValueChange={onValueChange}
        tintColors={{true: COLORS.primary, false: COLORS.primary}}
        style={styles.checkBox}
      />
      {colorCode && (
        <View
          style={[styles.color_box, colorCode && {backgroundColor: colorCode}]}
        />
      )}
      <View style={styles.charge_row}>
        <Text style={styles.label}>{title}</Text>
        {price && <Text style={styles.charges}>(₹{price})</Text>}
      </View>
    </View>
  );
};

const AddOnScreen = ({
  navigation,
  route,
  userData,
  deliveryTypeList,
  colorList,
  damageList,
  packingList,
  addonList,
  stainsList,
  subsDetails,
}) => {
  const {items, discountObj, csIds} = route.params;
  const [filterBottom, setFilterBottom] = useState(false);
  const [type, setType] = useState(1);
  const [addonsList, setAddonsList] = useState([]);

  const transformArray = () => {
    const outputArray = [];
    let uniqueId = 1;
    items?.forEach(item => {
      if (item.qty > 1) {
        for (let i = 1; i <= item.qty; i++) {
          const newItem = {...item};
          newItem.product_name += ` ${i}`;
          newItem.uid = uniqueId++;
          outputArray.push({...newItem, dataAddon: {...postData}});
        }
      } else if (item.qty == 1) {
        item.uid = uniqueId++;
        outputArray.push({...item, dataAddon: {...postData}});
      }
    });

    setAddonsList(outputArray);
  };

  useEffect(() => {
    transformArray();
  }, [items]);

  const featureType = [
    {id: 1, type: 'Color'},
    /* {id: 2, type: 'Color2'}, */
    {id: 3, type: 'Damage'},
    {id: 4, type: 'Stains'},
    {id: 5, type: 'Packing'},
    {id: 6, type: 'AddOn'},
    {id: 7, type: 'Iron'},
    {id: 8, type: 'Delivery'},
  ];

  const ironList = [
    {
      id: 1,
      iron: 'Yes',
    },
    {
      id: 0,
      iron: 'No',
    },
  ];

  const [itemsData, setItemsData] = useState({
    customer_id: 0,
    total: 0,
    payment_response: 'pending',
    payment_mode: 0,
    s_discount: 0,
    delivery_cost: 30,
    sub_total: 0,
  });

  const [postData, setPostData] = useState({
    product_id: 0,
    service_id: 0,
    iron: ironList[1],
    color1: 0,
    color2: 0,
    damage_id: 0,
    packing_id: 0,
    stain_id: 0,
    addon_id: 0,
    price: 0,
    qty: 0,
    delivery: deliveryTypeList?.[0] || 0,
  });

  const [productId, setProductId] = useState();
  const [product, setProduct] = useState();
  const [packingCharge, setPackingCharge] = useState(0);
  const [addOnCharge, setAddonCharge] = useState(0);
  const [ironCharge, setIronCharge] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const reset = () => {
    setPostData({
      product_id: 0,
      service_id: 0,
      iron: ironList[1],
      color1: 0,
      color2: 0,
      damage_id: 0,
      packing_id: 0,
      stain_id: 0,
      addon_id: 0,
      price: 0,
      qty: 0,
      delivery: deliveryTypeList?.[0] || 0,
    });
  };

  const handleApplyChange = () => {
    const temArr = [];
    addonsList.map(item => {
      if (item.uid === productId) {
        temArr.push({...item, dataAddon: {...postData}});
      } else {
        temArr.push(item);
      }
    });
    setAddonsList(temArr);
    setFilterBottom(false);
    reset();
  };

  const getTotalAmt = itemArr => {
    let total = 0;
    let subTotal = 0;
    addonsList.forEach(item => {
      total = total + Number(item?.amount);
      if (item?.dataAddon?.packing_id?.price) {
        total = total + Number(item?.dataAddon?.packing_id?.price);
      }
      if (item?.dataAddon?.addon_id?.price) {
        total = total + Number(item?.dataAddon?.addon_id?.price);
      }
      if (item?.dataAddon?.delivery?.urgent_charge) {
        total = total + Number(item?.dataAddon?.delivery?.urgent_charge);
      }
    });
    if (discountObj?.discount) {
      subTotal = (total * Number(discountObj?.discount)) / 100;
    }

    const obj = {
      customer_id: userData?.customer_details?.id,
      total: total,
      payment_response: 'pending',
      payment_mode: 0,
      s_discount: discountObj?.discount,
      delivery_cost: 0,
      sub_total: subTotal,
    };

    console.log(
      'This is array of items ',
      itemArr,
      'and this is object of this',
      obj,
    );

    navigation.navigate('PickupSchedule', {
      ...obj,
      items: itemArr,
      pickupmylaundry:false
    });
  };

  const handleConfimOrder = () => {
    const temArr = [];
    let totalQty = 0;
    addonsList.map(item => {
      temArr.push({
        product_id: item?.product_id,
        shipping_price: item?.dataAddon?.delivery?.urgent_charge,
        shipping_name: item?.dataAddon?.delivery?.type,
        color1: item?.dataAddon?.color1?.id,
        color2: item?.dataAddon?.color2?.id,
        packing_id: item?.dataAddon?.packing_id?.id,
        addon_id: item?.dataAddon?.addon_id?.id,
        damage_id: item?.dataAddon?.damage_id?.id,
        stain_id: item?.dataAddon?.stain_id?.id,
        service_id: item?.service_id,
        category_id: item?.category_id,
        iron: item?.dataAddon?.iron?.id,
        qty: '1',
        price: item?.amount,
        product_name: item?.product_name,
        service_name: csIds?.serviceId?.service_name,
        color1_name: item?.dataAddon?.color1?.color_name,
        color2_name: item?.dataAddon?.color2?.color_name,
        packing_name: item?.dataAddon?.packing_id?.packing_style,
        addon_name: item?.dataAddon?.addon_id?.addon_name,
        damage_name: item?.dataAddon?.damage_id?.damage,
        stain_name: item?.dataAddon?.stain_id?.stains,
        iron_price: '0',
        packing_price: item?.dataAddon?.packing_id?.price,
        addon_price: item?.dataAddon?.addon_id?.price,
        barcode: '72614453',
      });
      totalQty += 1;
    });

    console.log('This is total quantity', totalQty);

    if (subsDetails == null) {
      Alert.alert(
        'Subscription Alert!',
        'Please purchase a subscription plan to continue order',
      );
    } else {
      if (
        totalQty <=
        Number(
          subsDetails?.existing_subscription_details?.available_no_of_bookings,
        )
      ) {
        getTotalAmt(temArr);
      } else {
        Alert.alert(
          'Subscription Alert!',
          `Your available number of booking is ${subsDetails?.existing_subscription_details?.available_no_of_bookings} less than your order quantity ${totalQty}`,
        );
      }
    }
  };

  const confirmColor1 = () => {
    for (let i = 0; i < addonsList.length; i++) {
      const object = addonsList[i];
      if (object?.dataAddon?.color1?.color_name == undefined) {
        alert('Please select color its a mandatory filed for all items!');
        return;
      }
    }
    handleConfimOrder();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={addonsList}
        renderItem={({item, index}) => (
          <AddonCard
            marginTop={index == 0 ? SIZES.height * 0.025 : 0}
            dataAddonss={item}
            source={{uri: item.image}}
            productName={item?.product_name}
            setQuantity={quan =>
              addItem(item.product?.id, quan, item.price ? item.price : 0)
            }
            price={`₹${item.amount ? item.amount : 0}`}
            onAddonPress={() => {
              setProductId(item.uid);
              setFilterBottom(true);
            }}
            serName={item.service_name}
            catName={item.category_name}
          />
        )}
        keyExtractor={item => item.uid}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bottom_container}>
        <View style={styles.bottom_btn_box}>
          <Button1
            backgroundColor={COLORS.white}
            textColor={COLORS.primary}
            style={{
              width: SIZES.width * 0.43,
              borderWidth: 2,
              borderRadius: SIZES.width * 0.2,
              borderColor: COLORS.primary,
            }}
            btnTextStyle={{
              fontSize: SIZES.width * 0.03,
            }}
            onPress={() =>
              navigation.navigate('Discount', {
                items,
              })
            }>
            Check Discount
          </Button1>
          <Button1
            backgroundColor={COLORS.white}
            textColor={COLORS.primary}
            style={{
              width: SIZES.width * 0.43,
              borderWidth: 2,
              borderRadius: SIZES.width * 0.2,
              borderColor: COLORS.primary,
            }}
            btnTextStyle={{
              fontSize: SIZES.width * 0.03,
            }}
            onPress={() =>
              navigation.navigate('CheckOut', {
                data: addonsList,
                discountObj,
              })
            }>
            Check Out
          </Button1>
        </View>
        <Button1
          style={{
            borderWidth: 2,
            alignSelf: 'center',
            borderRadius: SIZES.width * 0.2,
            borderColor: COLORS.primary,
            marginBottom: SIZES.width * 0.01,
          }}
          onPress={() => {
            // navigation.navigate('PickupSchedule', {
            //   ...itemsData,
            // });
            // handleConfimOrder();
            confirmColor1();
          }}>
          Confirm Order
        </Button1>
      </View>
      <BottomSheet
        visible={filterBottom}
        onBackButtonPress={() => setFilterBottom(!filterBottom)}
        onBackdropPress={() => setFilterBottom(!filterBottom)}>
        <View style={styles.bottomSheet1}>
          {/* title row */}
          <View style={styles.titleRow}>
            <Text style={styles.bottomTitle}>Features</Text>
            <TouchableOpacity onPress={() => setFilterBottom(!filterBottom)}>
              {/* onPress={() => {setFilterBottom(!filterBottom), handleItemsList("Reset")}}> */}
              <Icons name={'close'} size={30} color={COLORS.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.row2}>
            <View style={styles.sideBar}>
              {featureType.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.btn,
                    type == item.id && {backgroundColor: COLORS.primary},
                  ]}
                  onPress={() => setType(item.id)}>
                  <Text
                    style={[
                      styles.btnTxt,
                      type == item.id && {color: COLORS.white},
                    ]}>
                    {item.type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.rightBox}>
              {colorList && type == 1 && (
                <FlatList
                  data={colorList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.color_name}
                      colorCode={item?.color_code}
                      value={postData.color1 == item ? true : false}
                      onValueChange={() => handleChange('color1', item)}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}

              {colorList && type == 2 && (
                <FlatList
                  data={colorList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.color_name}
                      colorCode={item?.color_code}
                      value={postData.color2 == item ? true : false}
                      onValueChange={() => handleChange('color2', item)}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}

              {damageList && type == 3 && (
                <FlatList
                  data={damageList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.damage}
                      value={postData.damage_id == item ? true : false}
                      onValueChange={() => handleChange('damage_id', item)}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}

              {stainsList && type == 4 && (
                <FlatList
                  data={stainsList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.stains}
                      value={postData.stain_id == item ? true : false}
                      onValueChange={() => handleChange('stain_id', item)}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}

              {packingList && type == 5 && (
                <FlatList
                  data={packingList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.packing_style}
                      price={item.price}
                      value={postData.packing_id == item ? true : false}
                      onValueChange={() => {
                        handleChange('packing_id', item),
                          setPackingCharge(item.price);
                      }}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}

              {addonList && type == 6 && (
                <FlatList
                  data={addonList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.addon_name}
                      price={item.price}
                      value={postData.addon_id == item ? true : false}
                      onValueChange={() => {
                        handleChange('addon_id', item),
                          setAddonCharge(item.price);
                      }}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}

              {ironList && type == 7 && (
                <FlatList
                  data={ironList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.iron}
                      value={postData.iron.id == item.id ? true : false}
                      onValueChange={() => {
                        handleChange('iron', item),
                          setIronCharge(
                            item.id
                              ? product?.iron_price
                                ? Number(product?.iron_price)
                                : 0
                              : 0,
                          );
                      }}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}

              {deliveryTypeList && type == 8 && (
                <FlatList
                  data={deliveryTypeList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.type}
                      price={item.urgent_charge}
                      value={postData.delivery.id == item.id ? true : false}
                      onValueChange={() => {
                        handleChange('delivery', item),
                          setDeliveryCharge(
                            item.id
                              ? product?.iron_price
                                ? Number(product?.iron_price)
                                : 0
                              : 0,
                          );
                      }}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}
            </View>
          </View>
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[styles.bottomBtn, {backgroundColor: COLORS.white}]}
              onPress={() => {
                // handleItemsList('Reset')
                reset();
              }}>
              <Text style={[styles.bottomBtnTxt, {color: '#0F56CC'}]}>
                Reset
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomBtn}
              onPress={() => {
                handleApplyChange();
                // handleItemsList('Apply')
              }}>
              <Text style={styles.bottomBtnTxt}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  loading: state.product.loading,
  userData: state.auth.userData,
  productData: state.product.productData,
  categoryList: state.home.categoryList,
  serviceList: state.home.serviceList,
  colorList: state.product.colorList,
  damageList: state.product.damageList,
  packingList: state.product.packingList,
  addonList: state.product.addonList,
  stainsList: state.product.stainsList,
  deliveryTypeList: state.product.deliveryTypeList,
  subsDetails: state.subscription.subsDetails,
});

export default connect(mapStateToProps)(AddOnScreen);
