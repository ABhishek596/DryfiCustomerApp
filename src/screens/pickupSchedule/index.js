import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import React from 'react';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
import {useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import {GetTime} from '../../redux/actions/productAction';
import Loading from '../../component/loading';
import {useEffect} from 'react';
import CalendarPicker from 'react-native-calendar-picker';

const PickupSchedule = ({navigation, GetTime, route, timeList, loading}) => {
  const [postData, setPostData] = useState({
    ...route.params,
    pickup_date: null,
    pickup_time: null,
  });

  const pickupmylaundry = route.params?.pickupmylaundry;
  console.log('pickupmylaundry', pickupmylaundry);

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  let today_date = new Date();
  let active_date =
    today_date.getDate() +
    '-' +
    (today_date.getMonth() + 1) +
    '-' +
    today_date.getFullYear();
  var pickup_date = [];

  const [activeDate, setActiveDate] = useState(active_date);
  const [activeTime, setActiveTime] = useState('');

  for (let i = 0; i <= 30; i++) {
    let today = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
    let date =
      today.getDate() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getFullYear();

    pickup_date.push(date);
  }

  useEffect(() => {
    if (activeDate) {
      setPostData({
        ...postData,
        pickup_date: activeDate,
      });
      GetTime({date: activeDate});
    }
  }, [activeDate]);

  useEffect(() => {
    if (timeList && timeList[0]) {
      setActiveTime(timeList[0]);
      setPostData({
        ...postData,
        pickup_date: activeDate,
        pickup_time: timeList[0],
      });
    }
  }, [timeList]);

  const handleNext = () => {
    if (postData.pickup_date && postData.pickup_time) {
      navigation.navigate('DeliverySchedule', {data: postData, pickupmylaundry:pickupmylaundry});
    } else {
      alert('Please select valid pickup date and time.');
    }
  };

  // console.log("timeList ; ", timeList)
  // console.log('pickup postData ; ', postData);

  // const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (val) => {
    // console.log('date...........................',date);
    var newdate = val; 
    const date = new Date(newdate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
    const year = date.getUTCFullYear();
    
    const formattedDate1 = `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    console.log('pickuppageDate------------- ; ',formattedDate1);
    
    setActiveDate(formattedDate1), handleChange('pickup_date', formattedDate1);
  
    // const valuedate = `"${formattedDate1}"`;
  
    // console.log('pickuppageDate------------- ; ', valuedate);
    // setSelectedStartDate(date);
  }


  // console.log('selectedStartDateDate-------------', selectedStartDate);


    // const selectedStartDate = "2024-10-19T06:30:00.000Z";
    // const date = new Date(selectedStartDate);
    // const day = date.getUTCDate();
    // const month = date.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
    // const year = date.getUTCFullYear();
    
    // const formattedDate1 = `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    // console.log(formattedDate1);
    
  
  
    // const valuedate = `"${formattedDate1}"`;
  
    // console.log('pickuppageDate------------- ; ', valuedate);

  return (
    <View style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            {/* pickup date container */}
            <View>
              <View style={styles.title_box}>
                <Text style={styles.title}>Pickup Date</Text>
              </View>
              <View>
                <CalendarPicker
                  onDateChange={onDateChange}
                />
              </View>
              {/* <FlatList
                data={pickup_date}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    activeOpacity={1}
                    // onPress={() => handleChange("pickup_date", item) }
                    onPress={() => {
                      setActiveDate(item), handleChange('pickup_date', item);
                    }}
                    style={[
                      styles.date_btn,
                      index == 0 && {marginLeft: SIZES.width * 0.03},
                      index == pickup_date.length - 1 && {
                        marginRight: SIZES.width * 0.03,
                      },
                      activeDate == item && {backgroundColor: COLORS.primary},
                    ]}>
                    <Text
                      style={[
                        styles.date_text,
                        activeDate == item && {color: COLORS.white},
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                key={(_, index) => index}
              /> */}
            </View>

            {/* pickup time container */}
            <View>
              <View style={styles.title_box}>
                <Text style={styles.title}>Pickup Time</Text>
              </View>
              <View style={styles.time_container}>
                {timeList && timeList[0] ? (
                  <FlatList
                    data={timeList}
                    renderItem={({item, index}) => (
                      <View style={styles.time_btn_box}>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => {
                            setActiveTime(item),
                              handleChange('pickup_time', item);
                          }}
                          style={[
                            styles.time_btn,
                            activeTime == item && {
                              backgroundColor: COLORS.primary,
                            },
                          ]}>
                          <Text
                            style={[
                              styles.time_text,
                              activeTime == item && {color: COLORS.white},
                            ]}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    key={(_, index) => index}
                  />
                ) : (
                  <Text style={styles.no_time_text}>
                    Sorry no time slots available in this date
                  </Text>
                )}
              </View>
            </View>
          </View>
          <View style={{height: '2%'}} />
          <Button1 style={styles.btn} onPress={handleNext}>
            Next
          </Button1>
        </View>
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.product.loading,
  timeList: state.product.timeList,
});

const mapDispatchToProps = {
  GetTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(PickupSchedule);
