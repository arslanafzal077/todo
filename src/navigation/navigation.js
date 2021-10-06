import React from 'react'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Splash from '../screens/Splash'
import Profile from '../screens/Profile'
import Add from '../screens/Add'
import Detail from '../screens/Detail'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <Stack.Screen
        name="Todo"
        options={{ headerShown: true }}
        component={Home}
      />
      <Stack.Screen
        name="Add"
        options={{ headerShown: true }}
        component={Add}
      />

      <Stack.Screen
        name="Detail"
        options={{ headerShown: true }}
        component={Detail}
      />
      
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-home'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <Stack.Screen
        name="Login"
        options={{ headerShown: true }}
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        options={{ headerShown: true }}
        component={Signup}
      />
    </Stack.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="Root"
          options={{ headerShown: false }}
          component={RootStack}
        />
        <Stack.Screen
          name="App"
          options={{ headerShown: false }}
          component={MyTabs}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
