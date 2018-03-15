import "./src/initFB"
import React from "react"
import { Provider, observer } from "mobx"
import { addNavigationHelpers } from "react-navigation"

import stores from "./src/stores"
//import { StyleSheet, View } from "react-native"

//import Root from "./src/components/Root"
import AppNavigator from "./src/AppNavigator"

@observer
export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator
          navigation={addNavigationHelpers(stores.navigation.config)}
        />
      </Provider>
    )
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
