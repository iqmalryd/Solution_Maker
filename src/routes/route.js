import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Search from '../screens/Search'
const Stack = createStackNavigator()

const Route = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: "Choose Compound",
                    headerStyle: {
                        backgroundColor: "#24aae2"
                    },
                    headerTitleStyle: {
                        color: "#fff"
                    },
                    headerTintColor: "#fff"

                }}

            />
        </Stack.Navigator>
    )
}

export default Route