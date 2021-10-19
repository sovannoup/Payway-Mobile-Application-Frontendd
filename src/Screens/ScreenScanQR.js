/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image, ScrollView,
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class QR extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }

    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => NavigationService.goBack()}
                        >
                            <Icon name="arrow-left" style={styles.backBtn} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkBox}>
                        <View style={styles.shopImgBox}>
                            <Image
                                style={styles.shopLogo}
                                source={require('./../Assets/images/logoAmatak.png')}
                            />
                        </View>
                        <View style={styles.secondLinkBox}>
                            <View style={styles.linkHeader}>
                                <Text style={{ fontSize: 20, fontWeight: '700', marginVertical: 10 }}>Amatak by NOUP SOVAN</Text>
                                <Text style={{ fontSize: 14, color: '#a8a8a8' }}>Scan here to pay</Text>
                                <Icon name="arrow-left" style={{ fontSize: 20, color: '#a8a8a8', marginTop: 10 }} />
                            </View>
                            <View style={styles.boxQR}>
                                <View style={styles.dakBorder}>
                                    <View style={styles.dummyQR} />
                                </View>
                                <View style={styles.topStyleBox} />
                                <View style={styles.bottomStyleBox} />
                                <View style={styles.leftStyleBox} />
                                <View style={styles.rightStyleBox} />
                            </View>
                            <TouchableOpacity
                                style={styles.savePayment}
                            >
                                <Icon name="arrow-left" style={{ fontSize: 20, color: '#2477B2' }} />
                                <Text style={{ fontSize: 13, marginLeft: 10, color: '#2477B2' }}>SAVE TO GALLERY</Text>
                            </TouchableOpacity>
                            <View style={styles.linkFooter}>
                                <Text>Payment Method</Text>
                            </View>
                            <View style={styles.footerLogo} />
                        </View>
                    </View>
                </View>
            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2477B2',
    },
    body: {
        width: '90%',
        marginHorizontal: '5%',
    },
    backBtn: {
        fontSize: 35,
    },
    linkBox: {
        height: '91%',
        alignItems: 'center'
    },
    secondLinkBox: {
        width: '100%',
        height: '93%',
        marginTop: 50,
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    shopLogo: {
        width: 10,
        height: 10,
    },
    shopImgBox: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#e4e4e4',
        borderWidth: 4,
        borderColor: 'white',
    },
    linkHeader: {
        alignItems: 'center',
    },
    //QR Box:
    boxQR: {
        marginTop: 50,
        height: 250,
        width: '70%',
        marginHorizontal: '15%',
    },
    dakBorder: {
        height: '100%',
        borderWidth: 5,
        borderColor: '#2477B2',
    },
    dummyQR: {
        width: '90%',
        height: '90%',
        margin: '5%',
        backgroundColor: 'black'
    },
    topStyleBox: {
        position: 'absolute',
        width: '80%',
        right: '10%',
        height: 5,
        backgroundColor: 'white'
    },
    rightStyleBox: {
        position: 'absolute',
        width: 5,
        top: '10%',
        height: '80%',
        right: 0,
        backgroundColor: 'white'
    },
    bottomStyleBox: {
        position: 'absolute',
        width: '80%',
        right: '10%',
        height: 5,
        bottom: 0,
        backgroundColor: 'white'
    },
    leftStyleBox: {
        position: 'absolute',
        width: 5,
        top: '10%',
        height: '80%',
        backgroundColor: 'white'
    },


    // Save Payment

    savePayment: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    linkFooter: {
        paddingVertical: 15,
        width: '90%',
        marginHorizontal: '5%',
        borderTopWidth: 1,
        borderTopColor: '#e4e4e4',
        display: 'flex',
        flexDirection: 'row',
    },

})