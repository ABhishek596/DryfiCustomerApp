import { View, Text, ScrollView, TouchableOpacity, StatusBar, FlatList, ImageBackground, Image } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import { COLORS, SIZES, images } from '../../constants';
import Loading from '../../component/loading';
import ServiceCard from '../../component/card/ServiceCard';


const ActiveOrder = ({ navigation, loading, categoryList, }) => {

  // console.log("category data : ", categoryList)
  const order = [1, 2, 3, 4]

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
              {categoryList &&
                <FlatList
                  data={categoryList}
                  renderItem={({ item, index }) => (
                    <View style={[styles.box, index == 0 && { marginTop: SIZES.height * .025}]}>
                      <View style={styles.box_header}>
                        <Text style={styles.order_id}>Order #Dry0010C1</Text>
                        <TouchableOpacity activeOpacity={0.5}
                        style={styles.cancel_btn}
                        >
                          <Text style={styles.cancel}>Cancel</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Pickup Date</Text>
                        <Text style={styles.order_text}>18/May/2023</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Pickup Time</Text>
                        <Text style={styles.order_text}>10:00 am</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Quantity</Text>
                        <Text style={styles.order_text}>09 Items</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Total Amount</Text>
                        <Text style={styles.order_text}>$ 807</Text>
                      </View>

                      <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btn_text}>Status</Text>
                      </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrder)
