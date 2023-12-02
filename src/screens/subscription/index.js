import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {GetAllSubsPackages} from '../../redux/actions/subscriptionAction';
import {connect} from 'react-redux';
import Loading from '../../component/loading';
import Button1 from '../../component/button/Button1';

const Subscription = ({
  navigation,
  loading,
  subsPackageList,
  GetAllSubsPackages,
}) => {
  useEffect(() => {
    GetAllSubsPackages();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.listTouch}
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('SubscriptionDetails', {
            id: item?.id,
            headerTitle: item?.sub_name,
          });
        }}>
        <View style={styles.rowView}>
          <View style={styles.imgView}>
            <Image source={{uri: item?.sub_image}} style={styles.img} />
          </View>
          <Text style={styles.nameTxt}>{item?.sub_name}</Text>
          <View style={styles.feeTxtView}>
            <Text style={styles.feeTxt}>₹ {item?.sub_fee} /-</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainView}>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <FlatList data={subsPackageList} renderItem={renderItem} />
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%'}}>
          <View>
          <Button1
            style={styles.activeSubBtn}
            onPress={() => {
              navigation.navigate('ActivePlan');
            }}>
            Active Subscription
          </Button1>
          <Button1
            style={styles.continueBtn}
            onPress={() => {
              navigation.navigate('Home');
            }}
            >
            Continue
          </Button1>
          </View>
          </View> */}
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  subsPackageList: state.subscription.subsPackageList,
});

const mapDispatchToProps = {
  GetAllSubsPackages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
