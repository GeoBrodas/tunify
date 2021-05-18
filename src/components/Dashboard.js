import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from './useAuth'
import { VStack, Form, Input } from '@chakra-ui/react'

export default function Dashboard({ code }) {
  const accessToken = useAuth(code)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <VStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="search"
          placeholder="Search Music/Artists"
          {...register('Search Music/Artists', {})}
        />

        <input type="submit" />
      </form>
    </VStack>
  )
}
