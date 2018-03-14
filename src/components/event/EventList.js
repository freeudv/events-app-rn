import React, { Component } from "react"
import { View, ScrollView } from "react-native"
import { eventsList } from "../../fixtures"

import EventCard from "./EventCard"

class EventList extends Component {
  static defaultProps = {
    events: eventsList
  }

  render() {
    return (
      <ScrollView>
        <View>
          {this.props.events.map(event => (
            <EventCard key={event.uid} event={event} />
          ))}
        </View>
      </ScrollView>
    )
  }
}

export default EventList
