import React from 'react';
import { Button, View, StyleSheet, TextInput, Text } from 'react-native';
import { login } from '../api'

export default class LoginScreen extends React.Component {

    state = {
        username: '',
        password: '',
        error: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{this.state.error}</Text>
                <TextInput autoCapitalize="none" placeholder="username" value={this.state.username} onChangeText={this.handleUsernameUpdate} />
                <TextInput secureTextEntry={true} placeholder="password" value={this.state.password} onChangeText={this.handlePasswordUpdate} />
                <Button title="Press to Log in" onPress={this._login}></Button>
            </View>
        )
    }

    handleUsernameUpdate = username => {
        this.setState({ username });
    }

    handlePasswordUpdate = password => {
        this.setState({ password });
    }

    _login = async () => {
        try {
            const success = await login(this.state.username, this.state.password);
            this.props.navigation.navigate('Main');
        } catch (error) {
            const e = error.message;
            this.setState({ error: e });
        }
        //navigate to main navigator
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    },
    error: {
        textAlign: 'center',
        color: 'red'
    }
})