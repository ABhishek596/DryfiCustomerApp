import { View, Text, FlatList, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import globalStyles from '../../styles/globalStyles'
import styles from './styles'
import Loading from '../../component/loading'
import { COLORS, SIZES, data, images } from '../../constants'
import { BottomSheet } from 'react-native-btr'
import Icons from '../../component/Icons'
import { GetAllProduct, GetProductByCatId, GetProductByServiceId, GetProductFeatures } from '../../redux/actions/productAction'
import NoDataBox from '../../component/noDataBox'
import ProductCard from '../../component/card/ProductCard'
import { http2 } from '../../services/api'
import CategoryButton from '../../component/button/CategoryButton'
import CheckBox from '@react-native-community/checkbox'
import { RadioButton } from 'react-native-paper';
import Button1 from '../../component/button/Button1'


const Schedule = ({ navigation, route, loading, }) => {


  const [postData, setPostData] = useState({
    id: null,
    iron: 2,
    color1: null,
    color2: null,
    damage: null,
    packing_style: null,
    stains: null,
    addon_name: null,
    price: 0,
    quantity: 0,
  });

  const [itemList, setItemList] = useState([]);
  const [productId, setProductId] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // console.log("postData fuel type : ", postData.fuelType)

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    })
  }



  useEffect(() => {
    GetProductFeatures()
  }, [])

  const reset = () => {
    setPostData({
      "id": null,
      "iron": 2,
      "color1": null,
      "color2": null,
      "damage": null,
      "packing_style": null,
      "stains": null,
      "addon_name": null,
      "price": 0,
      "quantity": 0,
    })
  }

  const handleItemsList = (type) => {
    let arr = [...itemList]
    // console.log("arr", arr.indexOf(value))
    // if (arr.includes(value)) {
    //   arr.splice(itemList.indexOf(value), 1)
    // } else {
    //   arr.push(value)
    // }

  }


  // console.log("product itemList : ", itemList)
  // console.log("postdata : ", postData)

  return (
    // <>
    //   {loading ?
    //     <Loading />
    //     :
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />

      {/* <View style={globalStyles.center}> */}


      {/* product container */}
      {loading ?
        <Loading />
        :
        <View style={{ flex: 1, }} >
          {/* {productData?.[0] ?
            <FlatList
              data={productData}
              renderItem={
                ({ item, index }) => (
                  <ProductCard
                    marginBottom={itemList[0] && (index == productData.length - 1) ? SIZES.height * .25 : SIZES.height * .025}
                    marginTop={index == 0 ? SIZES.height * .025 : 0}
                    source={{ uri: `${http2}public/uploads/` + item.image }}
                    productName={item?.product_name}
                    quantity={itemList[itemList.findIndex(ele => ele?.id == item.id)]?.quantity}
                    setQuantity={(quan) => addItem(item.id, quan, 300)}
                    price={"$300"}
                    onPress={() => handleEditPress(item.id)}
                  />
                )}
              key={item => item.id}
              showsVerticalScrollIndicator={false}
            />
            :
            <View style={{ height: SIZES.height * .7 }}>
              <NoDataBox title={"No Product"} />
            </View>
          } */}

        </View>
      }


      {/* bottom container */}
      {!itemList[0] &&
        <View style={styles.bottom_container}>
          <View style={styles.total_amt_row}>
            <Text style={styles.amount_text}>Total Price ({itemList.length} Items)</Text>
            <Text style={styles.amount_text}>$ {totalAmount}</Text>
          </View>
          <View style={styles.total_amt_row}>
            <Text style={styles.amount_text}>Lorem Ipsum</Text>
            <Text style={styles.amount_text}>$ 40</Text>
          </View>
          <View style={styles.total_amt_row}>
            <Text style={styles.amount_text}>Discount</Text>
            <Text style={styles.amount_text}>$ 10</Text>
          </View>
          <View style={styles.bottom_btn_box}>
          <View style={styles.total_amt_row}>
            <Text style={{...styles.amount_text, color: COLORS.secondary}}>Total Price ({itemList.length} Items)</Text>
            <Text style={{...styles.amount_text, color: COLORS.secondary}}>$ 876</Text>
            {/* <Text style={styles.amount_text}>$ {totalPrice}</Text> */}
          </View>
            <Button1
            onPress={() => navigation.navigate("Address")}
            >Check Out</Button1>
          </View>
        </View>
      }
    </View >
    // }
    // </>

  )
}

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  productData: state.product.productData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)