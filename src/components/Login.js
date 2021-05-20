import { Button, Link, Stack, Heading } from '@chakra-ui/react'
import React from 'react'

const AUTH_URL = process.env.REACT_APP_AUTH_URL

export default function Login() {
  return (
    <Stack align="center">
      <Heading textAlign="center" mb={10}>
        Welcome to Lyrify
      </Heading>
      <Link href={AUTH_URL}>
        <Button variant="ghost">Login using Spotify</Button>
      </Link>
    </Stack>
  )
}
