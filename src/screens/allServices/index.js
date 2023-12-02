import { View, Text, ScrollView, TouchableOpacity, StatusBar, FlatList, ImageBackground, Image } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import { COLORS, SIZES, images } from '../../constants';
import Loading from '../../component/loading';
import ServiceCard from '../../component/card/ServiceCard';
import { http2 } from '../../services/api';


const AllServices = ({ navigation, loading, serviceList }) => {

    // console.log("category data : ", categoryList)

    return (
        <>
            {loading ?
                <Loading />
                :
                <View style={globalStyles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
                    <View style={globalStyles.center}>

                        {/* category container */}
                        <View>
                            {/* <View style={{ ...globalStyles.row1, marginVertical: SIZES.height * .02, }}>
                                <Text style={styles.title}>All Services</Text>
                            </View> */}
                            {serviceList &&
                                <FlatList
                                    data={serviceList}
                                    renderItem={({ item, index }) => (
                                        <View style={styles.box}>
                                            <ServiceCard
                                                marginTop={index == 0 ? SIZES.height * .03 : null}
                                                // subTitle={"standard dummy text ever since"}
                                                // price={"$140"}
                                                source={{ uri: `${http2}public/uploads/` + item.service.image }}
                                                service={item.service?.service_name}
                                                subTitle={item.service?.description}
                                                onPress={() => navigation.navigate("Product", { serviceId: item.service?.id })}
                                            />
                                        </View>
                                    )}
                                    key={item => item.id}
                                    showsVerticalScrollIndicator={false}
                                />
                            }
                        </View>

                    </View>
                </View>
            }
        </>

    )
}

const mapStateToProps = (state) => ({
    loading: state.home.loading,
    serviceList: state.home.serviceList,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)
