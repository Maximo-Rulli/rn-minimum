// React functionality imports
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens imports
import WorkersScreen from './screens/WorkersScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import ProposalsScreen from './screens/ProposalsScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserScreen from './screens/UserScreen'



// Create the Stack and Tab navigators
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()



function WorkersRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorkersCategories"
        component={CategoriesScreen}
        initialParams={{ type: 'trabajador' }}
        options={{title: 'Encontrar trabajador' }}
      />
      <Stack.Screen
        name="Workers"
        component={WorkersScreen}
        initialParams={{ category: null }}
        options={({ route }) => ({ title: `${route.params.category}`})}
      />
    </Stack.Navigator>
  )
}


function ProposalsRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProposalsCategories"
        component={CategoriesScreen}
        initialParams={{ type: 'propuesta' }}
        options={{title: 'Encontrar trabajos'}}
      />
      <Stack.Screen
        name="Proposals"
        component={ProposalsScreen}
        initialParams={{ category: null }}
        options={({ route }) => ({ title: `${route.params.category}`})}
      />
    </Stack.Navigator>
  )
}


function ProfileRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Perfil'}}
      />
      <Stack.Screen
        name="User"
        component={UserScreen}
        initialParams={{ IdUser: null, username: null }}
        options={({ route }) => ({ title: `${route.params.username}'s profile`})}
      />
    </Stack.Navigator>
  )
}


function TabNavigator({route}) {

  const {IdUser, username} = route.params
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProfileRoot"
        component={ProfileRoot}
        initialParams={{IdUser, username}}
        options={{title: 'Perfil', headerShown: false}}
      />
      <Tab.Screen
        name="WorkersRoot"
        component={WorkersRoot}
        options={{ title: 'Trabajadores', headerShown: false}}
      />
      <Tab.Screen
        name="ProposalsRoot"
        component={ProposalsRoot}
        options={{title: 'Ofertas de trabajo', headerShown: false}}
      />
    </Tab.Navigator>
  )
}



const DefaultStack = ({ username, IdUser }) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Logged"
        component={TabNavigator}
        initialParams={{IdUser, username}}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

// The splash screen is not hidden by default as the app is currently loading
const App = () => {
  return (
    <NavigationContainer>
      <DefaultStack username={'Dummy Username'} IdUser={'dummy1'}/>
    </NavigationContainer>
  )
}


export default App