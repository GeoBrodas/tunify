import React from 'react'
import Login from './Login'
import { Flex } from '@chakra-ui/react'
import Dashboard from './Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? (
    <Dashboard code={code} />
  ) : (
    <Flex direction="column" align="center" justify="center" m={20}>
      <Login />
    </Flex>
  )
}

export default App
