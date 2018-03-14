import firebase from "firebase"
import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native"
import { observer, inject } from "mobx-react"
import userStore from "../../stores/userStore"

@observer
class SignIn extends Component {
  // state = {
  //   email: "",
  //   password: ""
  // }

  // setEmail = email => {
  //   this.setState({
  //     email
  //   })
  // }

  // setPassword = password => {
  //   this.setState({
  //     password
  //   })
  // }

  setPassword = password => (userStore.password = password)
  setEmail = email => (userStore.email = email)

  signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userStore.email, userStore.password)
      .then(userEntity => {
        console.log("---", userEntity)
        userStore.user = userEntity
        this.props.navigation.navigate("eventList")
      })
    console.log("---", "sign in")
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Please Sign In</Text>
        <Text>Email:</Text>
        <TextInput
          value={userStore.email}
          onChangeText={this.setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text>Password:</Text>
        <TextInput
          value={userStore.password}
          onChangeText={this.setPassword}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity onPress={this.signIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  header: {
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    ...Platform.select({
      ios: {
        borderBottomColor: "#000",
        borderBottomWidth: 1
      },
      android: {}
    })
  }
}

export default SignIn
