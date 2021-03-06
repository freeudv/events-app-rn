import React, { Component } from "react"
//import { View, Text } from "react-native"
import Event from "../../components/event/Event"

class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Event ${navigation.state.params.uid}`
  })

  render() {
    return <Event />
  }
}

export default EventScreen
