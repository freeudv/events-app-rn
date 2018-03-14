import React, { Component } from "react"
import { Text, SectionList } from "react-native"
import groupBy from "lodash/groupBy"

import { eventsList } from "../../fixtures"

import EventCard from "./EventCard"

class EventList extends Component {
  static defaultProps = {
    events: eventsList
  }

  render() {
    const grouped = groupBy(this.props.events, event => event.title.charAt(0))
    const sections = Object.entries(grouped).map(([letter, list]) => ({
      title: `${letter}, ${list.length} events`,
      data: list.map(event => ({ key: event.uid, event }))
    }))

    return (
      <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({ item }) => <EventCard event={item.event} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F0F0F0",
    height: 40,
    lineHeight: 40,
    marginBottom: 5,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.3,
    elevation: 3
  }
})

export default EventList