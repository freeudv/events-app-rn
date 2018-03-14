import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import Card from "../common/Card"

class EventCard extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <Image
          source={{ uri: "http://lorempixel.com/100/50/technics/" }}
          style={styles.image}
        />
        <View style={styles.descriptoin}>
          <Text>{this.props.event.title}</Text>
          <Text>{this.props.event.url}</Text>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  descriptoin: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  image: {
    width: 100,
    height: 50
  }
})

export default EventCard
