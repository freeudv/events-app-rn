import React from "react"
import { StyleSheet, View } from "react-native"

//import Root from "./src/components/Root"
import AppNavigator from "./src/AppNavigator"

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Root />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//     // alignItems: "center",
//     // justifyContent: "center"
//   }
// })
