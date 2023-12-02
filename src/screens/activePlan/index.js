import { Text, View, Image, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import React, { useEffect, useCallback, useState } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { GetActiveSubscription } from '../../redux/actions/subscriptionAction';
import Loading from '../../component/loading';
import { formatDate } from '../../services/date';
import Button1 from '../../component/button/Button1';
import { useFocusEffect } from '@react-navigation/native';

const ActivePlan = ({ loading, GetActiveSubscription, subsDetails, navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  console.log('subsDetails', subsDetails);
  const onRefresh = () => {
    // This function will be called when the user pulls down to refresh.
    // Put your data refresh logic here.
    GetActiveSubscription();
  };

  useFocusEffect(
    useCallback(() => {
      GetActiveSubscription();
    }, [])
  );


  // useEffect(() => {
  //   GetActiveSubscription();
  // }, []);

  return (
    <View style={styles.mainView}>
      <ScrollView
        style={styles.mainView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >


        {loading ? (
          <Loading />
        ) : (
          <View>
            {subsDetails ? (
              <View style={styles.mainSubView}>
                <View style={styles.rowView}>
                  <View style={styles.imgView}>
                    <Image
                      source={{
                        uri: subsDetails?.existing_subscription_details
                          ?.sub_image,
                      }}
                      style={styles.img}
                    />
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.nameTxt}>
                      {subsDetails?.existing_subscription_details?.sub_name}
                    </Text>
                    <Text style={styles.feeTxt}>
                      {
                        subsDetails?.existing_subscription_details
                          ?.sub_description
                      }
                    </Text>
                  </View>
                </View>
                <View style={styles.subDetailsView}>
                  <View>
                    <Text style={styles.infoTxt}>Number of Product</Text>
                    <Text style={styles.infoTxtSm}>(Remaining)</Text>
                  </View>
                  <Text style={styles.infoTxtBold}>
                    {
                      subsDetails?.existing_subscription_details
                        ?.available_no_of_bookings
                    }
                  </Text>
                </View>
                <View style={styles.horizLine} />
                <View style={styles.subDetailsView}>
                  <Text style={styles.infoTxt}>Starting Date</Text>
                  <Text style={styles.infoTxtBold}>
                    {formatDate(
                      subsDetails?.existing_subscription_details?.start_date,
                    )}
                  </Text>
                </View>
                <View style={styles.horizLine} />
                <View style={styles.subDetailsView}>
                  <Text style={styles.infoTxt}>Expiry Date</Text>
                  <Text style={styles.infoTxtBold}>
                    {formatDate(
                      subsDetails?.existing_subscription_details?.end_date,
                    )}
                  </Text>
                </View>
              </View>
            ) : (
              <Text
                style={{ color: 'black', fontWeight: '600', textAlign: 'center' }}>
                No Active Plan Found.
              </Text>
            )}
          </View>
        )}
        {/* <Button1
          style={styles.activeSubBtn}
          onPress={() => {
            navigation.navigate('Subscription');
          }}>
          Upgrade Subcription
        </Button1> */}
      {/* <View style={{paddingVertical:13}}>
         <Text style={{fontSize:15,color:'#ffffff',alignSelf:'center',backgroundColor:'green',paddingVertical:13,paddingHorizontal:80,borderRadius:10}}>Current Active Plan</Text>
      </View> */}
      </ScrollView>
      <Button1
        style={styles.activeSubBtn}
        onPress={() => {
          navigation.navigate('Subscription');
        }}>
        Upgrade Subcription
      </Button1>
    </View>
  );                              
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  subsDetails: state.subscription.subsDetails,
});

const mapDispatchToProps = {
  GetActiveSubscription,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlan);
                                     