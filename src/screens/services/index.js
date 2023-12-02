import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {COLORS, SIZES, data, images} from '../../constants';
import Loading from '../../component/loading';
import {GetAllService} from '../../redux/actions/homeAction';
import {useEffect} from 'react';
import {http2} from '../../services/api';

const Services = ({navigation, loading, serviceList, GetAllService}) => {
  // console.log("category data : ", categoryList)
  useEffect(() => {
    GetAllService();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          <View style={globalStyles.center}>
            {/* service container */}
            <View>
              {serviceList && (
                <FlatList
                  data={serviceList}
                  renderItem={({item, index}) => (
                    <View
                      style={[
                        styles.box,
                        index == 0 && {marginTop: SIZES.height * 0.025},
                      ]}>
                      <View style={styles.box_header}>
                        <View style={styles.icon_box}>
                          <Image
                            source={{
                              uri:
                                `${http2}public/uploads/` + item.service.image,
                            }}
                            style={styles.icon}
                            resizeMode="contain"
                          />
                          {/* <Icons name={item.icon} size={20} color={COLORS.secondary} /> */}
                        </View>
                        <Text style={styles.service_title}>
                          {item.service.service_name}
                        </Text>
                      </View>

                      <View style={styles.text_box}>
                        <Text style={styles.service_text}>
                          {item.service.description}
                        </Text>
                      </View>
                    </View>
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  serviceList: state.home.serviceList,
});

const mapDispatchToProps = {
  GetAllService,
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
