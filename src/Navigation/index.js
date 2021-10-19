import React from 'react'
import { View, Image, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { NAV_TYPES } from './navTypes'
import screenLogin from '../Containers/LoginContainer';
import screenHome from '../Containers/HomeContainer';
import RegisterFtCode from '../Screens/RegisterFtCode';
import ScreenQR from '../Screens/ScreenScanQR';
import ScreenTransaction from '../Screens/ScreenTransaction';
import ScreenTranDetails from '../Screens/tranDetails';
import ScreenReport from '../Screens/ScreenReport';
import Report from '../Screens/ScreenReport'

const IntroNavigator = createStackNavigator(
    {
        [NAV_TYPES.LOGIN]: {
            screen: screenLogin,
            navigationOptions: {
                headerShown: false
            },
        },

    },
    {
        initialRouteName: NAV_TYPES.LOGIN
    }
)


const HomeNavigation = createStackNavigator(
    {
        [NAV_TYPES.MAIN_HOME]: {
            screen: screenHome,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)
const ReportNavigation = createStackNavigator(
    {
        [NAV_TYPES.REPORT]: {
            screen: ScreenReport,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)

const TranSNavigation = createStackNavigator(
    {
        [NAV_TYPES.TRANS]: {
            screen: ScreenTransaction,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)
const TranDetailNavigation = createStackNavigator(
    {
        [NAV_TYPES.TRAN_DE]: {
            screen: ScreenTranDetails,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)
const ftCodeNavigation = createStackNavigator(
    {
        [NAV_TYPES.RE_CODE]: {
            screen: RegisterFtCode,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)
const QRNavigation = createStackNavigator(
    {
        [NAV_TYPES.QR]: {
            screen: ScreenQR,
            navigationOptions: {
                headerShown: false
            }
        },
    }
)

const CoreNavigation = createStackNavigator(
    {
        [NAV_TYPES.HOME]: {
            screen: HomeNavigation,
            navigationOptions: {
                headerShown: false
            }
        },
        [NAV_TYPES.RE_CODE]: {
            screen: ftCodeNavigation,
            navigationOptions: {
                headerShown: false
            }
        },
        [NAV_TYPES.QR]: {
            screen: QRNavigation,
            navigationOptions: {
                headerShown: false
            }
        },
        [NAV_TYPES.TRANS]: {
            screen: TranSNavigation,
            navigationOptions: {
                headerShown: false
            }
        },
        [NAV_TYPES.TRAN_DE]: {
            screen: TranDetailNavigation,
            navigationOptions: {
                headerShown: false
            }
        },
        [NAV_TYPES.REPORT]: {
            screen: ReportNavigation,
            navigationOptions: {
                headerShown: false
            }
        },
    },
    {
        initialRouteName: NAV_TYPES.HOME
    }
)
const MainNavigation = createStackNavigator(
    {
        [NAV_TYPES.INTRO]: {
            screen: IntroNavigator,
            navigationOptions: {
                headerShown: false
            }
        },
        [NAV_TYPES.CORE]: {
            screen: CoreNavigation,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    {
        initialRouteName: NAV_TYPES.INTRO
    }
)
export default createAppContainer(MainNavigation)