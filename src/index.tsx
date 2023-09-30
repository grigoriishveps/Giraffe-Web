import React from 'react'
import { Provider } from 'react-redux'

import App from './App'
import store from 'src/components/store/store'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('react-root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
