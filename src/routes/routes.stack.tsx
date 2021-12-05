import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from '../screens/list'
import RegisterScreen from '../screens/register'

const AppStack = createStackNavigator()

const AppRoutes: React.FC = () => {
  return(
    <AppStack.Navigator>
      <AppStack.Screen
        name="List"
        component={ListScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Lista de participantes'
        }}
      />
      <AppStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Cadastro'
        }}
      />
    </AppStack.Navigator>
  )
}

export default AppRoutes