import React, { Component, createRef } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TextInput, SafeAreaView } from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import Icon from 'react-native-vector-icons/Feather';
import { SwipeablePanel } from 'rn-swipeable-panel';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { color } from 'react-native-reanimated'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
const sheetRef = createRef(null);
export default class Transaction extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            dataActive: false,
            CustomPd: false,
            defaultActive: false,

            box1: false,
            box2: false
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

    }

    renderContent = () => (
        <View style={styles.secondBox}>
            <View style={styles.searchHeader}>
                <Text style={{ position: 'absolute', left: 20, top: 15, zIndex: 1, color: 'gray' }}>HH</Text>
                <TextInput
                    style={styles.searchBox}
                    placeholder="Search transaction"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                onPress={() => NavigationService.navigate(NAV_TYPES.TRAN_DE)}
                style={styles.eachTran}>
                <View style={styles.eachTranLeft}>
                    <Image
                        style={styles.logo}
                        source={require('./../Assets/images/bg.png')}
                    />
                    <View>
                        <Text style={{ fontSize: 20 }}>123456782345673</Text>
                        <Text style={{ fontSize: 13, color: 'gray', marginTop: 2, }}>15/8/2020 05:23:03 PM</Text>
                    </View>
                </View>
                <View style={styles.eachTranRight}>
                    <Text style={{ fontSize: 15, color: 'green', fontWeight: '700', marginTop: '15%' }} > +99.00 USD</Text>
                </View>
            </TouchableOpacity>

        </View>
    );

    render() {
        const { heightFirstBox, dataActive, CustomPd, defaultActive, box1, box2 } = this.state
        return (
            <SafeAreaView style={styles.conatiner}>
                <View style={styles.firstBox}>
                    <View style={styles.header}>
                        <View style={styles.headerRow1}>
                            <TouchableOpacity
                                onPress={() => NavigationService.goBack()}
                            >
                                <Icon name="arrow-left" style={{ fontSize: 25, color: 'white', marginRight: 10, }} /></TouchableOpacity>
                            <Text style={{ fontSize: 20, color: 'white' }}>Transaction History</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.headerRow2}
                            onPress={() => NavigationService.navigate(NAV_TYPES.REPORT)}
                        >
                            <Text style={{ fontSize: 15, color: 'white' }}>hi </Text>
                            <Text style={{ fontSize: 14, color: 'white' }}>Report</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.setState({ dataActive: true })}
                        style={styles.dropdown}
                    >
                        <View style={styles.dropdownInner}>
                            <Text style={{ fontSize: 15, color: 'white' }}>Last 7 days</Text>
                            <Text style={{ color: 'white', }}> H</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.transactionBox}>



                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ box1: !box1, box2: false })
                                if (box1) {
                                    sheetRef.current.snapTo(1)
                                } else {
                                    sheetRef.current.snapTo(2)
                                }
                            }}
                            style={styles.tranBtn}>
                            <View style={styles.netSaleFirst}>
                                <View style={styles.netSaleLeft}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>$1.00</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 15, color: 'white', marginRight: 5 }}>Net Sales</Text>
                                        <Text style={{ fontSize: 15, color: 'white' }}>H</Text>
                                    </View>
                                </View>
                                <View style={styles.netSaleRight}>
                                    <Text>IconBah</Text>
                                </View>
                            </View>

                            {box1 &&
                                <View style={styles.netSaleSecond}>
                                    <View style={{ borderTopWidth: 1, borderTopColor: '#88bfe7' }} />
                                    <View style={styles.netSaleDetail}>
                                        <View style={styles.leftSide}>
                                            <Text style={{ fontSize: 15, color: 'white' }}>Total Sale</Text>
                                            <Text style={{ fontSize: 15, color: 'white', marginTop: 5 }}>Total Refund</Text>
                                        </View>
                                        <View style={styles.rightSide}>
                                            <Text style={{ fontSize: 15, color: 'white' }}>$1.00</Text>
                                            <Text style={{ fontSize: 15, color: 'white', marginTop: 5 }}>$0.00</Text>
                                        </View>
                                    </View>
                                </View>
                            }
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ box1: false, box2: !box2 })
                                if (box2) {
                                    sheetRef.current.snapTo(1)
                                } else {
                                    sheetRef.current.snapTo(2)
                                }
                            }}
                            style={styles.tranBtn}>
                            <View style={styles.totalTranFirst}>
                                <View style={styles.netSaleLeft}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>1</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 15, color: 'white', marginRight: 5 }}>Total Transactions</Text>
                                        <Text style={{ fontSize: 15, color: 'white' }}>H</Text>
                                    </View>
                                </View>
                                <View style={styles.netSaleRight}>
                                    <Text>IconBah</Text>
                                </View>
                            </View>
                            {box2 &&
                                <View style={styles.totalTranSecond}>
                                    <View style={{ borderTopWidth: 1, borderTopColor: '#88bfe7' }} />
                                    <View style={styles.netSaleDetail}>
                                        <View style={styles.leftSide}>
                                            <Text style={{ fontSize: 15, color: 'white' }}>Sales Transactions</Text>
                                            <Text style={{ fontSize: 15, color: 'white', marginTop: 5 }}>Refund Transactions</Text>
                                        </View>
                                        <View style={styles.rightSide}>
                                            <Text style={{ fontSize: 15, color: 'white' }}>1</Text>
                                            <Text style={{ fontSize: 15, color: 'white', marginTop: 5 }}>0</Text>
                                        </View>
                                    </View>
                                </View>
                            }
                        </TouchableOpacity>


                    </View>
                </View>




                <BottomSheet
                    ref={sheetRef}
                    snapPoints={[640, 430, 370]}
                    initialSnap={1}
                    enabledHeaderGestureInteraction={false}
                    renderContent={this.renderContent}
                />
                {/* <View style={styles.bottomSheet}>
                    <View style={styles.secondBox}>
                        <View style={{ width: '100%' }}>
                            <Text style={{ position: 'absolute', left: 20, top: 15, zIndex: 1, color: 'gray' }}>HH</Text>
                            <TextInput
                                style={styles.searchBox}
                                placeholder="Search transaction"
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate(NAV_TYPES.TRAN_DE)}
                            style={styles.eachTran}>
                            <View style={styles.eachTranLeft}>
                                <Image
                                    style={styles.logo}
                                    source={require('./../Assets/images/bg.png')}
                                />
                                <View>
                                    <Text style={{ fontSize: 20 }}>123456782345673</Text>
                                    <Text style={{ fontSize: 13, color: 'gray', marginTop: 2, }}>15/8/2020 05:23:03 PM</Text>
                                </View>
                            </View>
                            <View style={styles.eachTranRight}>
                                <Text style={{ fontSize: 15, color: 'green', fontWeight: '700', marginTop: '15%' }} > +99.00 USD</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> */}



                <SwipeablePanel
                    closeOnTouchOutside={true}
                    isActive={dataActive}
                    onClose={() => this.setState({ dataActive: false })}
                    onlyLarge={true}
                    fullWidth={true}
                    style={{ height: '45%' }}
                >
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={{ fontSize: 17, fontWeight: '700', }}>Transaction Period</Text>
                            <TouchableOpacity><Text style={{ fontSize: 15, color: '#2477B2' }}>Edit Default</Text></TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.setState({ dateActive: false })}
                            style={styles.periodBtn}>
                            <Text style={{ fontSize: 17, color: '#2477B2' }}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ dateActive: false })}
                            style={styles.periodBtn}>
                            <Text style={{ fontSize: 17, color: '#2477B2' }}>Last 7 Days</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ dateActive: false })}
                            style={styles.periodBtn}>
                            <Text style={{ fontSize: 17, color: '#2477B2' }}>Last 30 Days</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ dataActive: false, CustomPd: true })}
                            style={styles.periodBtn}>
                            <Text style={{ fontSize: 17, color: '#2477B2' }}>Custom Period</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ dataActive: false })}
                            style={styles.periodBtn}>
                            <Text style={{ fontSize: 17, color: '#2477B2' }}>All</Text>
                        </TouchableOpacity>
                    </View>
                </SwipeablePanel>


                {/* Default is true */}
                <SwipeablePanel
                    closeOnTouchOutside={true}
                    isActive={defaultActive}
                    onClose={() => this.setState({ defaultActive: false })}
                    onlyLarge={true}
                    fullWidth={true}
                    style={{ height: '38%' }}
                >
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={{ fontSize: 17, fontWeight: '700', }}>Select Default Period</Text>
                            <TouchableOpacity><Text style={{ fontSize: 15, color: '#2477B2' }}>Done</Text></TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.setState({ defaultActive: false })}
                            style={styles.periodBtn}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    style={styles.bCheckBox}
                                    size={20}
                                    isChecked={false}
                                    fillColor='#2477B2'
                                    unfillColor="#FFFFFF"
                                    // text="I have read and accept the"
                                    iconStyle={{ borderColor: '#cccccc' }}
                                    // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                                    onPress={(isChecked: boolean) => { }}
                                />
                                <Text style={{ fontSize: 17, color: '#2477B2' }}>Today</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ defaultActive: false })}
                            style={styles.periodBtn}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    style={styles.bCheckBox}
                                    size={20}
                                    isChecked={false}
                                    fillColor='#2477B2'
                                    unfillColor="#FFFFFF"
                                    // text="I have read and accept the"
                                    iconStyle={{ borderColor: '#cccccc' }}
                                    // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                                    onPress={(isChecked: boolean) => { }}
                                />
                                <Text style={{ fontSize: 17, color: '#2477B2' }}>Last 7 Days</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ defaultActive: false })}
                            style={styles.periodBtn}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    style={styles.bCheckBox}
                                    size={20}
                                    isChecked={false}
                                    fillColor='#2477B2'
                                    unfillColor="#FFFFFF"
                                    // text="I have read and accept the"
                                    iconStyle={{ borderColor: '#cccccc' }}
                                    // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                                    onPress={(isChecked: boolean) => { }}
                                />
                                <Text style={{ fontSize: 17, color: '#2477B2' }}>Last 30 Days</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ defaultActive: false })}
                            style={styles.periodBtn}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    style={styles.bCheckBox}
                                    size={20}
                                    isChecked={false}
                                    fillColor='#2477B2'
                                    unfillColor="#FFFFFF"
                                    // text="I have read and accept the"
                                    iconStyle={{ borderColor: '#cccccc' }}
                                    // textStyle={{fontFamily: 'JosefinSans-Regular', fontSize: 16}}
                                    onPress={(isChecked: boolean) => { }}
                                />
                                <Text style={{ fontSize: 17, color: '#2477B2' }}>All</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SwipeablePanel>


                {/* Custom Period */}
                {CustomPd &&
                    <View style={styles.cmContainer}>
                        <View style={styles.cmBox}>
                            <Text style={{ fontSize: 20, paddingBottom: 15, }}>Custom Period</Text>
                            <View style={{ marginVertical: 15, }}>
                                <TouchableOpacity
                                    style={styles.periodInput}
                                    onPress={() => this.setState({ dateActive: true })}
                                >
                                    <Text style={{ fontSize: 16, color: 'gray' }}>Select date from</Text>
                                </TouchableOpacity>
                                <Icon name="arrow-left" style={{ fontSize: 25, position: 'absolute', right: 15, top: 15, color: 'gray' }} />
                            </View>
                            <View style={{ marginVertical: 10, }}>
                                <TouchableOpacity
                                    style={styles.periodInput}
                                    onPress={() => this.setState({ dateActive: true })}
                                >
                                    <Text style={{ fontSize: 16, color: 'gray' }}>Select date to</Text>
                                </TouchableOpacity>
                                <Icon name="arrow-left" style={{ fontSize: 25, position: 'absolute', right: 15, top: 15, color: 'gray' }} />
                            </View>
                            <View style={styles.footer}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ CustomPd: false })}
                                ><Text style={{ fontSize: 14, fontWeight: '700', color: '#2477B2' }}>CANCEL</Text></TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({ CustomPd: false })}
                                ><Text style={{ fontSize: 14, fontWeight: '700', marginRight: 10, color: '#2477B2', marginLeft: 20, }}>OK</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    // Container
    conatiner: {
        flex: 1,
    },

    //First Box Header
    firstBox: {
        height: '100%',
        paddingHorizontal: '5%',
        backgroundColor: '#2477B2',
    },

    //header
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    headerRow1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerRow2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#489dda',
    },

    //last .... days
    dropdown: {
        marginVertical: 30,
    },
    dropdownInner: {
        display: 'flex',
        flexDirection: 'row',
    },

    //Transaction Box
    transactionBox: {
        display: 'flex',
        flexDirection: 'column',
    },
    tranBtn: {
        backgroundColor: '#489dda',
        borderRadius: 5,
        padding: 15,
        marginVertical: 4,
    },

    //default UI
    netSaleFirst: {
        width: '100%',
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    netSaleLeft: {
        display: 'flex',
        flexDirection: 'column',
    },

    //details Trans Box
    netSaleSecond: {
        // display: 'none',
    },
    netSaleDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },



    //Total Transactions 
    totalTranSecond: {

    },
    totalTranFirst: {
        width: '100%',
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    //Each Transaction Footer

    bottomSheet: {
        position: 'absolute',
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: '100%',
        top: '46%',
        height: '54%'
    },
    secondBox: {
        paddingHorizontal: '5%',
        paddingVertical: 15,
        backgroundColor: 'white',
        height: '100%'
    },
    searchBox: {
        borderRadius: 20,
        backgroundColor: '#e4e4e4',
        padding: 0,
        paddingVertical: 10,
        paddingLeft: '15%',
    },
    eachTran: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 25,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e4',
        justifyContent: 'space-between',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 10,
    },
    eachTranLeft: {
        display: 'flex',
        flexDirection: 'row',
    },


    //Transaction Period
    header: {
        marginTop: 10,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        width: '90%',
        marginHorizontal: '5%',
    },
    periodBtn: {
        paddingVertical: 15,
    },


    //Custom Period 

    cmContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(20, 20, 20, 0.4)',
    },
    cmBox: {
        width: '90%',
        marginHorizontal: '5%',
        height: '40%',
        marginVertical: '55%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 25,
    },
    periodInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        paddingLeft: 15,
        paddingRight: 30,
        paddingVertical: 18,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '10%',
    },



    //Button Sheet Each Tran

    searchHeader: {
        width: '100%',
    }
})