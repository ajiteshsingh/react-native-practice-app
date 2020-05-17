import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Button, View } from 'react-native'

class ScreenComponentOne extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 25,
                borderColor: 'teal',
            }}>
                <Button title="Go to Screen 2" onPress={() => {
                    this.props.navigation.navigate('RouteNameTwo')
                }}></Button>
            </View>
        )
    }
}

class ScreenComponentTwo extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 25,
                borderColor: 'orange',
            }}>
                <Button title="Go to Screen 1" onPress={() => {
                    this.props.navigation.navigate('RouteNameOne')
                }}></Button>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    'RouteNameOne': ScreenComponentOne,
    'RouteNameTwo': ScreenComponentTwo
});

const AppNavigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppNavigation />
    }
}