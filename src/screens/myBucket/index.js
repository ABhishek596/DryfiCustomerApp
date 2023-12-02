import { View, Text, FlatList, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import globalStyles from '../../styles/globalStyles'
import styles from './styles'
import Loading from '../../component/loading'
import { COLORS, SIZES, data, images } from '../../constants'
import { BottomSheet } from 'react-native-btr'
import Icons from '../../component/Icons'
import { useEffect } from 'react'
import { GetAllProduct } from '../../redux/actions/productAction'
import NoDataBox from '../../component/noDataBox'
import ProductCard from '../../component/card/ProductCard'
import { http2 } from '../../services/api'

const MyBucket = ({ navigation, loading, GetAllProduct, productData }) => {
  const [filterBottom, setFilterBottom] = useState(false)

  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    GetAllProduct(1,1)
  }, [])
  return (
    <>
      {loading ?
        <Loading />
        :
        <View style={globalStyles.container}>
          <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
          {/* <View style={globalStyles.center}> */}

          {/* product container */}
          <View >
            {productData ?
              <FlatList
                data={productData}
                renderItem={({ item, index }) => (
                  <ProductCard
                    marginTop={index == 0 ? SIZES.height * .025 : 0}
                    source={{ uri: item.image }}
                    productName={item.product?.product_name}
                    // quantity={quantity}
                    // setQuantity={(value) => setQuantity(value)}
                    price={"$300"}
                  />
                )}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
              />
              :
              <View style={{ height: SIZES.height * .8 }}>
                <NoDataBox title={"No Product"} />
              </View>
            }
            {/* </View> */}
          </View>


          <BottomSheet
            visible={filterBottom}
            onBackButtonPress={() => setFilterBottom(!filterBottom)}
            onBackdropPress={() => setFilterBottom(!filterBottom)}
          >
            <View style={styles.bottomSheet1}>
              <View style={styles.titleRow}>
                <Text style={styles.bottomTitle}>Filter</Text>
                <TouchableOpacity
                  onPress={() => setFilterBottom(!filterBottom)}>
                  <Icons name={"close"} size={30} color={COLORS.black} />
                </TouchableOpacity>
              </View>
              <View style={styles.row2}>
                <View style={styles.sideBar}>

                  {/* {filterType.map((item) => (
                    <TouchableOpacity key={item.id} style={[styles.btn, type == item.id && { backgroundColor: COLORS.white }]}
                      onPress={() => setType(item.id)}
                    >
                      <Text style={styles.btnTxt}>{item.type}</Text>
                    </TouchableOpacity>
                  ))} */}

                </View>
                <View style={styles.rightBox}>
                  {/* {fuelList && type == 1 && fuelList.map((item, i) => (
                    <View style={styles.row1} key={i}>
                      <CheckBox
                        disabled={false}
                        value={postData.fuelType == item ? true : false}
                        onValueChange={() => handleChange("fuelType", item)}
                        // value={fuelType == item ? true : false}
                        tintColors={{ true: "#59595A", false: "#59595A" }}
                        // onValueChange={() => setFuelType(item)}
                        style={styles.checkBox}
                      />
                      <Text style={styles.label}>{item == 'petrol' ? 'gasoline' : item}</Text>
                    </View>
                  ))}

                  {transmissionList && type == 2 && transmissionList.map((item, i) => (
                    <View style={styles.row1} key={i}>
                      <CheckBox
                        disabled={false}
                        // value={transmission == item ? true : false}
                        value={postData.transmission == item ? true : false}
                        onValueChange={() => handleChange("transmission", item)}
                        tintColors={{ true: "#59595A", false: "#59595A" }}
                        // onValueChange={() => setTransmission(item)}
                        style={styles.checkBox}
                      />
                      <Text style={styles.label}>{item}</Text>
                    </View>
                  ))}
                  {brands && type == 3 && brands.map((item, i) => (
                    <View style={styles.row1} key={i}>
                      <CheckBox
                        disabled={false}
                        // value={brand == item ? true : false}
                        tintColors={{ true: "#59595A", false: "#59595A" }}
                        // onValueChange={() => setBrand(item)}
                        value={postData.brand == item ? true : false}
                        onValueChange={() => handleChange("brand", item)}
                        style={styles.checkBox}
                      />
                      <Text style={styles.label}>{item}</Text>
                    </View>
                  ))} */}
                  <ScrollView >
                    {/* {colors && type == 4 && colors.map((item, i) => (
                      <View style={styles.row1} key={i}>
                        <CheckBox
                          disabled={false}
                          // value={color == item ? true : false}
                          onValueChange={() => handleChange("color", item)}
                          value={postData.color == item ? true : false}
                          tintColors={{ true: "#59595A", false: "#59595A" }}
                          // onValueChange={() => setColor(item)}
                          style={styles.checkBox}
                        />
                        <Text style={styles.label}>{item}</Text>
                      </View>
                    ))} */}
                  </ScrollView>

                  <ScrollView >
                    {/* {year && type == 5 && year.map((item, i) => (

                      <View style={styles.row1} key={i}>
                        <CheckBox
                          disabled={false}
                          value={postData.years == item ? true : false}
                          tintColors={{ true: "#59595A", false: "#59595A" }}
                          // onValueChange={() => setYears(item)}
                          // value={years == item ? true : false}
                          onValueChange={() => handleChange("years", item)}
                          style={styles.checkBox}
                        />
                        <Text style={styles.label}>{item}</Text>
                      </View>
                    ))} */}
                  </ScrollView>

                </View>
              </View>
              <View style={styles.btnRow}>
                <TouchableOpacity style={[styles.bottomBtn, { backgroundColor: COLORS.white }]}
                // onPress={resetFilter}
                >
                  <Text style={[styles.bottomBtnTxt, { color: "#0F56CC", }]}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBtn}
                // onPress={() => { setFilterBottom(!filterBottom), handleFilter() }}
                // onPress={() => setFilterBottom(!filterBottom)}
                >
                  <Text style={styles.bottomBtnTxt}>Apply filters</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheet>
        </View>
      }
    </>

  )
}

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  productData: state.product.productData,
})

const mapDispatchToProps = {
  GetAllProduct

}

export default connect(mapStateToProps, mapDispatchToProps)(MyBucket)