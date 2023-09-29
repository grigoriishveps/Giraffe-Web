import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import store from './components/store/store'

const root = createRoot(document.getElementById('react-root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)
