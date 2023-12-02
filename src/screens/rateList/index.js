import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {COLORS, SIZES, data, images} from '../../constants';
import {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import Icons from '../../component/Icons';
import Loading from '../../component/loading';
import {connect} from 'react-redux';
import {GetPriceList} from '../../redux/actions/homeAction';

const Accordion = ({onPress, data, title}) => {
  const [collapsed, setCollapsed] = useState(true);
  const borderRadius = collapsed ? SIZES.width * 0.03 : 0;
  const margin = collapsed ? SIZES.height * 0.02 : 0;
  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.accor_box,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
          marginBottom: margin,
          alignSelf: 'center',
        }}
        onPress={() => setCollapsed(!collapsed)}>
        <Text style={styles.accor_title}>{title}</Text>
        <Icons
          name={collapsed ? 'right' : 'down-outline'}
          size={25}
          color={COLORS.black}
        />
      </TouchableOpacity>
      <Collapsible style={{flex: 1}} collapsed={collapsed}>
        <View style={styles.product_box}>
          {data &&
            data?.map(item => (
              <View key={item.product_id} style={styles.product_row}>
                <Text numberOfLines={1} style={styles.product_name}>
                  {item?.product_name || 'Product Name'}
                </Text>
                <Text numberOfLines={1} style={styles.price}>
                  {item?.amount ? `₹ ${item?.amount}` : 'NA'}
                </Text>
              </View>
            ))}
        </View>
      </Collapsible>
    </View>
  );
};

const RateList = ({navigation, GetPriceList, loading, priceList}) => {
  useEffect(() => {
    GetPriceList();
  }, []);
  return (
    <ScrollView style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading ? (
        <View style={{marginVertical: 10}}>
          <Loading loading={loading} />
        </View>
      ) : (
        <View style={globalStyles.center}>
          {/* offer box */}
          <View style={styles.offer_box}>
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

            <Image
              source={images.offer}
              style={styles.offer_image}
              resizeMode="contain"
            />
          </View>

          {/* service list container */}
          {/* <View style={{alignItems: 'center'}}> */}
          {/* Dry Cleaning Services */}

          <FlatList
            data={priceList}
            keyExtractor={item => item?.service_id}
            renderItem={({item}) => {
              return (
                <View
                  key={item?.service_id}
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={styles.title}>
                    {item?.service_name || 'Service Name'}
                  </Text>
                  {item?.categories?.map(cat => {
                    return (
                      <Accordion
                        key={cat?.category_id}
                        title={cat?.category_name || 'Category Name'}
                        data={cat?.products}
                      />
                    );
                  })}
                </View>
              );
            }}
          />

          {/* {data.rateListwholeData.map(item => {
            return (
              <View
                key={item.service_id}
                style={{alignSelf: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>
                  {item.service_name || 'Service Name'}
                </Text>
                {item.categories.map(cat => {
                  return (
                    <Accordion
                      key={cat.category_id}
                      title={cat.category_name || 'Category Name'}
                      data={cat.products}
                    />
                  );
                })}
              </View>
            );
          })} */}
          {/* </View> */}
        </View>
      )}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  priceList: state.home.priceList,
});

const mapDispatchToProps = {
  GetPriceList,
};

export default connect(mapStateToProps, mapDispatchToProps)(RateList);
