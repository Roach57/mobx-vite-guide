import AppleBasketStore from "./Apple/AppleBasketStore"
import { createContext, useContext } from "react"

class RootStore {
  constructor() {
    this.appleBasketStore = new AppleBasketStore()
  }
}

// 通过上下文暴露 appleBasketStore
const RootStoreContext = createContext()

const RootStoreProvider = ({ store, children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

const useRootStore = () => {
  return useContext(RootStoreContext)
}

export { RootStore, RootStoreProvider, useRootStore }
