import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import WalletScreen from '../screens/WalletScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import OtherScreen from '../screens/OtherScreen';
import Icon from '@react-native-vector-icons/fontawesome5';
import {Colors, Size} from '../themes/themes';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.darkBlue2,
        tabBarInactiveTintColor: Colors.darkBlue3,
        tabBarLabelStyle: {
          fontSize: Size.size_13,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animation: 'default',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} iconStyle="solid" />
          ),
        }}
      />
      <Tab.Screen
        name="Markets"
        component={MarketScreen}
        options={{
          animation: 'default',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="chart-line"
              color={color}
              size={size}
              iconStyle="solid"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallets"
        component={WalletScreen}
        options={{
          animation: 'default',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="wallet" color={color} size={size} iconStyle="solid" />
          ),
        }}
      />
      <Tab.Screen
        name="Porfolio"
        component={PortfolioScreen}
        options={{
          animation: 'default',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="suitcase" color={color} size={size} iconStyle="solid" />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={OtherScreen}
        options={{
          animation: 'default',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="bars" color={color} size={size} iconStyle="solid" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
