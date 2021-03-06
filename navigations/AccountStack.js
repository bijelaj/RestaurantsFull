import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '../screens/Restaurants'
import Account from '../screens/Account'

const Stack= createStackNavigator()

export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="account"
            component = {Account}
            options={{
                title:"Cuenta"
            }}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}
