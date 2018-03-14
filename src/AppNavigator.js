import { StackNavigator, TabNavigator } from "react-navigation"

import Auth from "./screens/Auth"
import Event from "./screens/events/Event"
import EventList from "./screens/events/EventList"

const AppNavigator = StackNavigator({
  // first route by default
  auth: {
    screen: Auth
  },
  eventList: {
    screen: EventList
  },
  event: {
    screen: Event
  }
})

export default AppNavigator
