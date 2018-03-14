import React, { Component } from "react"
import { View, StyleSheet } from "react-native"

export default class Card extends Component {
  render() {
    const { children, style } = this.props

    return <View style={[style, styles.container]}>{children}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#FDFDFD",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 5 //for android shadow
  }
})
