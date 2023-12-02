import { View, Text, ScrollView, StatusBar, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import { GetPrivacyPolicy } from '../../redux/actions/homeAction'
import Loading from '../../component/loading'
import { connect } from 'react-redux'


const PrivacyPolicy = ({ loading, GetPrivacyPolicy, privacyPolicy }) => {
    useEffect(() => {
        GetPrivacyPolicy()
    }, [])
    console.log("porkds f : ", privacyPolicy)
    return (
        <>
            {loading ?
                <Loading />
                :
                <View style={globalStyles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
                    <View style={globalStyles.center}>
                        <View style={styles.policy_container}>
                            {privacyPolicy &&
                                <FlatList
                                    data={privacyPolicy}
                                    renderItem={({ item, index }) => (
                                        <View style={styles.box}>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.text}>{item.description}</Text>
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
    privacyPolicy: state.home.privacyPolicy,
})

const mapDispatchToProps = {
    GetPrivacyPolicy
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy)