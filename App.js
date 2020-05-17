// import Example from './examples/0-switch'
// export default Example

import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View, FlatList, SectionList } from 'react-native';
import Constants from 'expo-constants'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import contacts, { compareNames } from './contacts';
import ContactsListScreen from './screens/contact-list-screen'
import AddContactScreen from './screens/add-contact-screen';
import ContactDetailsScreen from './screens/contact-details-screen'
import LoginScreen from './screens/login-screen'
import SettingsScreen from './screens/settings-screen'
import { fetchUsers } from './api'

const ContactsTab = createStackNavigator({
  'ContactsList': ContactsListScreen,
  'AddContact': AddContactScreen,
  'ContactDetails': ContactDetailsScreen
}, {
  initialRouteName: 'ContactsList'
});

const MainNavigator = createBottomTabNavigator({
  Contacts: ContactsTab,
  Settings: SettingsScreen,
})

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login: LoginScreen
}, {
  initialRouteName: 'Login'
})

const AppNavigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    contacts: null
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const results = await fetchUsers();
    this.setState({ contacts: results });
  }

  addContact = newContact => {
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact] }))
  }

  // toggleContacts = () => {
  //   this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  // }

  // toggleForm = () => {
  //   this.setState(prevState => ({ showForm: !prevState.showForm }))
  // }

  // sort = () => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts].sort(compareNames)
  //   }))
  // }

  render() {
    return <AppNavigation screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />
    // if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />
    // else {
    //   return (
    //     <View style={styles.container}>
    //       <Button title="toggle contacts" onPress={this.toggleContacts} />
    //       <Button title="Add Contact" onPress={this.toggleForm} />
    //       {this.state.showContacts && (
    //         <ContactsList contacts={this.state.contacts} />
    //       )
    //       }
    //     </View>
    //   )
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
