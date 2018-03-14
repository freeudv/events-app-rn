import React from "react"
import { View, Image } from "react-native"
//import SignIn from "./auth/SignIn"
//import Event from "./event/Event"
import EventList from "./event/EventList"

function Root() {
  return (
    <View>
      {/* <SignIn /> */}
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.jpg")}
        resizeMode={Image.resizeMode.contain}
      />
      {/*  <Event /> */}
      <EventList />
    </View>
  )
}

export default Root

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 30,
    marginTop: 15
  }
})
