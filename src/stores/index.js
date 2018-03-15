import Event from "./eventsStore"
import User from "./userStore"
import Navigation from "./navigation"
import People from "./peopleStore"

const stores = {}
stores.user = new User(stores)
stores.events = new Event(stores)
stores.navigation = new Navigation(stores)
stores.people = new People(stores)

export default stores
