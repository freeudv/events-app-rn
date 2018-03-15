import React, { Component } from "react"
import { View, ActivityIndicator } from "react-native"
import { observer, inject } from "mobx-react"
import EventList from "../../components/event/EventList"

@inject("events")
@observer
class EventListScreen extends Component {
  static navigationOptions = {
    title: "Event List"
  }

  componentDidMount = () => {
    this.props.event.loadAll()
  }

  handleEventPress = uid => {
    this.props.navigation.navigate("event", { uid })
  }

  getLoader = () => (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )

  render() {
    const { events } = this.props
    if (events.loading) return this.getLoader()

    return (
      <EventList onEventPress={this.handleEventPress} events={events.list} />
    )
  }
}

export default EventListScreen
