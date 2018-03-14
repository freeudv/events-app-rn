import React, { Component } from "react"
//import { View, Text } from "react-native"
import EventList from "../../components/event/EventList"

class EventListScreen extends Component {
  static navigationOptions = {
    title: "Event List"
  }

  handleEventPress = uid => {
    this.props.navigation.navigate("event", { uid })
  }

  render() {
    return <EventList onEventPress={this.handleEventPress} />
  }
}

export default EventListScreen
