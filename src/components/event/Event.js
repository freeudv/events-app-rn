import React, { Component } from "react"
import { View, Text, Image, Button, StyleSheet } from "react-native"
import { eventsList } from "../fixtures"

import ConfirmModal from "../common/ConfirmModal"
export default class Event extends Component {
  static defaultProps = {
    event: eventsList[0]
  }

  state = {
    confirmModal: false
  }

  handleDelete = () => {
    this.setState({
      confirmModal: true
    })
  }

  confirmDelete = () => this.setState({ confirmModal: false })
  cancelDelete = () => this.setState({ confirmModal: false })

  render() {
    const { event } = this.props

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.header]}>{event.title}</Text>
        <View>
          <Image
            source={{ uri: "http://lorempixel.com/200/100/technics/" }}
            style={styles.image}
          />
          <Text style={styles.text}>{event.when}</Text>
          <Text style={styles.text}>{event.where}</Text>
        </View>
        <Text style={styles.text}>{event.url}</Text>
        <View style={styles.button}>
          <Button
            onPress={this.handleDelete}
            title="Delete Event"
            color="#F55"
          />
        </View>
        <ConfirmModal
          visible={this.state.confirmModal}
          onConfirm={this.confirmDelete}
          onCancel={this.cancelDelete}
        >
          {`Are you sure you want to delete "${event.title}"`}
        </ConfirmModal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#F2F2F2",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 5
  },
  text: {
    width: "100%",
    height: 100,
    marginBottom: 20,
    textAlign: "center"
  },
  image: {
    width: 200,
    height: 100
  },
  button: {
    width: "100%",
    height: 100
  }
})
