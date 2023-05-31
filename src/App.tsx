import { Provider } from 'react-redux'
import Router from './routes/Router'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
