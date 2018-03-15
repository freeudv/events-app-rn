import { observable, computed, action, useStrict } from "mobx"
import firebase from "firebase"
import { entitiesFromFB } from "./utils"

import BasicStore from "./BasicStore"
//useStrict(true)

class Events extends BasicStore {
  @observable loading = false
  @observable loaded = false

  @observable entities = {}

  @computed
  get list() {
    return Object.values(this.entities)
  }

  @computed
  get size() {
    return Object.keys(this.entities).length
  }

  @action
  loadAll() {
    this.loading = true
    firebase
      .database()
      .ref("events")
      .once("value", data => {
        this.entities = entitiesFromFB(data.val())
        this.loading = false
      })
  }
}

export default Events
