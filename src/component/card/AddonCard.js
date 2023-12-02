import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../../constants';
import Icons from '../Icons';

const AddonCard = ({
  productName,
  source,
  price,
  dataAddonss,
  onAddonPress,
  serName,
  catName,
}) => {
  return (
    <Pressable onPress={onAddonPress} style={styles.cardMain}>
      <View style={styles.card}>
        <View style={styles.image_box}>
          <Image source={source} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.nameWash}>
          <Text numberOfLines={1} style={styles.product_name}>
            {productName}
          </Text>
          <Text style={styles.pWash}>
            {serName} / {catName}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.price}>
          {price}
        </Text>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={onAddonPress}
            activeOpacity={0.5}
            style={styles.count_btn}>
            <Icons name={'edit1'} size={20} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.addDetails}>Add{'\n'}Details</Text>
        </View>
      </View>
      <Text style={styles.dexTxt}>
        {`${dataAddonss?.dataAddon?.color1?.color_name || ''} ${
          dataAddonss?.dataAddon?.color2?.color_name || ''
        } ${dataAddonss?.dataAddon?.damage_id?.damage || ''} ${
          dataAddonss?.dataAddon?.packing_id?.packing_style || ''
        } ${dataAddonss?.dataAddon?.stain_id?.stains || ''} ${
          dataAddonss?.dataAddon?.addon_id?.addon_name || ''
        } Iron (${dataAddonss?.dataAddon?.iron?.iron || ''})`}
      </Text>
    </Pressable>
  );
};

AddonCard.defaultProps = {
  productName: null,
  source: images?.primWash,
  marginTop: null,
  price: 0,
  quantity: 0,
  setQuantity: null,
  deletePress: null,
};

export default AddonCard;

const styles = StyleSheet.create({
  addDetails: {
    fontSize: SIZES.width * 0.025,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: SIZES.width * 0.01,
  },
  cardMain: {
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    marginTop: SIZES.height * 0.015,
    marginBottom: SIZES.height * 0.01,
    padding: SIZES.width * 0.02,
    elevation: 4,
    alignSelf: 'center',
    borderColor: COLORS.gray30,
    borderRadius: SIZES.width * 0.03,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.height * 0.015,
    borderColor: COLORS.gray30,
    borderRadius: SIZES.width * 0.03,
    overflow: 'hidden',
  },
  nameWash: {
    flex: 0.5,
    marginRight: SIZES.width * 0.01,
  },

  image_box: {
    flex: 0.25,
    width: SIZES.width * 0.2,
    height: SIZES.width * 0.2,
    backgroundColor: COLORS.light7,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.03,
    borderWidth: 0.7,
    borderColor: COLORS.gray30,
    borderRadius: SIZES.width * 0.03,
  },

  image: {
    width: SIZES.width * 0.2,
    height: SIZES.width * 0.2,
  },

  product_name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.045,
    color: COLORS.primary,
    marginBottom: -6,
  },

  dexTxt: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.03,
    color: COLORS.primary,
  },

  price: {
    flex: 0.2,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.038,
    color: COLORS.primary,
    marginBottom: -4,
  },
  pWash: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.03,
    color: COLORS.primary,
    marginTop: SIZES.width * 0.01,
  },
  count_btn: {
    flex: 0.12,
    width: SIZES.width * 0.09,
    height: SIZES.width * 0.09,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary,
    borderRadius: SIZES.width * 0.08,
  },
});
