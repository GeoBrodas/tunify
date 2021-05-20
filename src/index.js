import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()

reportWebVitals()
