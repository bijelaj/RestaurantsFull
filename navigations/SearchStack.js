import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../screens/Search'

const Stack= createStackNavigator()

export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Search"
            component = {Search}
            options={{
                title:"Buscar"
            }}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}
