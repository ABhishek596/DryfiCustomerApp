import { View, Text, ScrollView, TouchableOpacity, StatusBar, FlatList, ImageBackground, Image } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import { COLORS, SIZES, images } from '../../constants';
import Loading from '../../component/loading';
import ServiceCard from '../../component/card/ServiceCard';


const Category = ({ navigation, loading, categoryList, }) => {

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
                        <View >
                            {/* <View style={{ ...globalStyles.row1, marginVertical: SIZES.height * .02, }}>
                                <Text style={styles.title}>Category</Text>
                            </View> */}
                            {categoryList &&
                                <FlatList
                                    data={categoryList}
                                    renderItem={({ item, index }) => (
                                        <View style={styles.box}>
                                            <ServiceCard
                                                marginTop={index == 0 ? SIZES.height * .03 : null}
                                                source={images.primWash}
                                                service={item.category}
                                                rating={4}
                                                subTitle={"standard dummy text ever since"}
                                                price={"$140"}
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
    categoryList: state.home.categoryList,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
