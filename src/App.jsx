import  './App.scss'

import AppleBasket from './components/Apple/AppleBasket'
import { RootStore, RootStoreProvider } from "./stores/RootStore"

const rootStore = new RootStore()

function App() {
  return (
    <div className="App">
      <RootStoreProvider store={rootStore}>
        <AppleBasket />
      </RootStoreProvider>
    </div>
  );
}

export default App
