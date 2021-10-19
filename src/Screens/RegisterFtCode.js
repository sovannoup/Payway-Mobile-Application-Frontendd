import React, { Component } from 'react'
import {
    FlatList,
    Linking,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Pressable,
} from 'react-native';
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import Icon from 'react-native-vector-icons/Feather';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { SafeAreaView } from 'react-navigation';

export default class FtCode extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            Page: ''
        }
    }
    componentDidMount() {
        const { navigation } = this.props
        const { Page } = this.state
        var infoPage = navigation.getParam('page', false);
        this.setState({ Page: infoPage })
    }

    render() {
        const { Page } = this.state
        return (
            <View style={styles.container}>
                <StatusBar
                    // animated={true}
                    backgroundColor="#2477B2"
                // barStyle={'default'}
                // showHideTransition={'slide'}
                // hidden={false}
                />
                <View style={styles.regisCon}>
                    <Icon name="arrow-left" style={styles.regisArrow} />
                    <Text style={styles.regisText}>Registration</Text>
                </View>
                {Page == 'term' &&
                    <>
                        <View style={styles.body}>
                            <View style={styles.genCon}>

                                <Text style={styles.genHeadText}>
                                    General Terms & Conditions and Merchant Agreement
                                </Text>
                                <Text style={styles.text}>
                                    It is very important that you read and accept these Terms and
                                    Conditions before you activate and start using PayWay Mobile.
                                </Text>
                            </View>
                            <View style={styles.userAccept}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 7 }}>
                                    <BouncyCheckbox
                                        style={styles.bCheckBox}
                                        size={20}
                                        fillColor='#2477B2'
                                        unfillColor="#FFFFFF"
                                        // text="I have read and accept the"
                                        iconStyle={{ borderColor: '#cccccc' }}
                                        // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                                        onPress={(isChecked: boolean) => { }}
                                    />
                                    <Text style={styles.iHave}>I have read and accept the <Text style={styles.terms}>PayWay General Terms & Conditions.</Text></Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 7 }}>
                                    <BouncyCheckbox
                                        style={styles.bCheckBox}
                                        size={20}
                                        fillColor='#2477B2'
                                        unfillColor="#FFFFFF"
                                        // text="I have read and accept the"
                                        iconStyle={{ borderColor: '#cccccc' }}
                                        // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                                        onPress={(isChecked: boolean) => { }}
                                    />
                                    <Text style={styles.iHave}>I have read and accept the <Text style={styles.terms}>PayWay Mobile Merchant Agreement.</Text></Text>
                                </View>

                                <Text style={styles.line}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>

                                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 7 }}>
                                    <BouncyCheckbox
                                        style={styles.bCheckBox}
                                        size={20}
                                        fillColor='#2477B2'
                                        unfillColor="#FFFFFF"
                                        // text="I have read and accept the"
                                        iconStyle={{ borderColor: '#cccccc' }}
                                        // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                                        onPress={(isChecked: boolean) => { }}
                                    />
                                    <Text style={styles.iHave}>I agree to all of the above.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <TouchableOpacity
                                style={styles.conBtn}
                                onPress={() => this.setState({ Page: 'aba' })}
                            >
                                <Text style={styles.conBtnTxt}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
                {
                    Page == 'code' &&
                    <>
                        <View style={styles.reCode}>
                            <View style={styles.userInfo}>
                                <Icon name="arrow-left" style={styles.people} />
                                <Text style={styles.headerTxt}>Registration</Text>
                                <Text style={{ fontSize: 15, textAlign: 'center', marginVertical: 10 }}>Enter the code you received from your company's manager or bank officer</Text>
                            </View>
                            <View style={styles.userInput}>
                                <TextInput
                                    style={styles.codeInput}
                                    placeholder="Invite code"
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    style={styles.codeInput}
                                    placeholder="Your phone number"
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <TouchableOpacity
                                style={styles.conBtn}
                                onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
                            >
                                <Text style={styles.conBtnTxt}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
                {
                    Page == 'aba' &&
                    <>
                        <View style={styles.reCode}>
                            <View style={styles.userInfo}>
                                <Icon name="arrow-left" style={styles.people} />
                                <Text style={styles.headerTxt}>Registration</Text>
                                <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 10, lineHeight: 25 }}>Enter ABA account & Phone number registered at ABA Bank.</Text>
                            </View>
                            <View style={styles.userInput}>
                                <TextInput
                                    style={styles.codeInput}
                                    placeholder="ABA account number"
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    style={styles.codeInput}
                                    placeholder="Registered phone number"
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <TouchableOpacity
                                style={styles.conBtn}
                                onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
                            >
                                <Text style={styles.conBtnTxt}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    regisCon: {
        backgroundColor: '#2477B2',
        flexDirection: 'row',
        padding: '3%',
        paddingBottom: '4%',
        alignItems: 'center',
    },
    regisArrow: {
        color: 'white',
        fontSize: 23,
    },
    regisText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: '6%',
    },
    body: {
        width: '90%',
        marginHorizontal: '5%',
    },
    genCon: {
        width: '100%',
    },
    genHeadText: {
        color: '#3b3b3b',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 30,
        paddingVertical: 20,
    },
    text: {
        color: '#3b3b3b',
        fontSize: 16,
        lineHeight: 25,
    },
    bCon: {
        paddingTop: '32%',
        // paddingBottom: '1%',
    },
    bSubCon: {
        flexDirection: 'row',
    },
    btickUrl: {
        color: '#454545',
        fontWeight: '700',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    contiCon: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderColor: '#f0f0f0',
        borderTopWidth: 1,
    },
    contiButton: {
        backgroundColor: '#e0e0e0',
        margin: '3.5%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    contiText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },


    // Term and Accept
    userAccept: {
        marginTop: '70%'
    },
    bCheckBox: {
        flexWrap: 'wrap',
    },
    iHave: {
        fontSize: 15,
        lineHeight: 22,
        marginRight: '10%',
    },
    terms: {
        fontWeight: 'bold',
        fontSize: 16,
        textDecorationLine: 'underline'
    },
    line: {
        color: '#cccccc',
        fontSize: 18,
        marginVertical: 7,
    },
    conBtn: {
        backgroundColor: '#2477B2',
        width: '90%',
        marginHorizontal: '5%',
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 5,
    },
    conBtnTxt: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
    },


    //footer
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopWidth: 0.2,
        borderTopColor: '#cccccc',

    },





    //code Page
    reCode: {
        width: '90%',
        marginHorizontal: '5%',
    },
    userInfo: {
        alignItems: 'center',
        marginBottom: '20%'
    },
    people: {
        fontSize: 100,
    },
    headerTxt: {
        fontSize: 20,
        fontWeight: '500'
    },
    userInput: {

    },
    codeInput: {
        paddingVertical: 10,
        paddingLeft: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        fontSize: 15,
        marginVertical: 10,
    },
})