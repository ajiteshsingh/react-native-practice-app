import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Settings screen</Text>
                {/* <Button title="Press to Log in" onPress={this._login}></Button> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    }
})