import React from "react"
import { View } from "react-native"
import SignIn from "./auth/SignIn"
import Event from "./event/Event"

function Root() {
  return (
    <View>
      {/* <SignIn /> */}
      <Event />
    </View>
  )
}

export default Root
