import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createStackNavigator()

export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Welcome'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#101010'
                    },
                    headerTintColor: '#5e5856',
                    headerBackTitleVisible: false
                }}
                headerMode='float'>
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                    options={{title: "Strona główna", headerLeft: () => null}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
