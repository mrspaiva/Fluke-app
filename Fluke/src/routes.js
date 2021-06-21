import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import DataUsage from './pages/DataUsage';
import AdditionalPlans from './pages/AdditionalPlans';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#0ef500',
          inactiveTintColor: '#b5b5b5',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="DataUsage"
          component={DataUsage}
          options={{
            tabBarLabel: 'Histórico',
            tabBarIcon: ({color}) => (
              <Icon name="bar-chart-2" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AdditionalPlans"
          component={AdditionalPlans}
          options={{
            tabBarLabel: 'Pacotes',
            tabBarIcon: ({color}) => (
              <Icon name="plus-circle" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="FAQ"
          component={FAQ}
          options={{
            tabBarLabel: 'FAQ',
            tabBarIcon: ({color}) => (
              <Icon name="help-circle" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
