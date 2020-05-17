import React from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    }
})

export default class AddContactForm extends React.Component {
    static propTypes = {
        addContact: PropTypes.func
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm();
        }
    }

    validateForm = () => {
        const names = this.state.name.split(' ')
        if (+this.state.phone >= 0 && this.state.phone.length === 10 && names.length >= 2 && names[0] && names[1]) {
            return this.setState({ isFormValid: true });
        } else {
            return this.setState({ isFormValid: false });
        }
    }

    // getHandler = key => val => {
    //     this.setState({ [key]: val })
    // }

    handleNameChange = name => {
        this.setState({ name })
    }

    handlePhoneChange = phone => {
        if (+phone >= 0 && phone.length <= 10) {
            this.setState({ phone })
        }
    }

    handleSubmit = () => {

        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput onChangeText={this.handleNameChange} style={styles.input} value={this.state.name} />
                <TextInput onChangeText={this.handlePhoneChange} style={styles.input} value={this.state.phone} keyboardType="numeric" />
                <Button title="Add Content" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
            </KeyboardAvoidingView>
        )
    }
}