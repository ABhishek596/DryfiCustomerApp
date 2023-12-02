import {
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

const DeliverySchedule = ({navigation, GetTime, route, timeList, loading}) => {
  const [postData, setPostData] = useState({
    ...route.params?.data,
    delivery_date: null,
    delivery_time: null,
  });

  const valuestatus = route.params?.pickupmylaundry;
  console.log('valuestatus--------->>>>>>>', valuestatus);

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  let tommorrow_date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  let tommorrow_active_date =
    tommorrow_date.getDate() +
    '-' +
    (tommorrow_date.getMonth() + 1) +
    '-' +
    tommorrow_date.getFullYear();

  var delivery_date = [];

  const [activeDate, setActiveDate] = useState(tommorrow_active_date);
  const [activeTime, setActiveTime] = useState();

  for (let i = 1; i <= 30 + 1; i++) {
    let today = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
    let date =
      today.getDate() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getFullYear();
    delivery_date.push(date);
  }

  useEffect(() => {
    if (activeDate) {
      GetTime({date: activeDate});
      setPostData({
        ...postData,
        delivery_date: activeDate,
      });
    }
  }, [activeDate]);

  useEffect(() => {
    if (timeList && timeList[0]) {
      setActiveTime(timeList[0]);
      setPostData({
        ...postData,
        delivery_date: activeDate,
        delivery_time: timeList[0],
      });
    }
  }, [timeList]);

  const handleNext = () => {
    if (postData.delivery_date && postData.delivery_time) {
      navigation.navigate('Address', {data: postData,valuestatus:valuestatus});
    } else {
      alert('Please select valid delivery date and time.');
    }
  };
  console.log('delivery postdata ; ', postData);

  
  const onDateChange = (val) => {
    // console.log('date...........................',date);
    var newdate = val; 
    const date = new Date(newdate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
    const year = date.getUTCFullYear();
    
    const formattedDate1 = `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    console.log('pickuppageDate------------- ; ',formattedDate1);
    
    setActiveDate(formattedDate1), handleChange('delivery_date', formattedDate1);
  
    // const valuedate = `"${formattedDate1}"`;
  
    // console.log('pickuppageDate------------- ; ', valuedate);
    // setSelectedStartDate(date);
  }

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
                <Text style={styles.title}>Delivery Date</Text>
              </View>
              <View>
                <CalendarPicker
                  onDateChange={onDateChange}
                />
              </View>
              {/* <FlatList
                data={delivery_date}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() =>
                       {
                      setActiveDate(item), handleChange('delivery_date', item);
                    }}
                    // onPress={() => { setActiveDate(item), GetTime(item) }}
                    style={[
                      styles.date_btn,
                      index == 0 && {marginLeft: SIZES.width * 0.03},
                      index == delivery_date.length - 1 && {
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
                <Text style={styles.title}>Delivery Time</Text>
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
                              handleChange('delivery_time', item);
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliverySchedule);
