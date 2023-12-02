import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../constants';
import Modal from 'react-native-modal'


const Loading = () => {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
      {/* <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" /> */}
      {/* <Text style={styles.title}>
        Sorry for the interruption
      </Text> */}
      <ActivityIndicator color={COLORS.black} size={40} style={styles.loading} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

// const Loading = ({loading}) => {
//   return (
//     <Modal isVisible={loading} backdropOpacity={0.4} style={styles.modal}>
//       <View style={styles.loading_box}>
//         {/* <Image source={images.loading1} style={styles.loading_image} resizeMode='contain' /> */}
//         <ActivityIndicator color={COLORS.primary} size={30} style={styles.loading} />
//       </View>
//     </Modal>
//   )
// }

// Loading.defaultProps = {
//   loading: false,
// }

export default Loading;

const styles = StyleSheet.create({

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loading_box: {
    width: SIZES.width * .3,
    height: SIZES.width * .3,
    borderRadius: SIZES.width * .02,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    backgroundColor: COLORS.white,
  },

  loading_image: {
    width: SIZES.width * .08,
    height: SIZES.width * .08,
    // width: SIZES.width * .8,
    // height: SIZES.width * .8,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.black,
    marginBottom: 30,
  },

  text: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.black,
  },

  loading: {
    marginBottom: 10,
  },

})

// import { Image,  StyleSheet, View } from 'react-native'
// import React from 'react'
// import { COLORS, FONTS, SIZES, images } from '../../constants'

// const Loading = () => {
//     return (
//         <View style={styles.container}>
//             <Image source={images.loading1} style={styles.loadingImg} resizeMode='contain' />
//             {/* <ActivityIndicator color={COLORS.black} size={40} style={{ marginBottom: 50 }} /> */}
//         </View>
//     )
// }

// export default Loading;

// const styles = StyleSheet.create({
//     container: {
//         width: SIZES.width,
//         height: SIZES.height,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: COLORS.white
//     },

//     loadingImg: {
//         // width: 150,
//         height: 50,
//         // marginBottom: 50,
//     },
// })