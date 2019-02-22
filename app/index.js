import React from 'react'
import { Provider } from 'react-redux'
import RouterApp from './approuter'
import { configureStore } from './store'
import ChatApp from './components/ChatApp'


const store = configureStore()

const App = () =>
  <Provider store={store}>  
    <ChatApp  />
    <RouterApp />
  </Provider>

export default App
