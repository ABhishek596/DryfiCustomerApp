import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';

const CheckOut = ({navigation, route}) => {
  const {data, discountObj} = route.params;
  const [totalPrice, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const getSingleTotal = item => {
    let total = 0;
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
    return total;
  };

  const getTotalAmt = () => {
    let total = 0;
    data.forEach(item => {
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
      setTotal(total);
    });
    if (discountObj?.discount) {
      total = (total * Number(discountObj?.discount)) / 100;
    }
    setSubtotal(total);
  };

  useEffect(() => {
    getTotalAmt();
  }, [data]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.flatViewMain}>
        <View style={styles.mainRow}>
          <View style={styles.rowView}>
            <View style={styles.iconView}>
              <Image source={{uri: item.image}} style={styles.icon} />
            </View>
            <Text style={styles.txtBold}>{item?.product_name}</Text>
          </View>
          <Text style={styles.txtBold}>₹ {item?.amount}</Text>
        </View>

        {item?.dataAddon?.color1?.color_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.color1?.color_name} (color 1)
            </Text>
          </View>
        ) : null}

        {item?.dataAddon?.color2?.color_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.color2?.color_name} (color 2)
            </Text>
          </View>
        ) : null}

        {item?.dataAddon?.damage_id?.damage ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.damage_id?.damage} (Damage)
            </Text>
          </View>
        ) : null}

        {item?.dataAddon?.packing_id?.packing_style ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.packing_id?.packing_style} (Packing)
            </Text>
            <Text style={styles.txt}>
              ₹ {item?.dataAddon?.packing_id?.price}
            </Text>
          </View>
        ) : null}

        {item?.dataAddon?.stain_id?.stains ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.stain_id?.stains} (Stains)
            </Text>
          </View>
        ) : null}

        {item?.dataAddon?.addon_id?.addon_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.addon_id?.addon_name} (Addon)
            </Text>
            <Text style={styles.txt}>₹ {item?.dataAddon?.addon_id?.price}</Text>
          </View>
        ) : null}

        {item?.dataAddon?.delivery ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.delivery?.type} (Delivery)
            </Text>
            <Text style={styles.txt}>
              ₹ {item?.dataAddon?.delivery?.urgent_charge}
            </Text>
          </View>
        ) : null}

        {item?.dataAddon?.iron?.iron ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.iron?.iron} (Ironing)
            </Text>
          </View>
        ) : null}

        <View style={styles.mainRow}>
          <Text style={styles.txtBold}>Total Amount</Text>
          <Text style={styles.txtBold}>₹ {getSingleTotal(item)}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.uid}
      />
      <View style={styles.totalView}>
        <View style={styles.mainRow}>
          <Text style={styles.totalTxt}>
            Total Price ({data?.length} Items)
          </Text>
          <Text style={styles.totalTxt}>₹ {totalPrice?.toFixed(1)}</Text>
        </View>
        <View style={styles.mainRow}>
          <Text style={styles.totalTxt}>
            Discount ({discountObj?.discount}%)
          </Text>
          <Text style={styles.totalTxt}>
            ₹ {(Number(totalPrice) - Number(subtotal))?.toFixed(1)}
          </Text>
        </View>
        <View style={styles.mainRow}>
          <Text style={styles.totalTxtBold}>Subtotal</Text>
          <Text style={styles.totalTxtBold}>₹ {subtotal?.toFixed(1)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckOut;
