import { Button, Link, Stack } from '@chakra-ui/react'
import React from 'react'

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=2564aa66546145c1b40d84093a336143&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {
  return (
    <Stack>
      <Link href={AUTH_URL}>
        <Button>Login to Tunify!</Button>
      </Link>
    </Stack>
  )
}
