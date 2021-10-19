import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image, TextInput,
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwipeablePanel } from 'rn-swipeable-panel';

export default class Home extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            shareActive: false,
        }

    }

    render() {
        const { shareActive } = this.state;
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.firstRow}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                        >
                            <Icon name="arrow-left" style={styles.Menu} />
                        </TouchableOpacity>
                        <Image
                            style={styles.logo}
                            source={require('./../Assets/images/logoAmatak.png')}
                        />
                        <View style={styles.right}>
                            <Icon name="arrow-left" style={styles.rightIcon} />
                            <Icon name="arrow-left" style={styles.rightIcon} />
                        </View>
                    </View>
                    <View style={styles.amount}>
                        <Text style={{ color: 'white', opacity: 0.6 }}>ENTER AMOUNT</Text>
                        <View style={styles.aboutMoney}>
                            <Text style={styles.money}>$</Text>
                            <Text style={styles.amountMoney}>0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mid}></View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => NavigationService.navigate(NAV_TYPES.QR)}
                        style={styles.showBtn}
                    >
                        <Icon name="arrow-left" style={styles.footerIcon} />
                        <Text style={styles.footerBtnTxt}>Show QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ shareActive: true })}
                        style={styles.shareBtn}
                    >
                        <Icon name="arrow-left" style={styles.footerIcon} />
                        <Text style={styles.footerBtnTxt}>Share</Text>
                    </TouchableOpacity>
                </View>
                <SwipeablePanel
                    closeOnTouchOutside={true}
                    isActive={shareActive}
                    onClose={() => this.setState({ shareActive: false })}
                    onlyLarge={true}
                    fullWidth={true}
                    style={{ height: '50%' }}
                >
                    <View style={styles.sharePanel}>
                        <Text style={styles.shareHeadTxt}>Payment Link</Text>
                        <View style={styles.shareBoxDesc}>
                            <Text style={styles.descTxt}>Add product/service details and share link with your customer to receive payments.</Text>
                            <View style={{ width: '30%' }}>
                                <Icon name="arrow-left" style={styles.descIcon} />
                            </View>
                        </View>
                        <View style={styles.userInput}>
                            <TextInput
                                style={styles.descInput}
                                placeholder="Short description (optional)"
                            />
                            <View style={styles.absIcon}>
                                <Icon name="arrow-left" style={{ fontSize: 30, color: '#a8a8a8', textAlign: 'center' }} />
                                <Text style={{ fontSize: 12, marginTop: 10, color: '#a8a8a8' }}>99/250</Text>
                            </View>
                        </View>
                        <View style={styles.linkFooter}>
                            <TouchableOpacity
                                onPress={() => navigation.openDrawer()}
                                style={styles.linkShareBtn}
                            >
                                <Icon name="arrow-left" style={styles.linkShareIcon} />
                                <Text style={styles.linkShareTxt}>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ shareActive: true })}
                                style={styles.copyShareBtn}
                            >
                                <Icon name="arrow-left" style={styles.footerIcon} />
                                <Text style={styles.footerBtnTxt}>Copy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SwipeablePanel>
            </SafeAreaView >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstRow: {
        height: '40%',
        backgroundColor: '#2477B2',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Menu: {
        fontSize: 30,
        marginLeft: 10,
    },
    rightIcon: {
        fontSize: 30,
        marginRight: 10,
    },
    right: {
        display: 'flex',
        flexDirection: 'row'
    },
    amount: {
        alignItems: 'center',
        marginTop: '25%'
    },
    aboutMoney: {
        opacity: 0.4,
        paddingHorizontal: 15,
    },
    money: {
        fontSize: 25,
        position: 'absolute',
        left: 0,
        top: '15%',
        color: 'white',
    },
    amountMoney: {
        fontSize: 50,
        color: 'white',
    },


    //middle 
    mid: {
        width: '100%',
        height: '50%',
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: '5%',
    },
    showBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2477B2',
        width: '70%',
        marginRight: '2%',
        justifyContent: 'center',
    },
    shareBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2477B2',
        width: '28%',
        justifyContent: 'center',
    },
    footerIcon: {
        fontSize: 30,
        color: '#2477B2',
    },
    footerBtnTxt: {
        fontSize: 15,
        color: '#2477B2',
        marginLeft: 5,
    },


    // Share Panel
    sharePanel: {
        width: '90%',
        marginHorizontal: '5%',
    },
    shareHeadTxt: {
        fontSize: 17,
        fontWeight: '700',
        paddingVertical: 10
    },
    shareBoxDesc: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#FAFAFA',
        borderColor: '#e4e4e4',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 15,
    },
    descTxt: {
        fontSize: 15,
        color: '#a8a8a8',
        width: '70%',
    },
    descIcon: {
        textAlign: 'center',
        fontSize: 55,
        color: '#696969'
    },
    userInput: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#2477B2',
        marginTop: 35,
        marginBottom: 65,
    },
    absIcon: {
        position: 'absolute',
        right: 0,
        top: 5,
    },
    descInput: {
        fontSize: 16,
        paddingRight: 50,
    },
    linkFooter: {
        display: 'flex',
        flexDirection: 'row',
    },
    linkShareBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2477B2',
        width: '73%',
        marginRight: '2%',
        justifyContent: 'center',
        backgroundColor: '#2477B2',
    },
    copyShareBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2477B2',
        width: '25%',
        justifyContent: 'center',
    },
    linkShareIcon: {
        fontSize: 30,
        color: 'white',
    },
    linkShareTxt: {
        fontSize: 15,
        color: 'white',
        marginLeft: 5,
    },
})