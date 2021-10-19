import React, { Component, createRef } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, SafeAreaView, Image, TextInput
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import Icon from 'react-native-vector-icons/Feather';
import { SwipeablePanel } from 'rn-swipeable-panel';

const sheetRef = createRef(null);

export default class TranDetail extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            refundAction: false
        }

    }
    render() {
        const { refundAction } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => NavigationService.goBack()}
                    >
                        <Icon name="arrow-left" style={styles.goBack} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: '700' }}>Transaction Details</Text>
                </View>
                <View style={styles.tranDetailBox}>
                    <View style={styles.firstRow}>
                        <View style={styles.eachTranLeft}>
                            <Image
                                style={styles.logo}
                                source={require('./../Assets/images/bg.png')}
                            />
                            <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 15, }}>
                                <Text style={{ fontSize: 20 }}>123456782345673</Text>
                                <Text style={{ fontSize: 14, color: 'gray', marginTop: 3, }}>15/8/2020 05:23:03 PM</Text>
                            </View>
                        </View>
                        <View style={styles.eachTranRight}>
                            <Icon name="arrow-left" style={{ fontSize: 25, color: 'black' }} />
                        </View>
                    </View>
                    <Text style={{ fontSize: 20, color: '#e4e4e4' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>

                    <View style={styles.secondRow}>
                        <View style={styles.content}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Date/Time:</Text>
                                <Text style={styles.rightTxt}>14/4/2012 04:52:03 PM</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Sales Point:</Text>
                                <Text style={styles.rightTxt}>Amatak by N.SOVAN</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Seller:</Text>
                                <Text style={styles.rightTxt}>NOUP SOVAN</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Accepted Via:</Text>
                                <Text style={styles.rightTxt}>PayWay Mobile</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Payment Type:</Text>
                                <Text style={styles.rightTxt}>ABA PAY</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Payer</Text>
                                <Text style={styles.rightTxt}>Mak Knh (*9999)</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Approval Code:</Text>
                                <Text style={styles.rightTxt}>112497</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Original Amount:</Text>
                                <Text style={styles.rightTxt}>1.00 USD</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                                <Text style={styles.leftText}>Payment Amount:</Text>
                                <Text style={styles.rightTxt}>1.00 USD</Text>
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <View style={styles.left}>
                                <Text style={{ fontSize: 10, color: 'gray' }}>TOTAL AMOUNT</Text>
                                <Text style={{ fontSize: 20, color: 'green', fontWeight: '700', marginTop: 5, }}>1.00 USD</Text>
                            </View>
                            <View style={styles.right}>
                                <TouchableOpacity style={styles.refundBtn}
                                    onPress={() => this.setState({ refundAction: true })}
                                >
                                    <Text style={{ fontSize: 15, color: 'white' }}>Refund</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <SwipeablePanel
                    closeOnTouchOutside={true}
                    isActive={refundAction}
                    onClose={() => this.setState({ refundAction: false })}
                    onlyLarge={true}
                    fullWidth={true}
                    style={{ height: '45%' }}
                >
                    <View style={styles.refundContent}>
                        <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10, marginBottom: 15, }}>Refund</Text>
                        <View style={styles.inputField}>
                            <View>
                                <Icon name="arrow-left" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.userInput}
                                    placeholder="Refund amount (Max 99.00 USD)"
                                />
                            </View>
                            <View>
                                <Icon name="arrow-left" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.userInput}
                                    placeholder="Remark (Optional)"
                                />
                            </View>
                            <Text style={{ fontSize: 12, textAlign: 'right', marginRight: 10, }}>32/250</Text>
                        </View>
                        <TouchableOpacity style={styles.confirmBtn}>
                            <Text style={{ fontSize: 15, color: 'white' }}>Comfirm</Text>
                        </TouchableOpacity>
                    </View>
                </SwipeablePanel>
            </SafeAreaView >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2477B2',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    header: {
        width: '90%',
        marginHorizontal: '5%',
    },
    goBack: {
        fontSize: 25,
        marginTop: 10,
        color: 'white',
    },
    tranDetailBox: {
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        paddingTop: 20,
        height: '90%',
        marginTop: 10,
    },
    firstRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingTop: 15,
        paddingBottom: 10,
    },
    eachTranLeft: {
        display: 'flex',
        flexDirection: 'row',
    },
    secondRow: {
        height: '85%',
    },
    content: {
        width: '90%',
        marginHorizontal: '5%',

    },
    leftText: {
        color: 'gray',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        paddingTop: 15,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderTopColor: '#e4e4e4'
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
    },
    right: {
        justifyContent: 'center',
    },
    refundBtn: {
        backgroundColor: '#2477B2',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },



    //refund sheet panel
    refundContent: {
        width: '90%',
        marginHorizontal: '5%',
    },
    userInput: {
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        fontSize: 16,
        paddingLeft: 45,
        marginVertical: 12.5,
    },
    inputIcon: {
        position: 'absolute',
        fontSize: 25,
        top: 20,
        left: 10,
    },
    confirmBtn: {
        backgroundColor: '#2477B2',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: '12%',
    }
})