import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {mTabBarOptions} from '../../res/styles/TabBarOptions';
import image from '../../res/require/Images';
import ArrayColors from '../../res/colors/ArrayColors';
import sizes from '../../res/sizes/sizes';
//Screens
import ScreensHome from '../screens/ScreensHome';
import ScreensProduct from '../screens/ScreensProduct';
import ScreenCart from '../screens/ScreenCart';
import ScreenNewspaper from '../screens/ScreenNewspaper';
import ScreenAccount from '../screens/ScreenAccount';

// const Tab = createBottomTabNavigator();
const bottomTab = createBottomTabNavigator();

const mTabBarOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#fff',
  tabBarStyle: {
    position: 'absolute',
    elevation: 0,
    backgroundColor: '#fff',
    height: sizes._80sdp,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
};

const AppContainer: FC = () => {
  const [index, setIndex] = React.useState(20);

  return (
    <bottomTab.Navigator screenOptions={mTabBarOptions}>
      <bottomTab.Screen
        name="HomeScreen"
        component={ScreensHome}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: sizes._3sdp,
              }}>
              <Image
                source={focused ? image.ic_home_active : image.ic_home}
                resizeMode="contain"
                style={{
                  width: sizes._24sdp,
                  height: sizes._24sdp,
                  tintColor: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                  fontWeight: '700',
                  fontSize: sizes._15sdp,
                }}>
                Trang ch???
              </Text>
            </View>
          ),
        }}
      />
      <bottomTab.Screen
        name="ScreensProduct"
        component={ScreensProduct}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: sizes._3sdp,
              }}>
              <Image
                source={focused ? image.ic_product_active : image.ic_product}
                resizeMode="contain"
                style={{
                  width: sizes._24sdp,
                  height: sizes._24sdp,

                  tintColor: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                  fontWeight: '700',
                  fontSize: sizes._15sdp,
                }}>
                S???n ph???m
              </Text>
            </View>
          ),
        }}
      />
      <bottomTab.Screen
        name="ScreenCart"
        component={ScreenCart}
        options={{
          tabBarBadge: index, //index gi??? h??ng
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: sizes._3sdp,
              }}>
              <Image
                source={focused ? image.ic_cart_active : image.ic_cart}
                resizeMode="contain"
                style={{
                  width: sizes._24sdp,
                  height: sizes._24sdp,
                  tintColor: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                  fontWeight: '700',
                  fontSize: sizes._15sdp,
                }}>
                Gi??? h??ng
              </Text>
            </View>
          ),
        }}
      />
      <bottomTab.Screen
        name="ScreenNewspaper"
        component={ScreenNewspaper}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: sizes._3sdp,
              }}>
              <Image
                source={focused ? image.ic_paper_active : image.ic_paper}
                resizeMode="contain"
                style={{
                  width: sizes._24sdp,
                  height: sizes._24sdp,
                  tintColor: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                  fontWeight: '700',
                  fontSize: sizes._15sdp,
                }}>
                X?? h???i
              </Text>
            </View>
          ),
        }}
      />
      <bottomTab.Screen
        name="ScreenAccount"
        component={ScreenAccount}
        options={{
          // headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: sizes._3sdp,
              }}>
              <Image
                source={focused ? image.ic_account_active : image.ic_account}
                resizeMode="contain"
                style={{
                  width: sizes._24sdp,
                  height: sizes._24sdp,
                  tintColor: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? ArrayColors._color_black_gray11
                    : ArrayColors._color_white_gray,
                  fontWeight: '700',
                  fontSize: sizes._15sdp,
                }}>
                T??i kho???n
              </Text>
            </View>
          ),
        }}
      />
    </bottomTab.Navigator>
  );
};

export default AppContainer;
const styles = StyleSheet.create({
  wrapperCustom: {},
});
