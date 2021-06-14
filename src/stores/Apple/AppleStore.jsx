import { makeObservable, observable, action } from "mobx"


class AppleStore {
  id = Math.random()
  weight = ""
  position = 0
  isEaten = false
  constructor(weight,position) {
    if (weight) this.weight = weight
    if (position) this.position = position
    makeObservable(this, {
      // weight: observable,
      // position: observable,
      isEaten: observable,
      // bound 用于更正 this
      eatApple: action.bound,
    })
  }
  eatApple () {
    this.isEaten = !this.isEaten
  }
}

export default AppleStore