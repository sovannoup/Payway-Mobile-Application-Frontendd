import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Image, Button } from 'react-native';
import NavigationService from '../Service/navigationService';
import { NAV_TYPES } from '../Navigation/navTypes';
import { State } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwipeablePanel } from 'rn-swipeable-panel';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
export default class Login extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            hasAcc: true,
            loginActive: false,
            registerActive: false,
            languageActive: false,
            loginPanelHeight: '51%',
            languagePanelHeight: '25%',
            registerPanelHeight: '40%'
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

    }

    changeToRegisterPanel = () => {
        this.setState({ loginPanelHeight: '41%', hasAcc: false })
    }

    closePanel = () => {
        this.setState({ loginActive: false, registerActive: false, loginPanelHeight: '51%', hasAcc: true, languageActive: false })
    }

    render() {

        const { hasAcc, loginActive, registerActive, loginPanelHeight, registerPanelHeight, languageActive, languagePanelHeight } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.background}
                    source={require('./../Assets/images/background.png')}
                />
                <View style={styles.setting}>
                    <TouchableOpacity
                        style={styles.contact}
                        onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
                    >
                        <Text style={styles.settingBtn}>Hi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.language}
                        onPress={() => this.setState({ languageActive: true })}
                    >
                        <Text style={styles.settingBtn}>Ho</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginBtnPanel}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => this.setState({ loginActive: true })}
                    >
                        <Text style={styles.loginBtnTxt}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.newUser}
                        onPress={() => this.setState({ registerActive: true })}
                    >
                        <Text style={styles.newUserBtnTxt}>New User</Text>
                    </TouchableOpacity>
                </View>

                <SwipeablePanel
                    closeOnTouchOutside={true}
                    isActive={loginActive}
                    onClose={() => this.closePanel()}
                    onlyLarge={true}
                    fullWidth={true}
                    style={{ height: loginPanelHeight }}
                >
                    <View style={styles.accPanel}>
                        <Text style={styles.accSignInTxt}>Sign In</Text>
                        {hasAcc ?
                            <View style={styles.hasAccPanel}>
                                <View style={styles.accPf}>
                                    <Image
                                        style={styles.accPfImg}
                                        source={require('./../Assets/images/background.png')}
                                    />
                                    <Text style={styles.userName}>Sovan Noup</Text>
                                </View>
                                <TextInput
                                    style={styles.accInput}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                />
                                <TouchableOpacity
                                    onPress={() => NavigationService.navigate(NAV_TYPES.TRANS)}
                                >
                                    <Text style={styles.showHintTxt}>Show Hint</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.changeToRegisterPanel()}
                                >
                                    <Text style={styles.diffAccTxt}>Sign-In As Different User</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <TextInput
                                    style={styles.accInput}
                                    placeholder="Username"
                                />
                                <TextInput
                                    style={styles.accInput}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                />
                                <TouchableOpacity
                                    style={styles.shorHint}
                                    onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
                                >
                                    <Text style={styles.showHintTxt}>Forgot Password</Text>
                                </TouchableOpacity>
                            </View>}
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
                        >
                            <Text style={styles.loginBtnTxt}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </SwipeablePanel>

                <SwipeablePanel
                    closeOnTouchOutside={true}
                    isActive={registerActive}
                    onClose={() => this.closePanel()}
                    onlyLarge={true}
                    fullWidth={true}
                    style={{ height: registerPanelHeight }}
                >
                    <View style={styles.accPanel}>
                        <Text style={styles.registerHeaderTxt}>New User</Text>
                        <TouchableOpacity
                            style={styles.register}
                            onPress={() => NavigationService.navigate(NAV_TYPES.RE_CODE, { page: 'term' })}
                        >
                            <Text style={styles.registerBtnTxt}>Register with ABA Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.register}
                            onPress={() => NavigationService.navigate(NAV_TYPES.RE_CODE, { page: 'code' })}
                        >
                            <Text style={styles.registerBtnTxt}>Register with Invite Code</Text>
                        </TouchableOpacity>
                        <Text style={styles.noAccTxt}>---------- Don't have ABA account? ----------</Text>
                        <Text style={styles.instantBank}>Open New ABA Instant Account</Text>
                    </View>
                </SwipeablePanel>
                <SwipeablePanel
                    closeOnTouchOutside={true}
                    isActive={languageActive}
                    onClose={() => this.closePanel()}
                    onlyLarge={true}
                    fullWidth={true}
                    style={{ height: languagePanelHeight }}
                >
                    <View style={styles.languagePanel}>
                        <Text style={{ fontSize: 16, fontWeight: '700', paddingVertical: 10 }}>Choose Language</Text>
                        <View style={styles.eachLang}>
                            <Text style={styles.lanWord}>English</Text>
                            <BouncyCheckbox
                                style={styles.bCheckBox}
                                size={20}
                                isChecked={true}
                                fillColor='#2477B2'
                                unfillColor="#FFFFFF"
                                // text="I have read and accept the"
                                iconStyle={{ borderColor: '#cccccc' }}
                            // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                            />
                        </View>
                        <View style={styles.eachLang}>
                            <Text style={styles.lanWord}>ភាសាខ្មែរ</Text>
                            <BouncyCheckbox
                                style={styles.bCheckBox}
                                size={20}
                                fillColor='#2477B2'
                                unfillColor="#FFFFFF"
                                // text="I have read and accept the"
                                iconStyle={{ borderColor: '#cccccc' }}
                            // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                            />
                        </View>
                    </View>
                </SwipeablePanel>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },


    container: {
        flex: 1,
    },

    // BackgroundImage
    background: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },


    //Setting Top Right
    setting: {
        position: 'absolute',
        right: 0,
        top: 25,
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(192, 192, 192, 0.3)',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    settingBtn: {
        paddingHorizontal: 15,
        paddingVertical: 2,
        color: 'white'
    },
    contact: {
        borderRightWidth: 0.6,
    },

    // Login && Register Button
    loginBtnPanel: {
        width: '85%',
        marginHorizontal: '7.5%',
        position: 'absolute',
        bottom: 30,
    },
    loginBtnTxt: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
    },
    newUserBtnTxt: {
        textAlign: 'center',
        fontSize: 15,
        color: '#2477B2',
    },
    signIn: {
        backgroundColor: '#2477B2',
        paddingVertical: 15,
        marginVertical: 15,
        marginTop: 20,
        borderRadius: 5,
    },
    newUser: {
        backgroundColor: 'white',
        paddingVertical: 15,
        marginBottom: 15,
        borderRadius: 5,
    },


    //Login Panel
    accPanel: {
        width: '95%',
        marginHorizontal: '2.5%',
    },
    accSignInTxt: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    accPf: {
        alignItems: 'center'
    },
    accPfImg: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
    },
    userName: {
        fontSize: 20,
        marginVertical: 10,
    },
    accInput: {
        paddingVertical: 10,
        paddingLeft: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        fontSize: 15,
        marginVertical: 15,
    },
    showHintTxt: {
        fontSize: 15,
        color: '#2477B2',
        textAlign: 'right',
        marginBottom: 15,
        marginRight: 5,
    },
    diffAccTxt: {
        fontSize: 15,
        color: '#2477B2',
        textAlign: 'center',
        marginVertical: 20,
    },


    // Register Panel
    registerHeaderTxt: {
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 30,
    },
    register: {
        backgroundColor: 'white',
        paddingVertical: 13,
        marginBottom: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2477B2',
    },
    registerBtnTxt: {
        textAlign: 'center',
        fontSize: 15,
        color: '#2477B2',
    },
    noAccTxt: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'center',
        marginTop: 10,
    },
    instantBank: {
        fontSize: 15,
        color: '#2477B2',
        textAlign: 'center',
        marginTop: 20,
    },



    // LanguagePanel
    languagePanel: {
        width: '90%',
        marginHorizontal: '5%',
    },
    eachLang: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between'
    },
    lanWord: {
        fontSize: 15,
        color: '#2477B2',
    }
})