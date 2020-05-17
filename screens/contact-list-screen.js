

import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View, FlatList, SectionList } from 'react-native';
import Constants from 'expo-constants'
import SectionListContacts from './SectionListContacts'

export default class ContactsListScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Contacts',
        headerRight: <Button title="Add" onPress={() => {
            navigation.navigate('AddContact');
        }} />
    });
    state = {
        showContacts: true
    }

    toggleContacts = () => {
        this.setState(prevState => ({ showContacts: !prevState.showContacts }))
    }

    showForm = () => {
        this.props.navigation.navigate('AddContact')
    }

    render() {
        // return (
        //     <View />
        // )
        // console.log(SectionListContacts)
        return (
            <View style={styles.container}>
                {/* <Button title="toggle contacts" onPress={this.toggleContacts} />
                <Button title="Add Contact" onPress={this.showForm} /> */}
                {this.state.showContacts && (
                    <SectionListContacts
                        onSelectContact={(contact) => {
                            this.props.navigation.navigate('ContactDetails', {
                                phone: contact.phone,
                                name: contact.name
                            });
                        }}
                        contacts={this.props.screenProps.contacts} />
                )
                }
            </View>
        )
    }

}

// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';

// import contacts, { compareNames } from './contacts'
// import ContactsListScreen from './contacts-list'
// import AddContactScreen from './screens/add-contact-screen';


// export default class ContactsListScreen extends React.Component {
//   state = {
//     showContacts: true,
//     contacts: contacts
//   }

//   addContact = newContact => {
//     this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact] }))
//   }

//   toggleContacts = () => {
//     this.setState(prevState => ({ showContacts: !prevState.showContacts }))
//   }

//   toggleForm = () => {
//     this.setState(prevState => ({ showForm: !prevState.showForm }))
//   }

//   sort = () => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts].sort(compareNames)
//     }))
//   }

//   render() {
//     if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />
//     else {
//       return (
//         <View style={styles.container}>
//           <Button title="toggle contacts" onPress={this.toggleContacts} />
//           <Button title="Add Contact" onPress={this.toggleForm} />
//           {this.state.showContacts && (
//             <ContactsList contacts={this.state.contacts} />
//           )
//           }
//         </View>
//       )
//     }
//   }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});
