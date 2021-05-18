import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresInToken, setExpiresInToken] = useState()

  useEffect(() => {
    axios
      .post('http://localhost:3001/login', { code })
      .then((res) => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresInToken(res.data.expiresInToken)
        window.history.pushState({}, null, '/')
      })
      .catch(() => {
        window.location = '/'
      })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresInToken) return
    axios
      .post('http://localhost:3001/refresh', { refreshToken })
      .then((res) => {
        setAccessToken(res.data.accessToken)
        setExpiresInToken(res.data.expiresIn)
      })
      .catch(() => {
        window.location = '/'
      })
  }, [refreshToken, expiresInToken])

  return accessToken
}
