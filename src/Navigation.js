import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home',
  },
  Wallet: {
    name: 'credit-card',
  },
  Notifications: {
    name: 'notifications',
  },
  Settings: {
    name: 'settings',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={({ route, navigation, focused }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const { name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}
