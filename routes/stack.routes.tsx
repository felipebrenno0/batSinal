import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home/Home';
import Form from '../screens/Form/Form';

const Stack = createNativeStackNavigator();


export default function StackRoutes() {

  return (

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
                      title: 'Bem vindo!', 
                      statusBarStyle:'dark',
                      headerStyle:{backgroundColor: '#bfc7d1'},
                      statusBarColor: '#bfc7d1'
                      
                    
                    }}
          
          
      
        />
        <Stack.Screen 
          name="Form"
          component={Form}
          options={{
                      title: 'Formulário', 
                      animation: 'ios', 
                      statusBarStyle:'dark',
                      headerStyle:{backgroundColor: '#bfc7d1'},
                      statusBarColor: '#bfc7d1'
                    
                    }}
        />
      </Stack.Navigator>
   
  )
};