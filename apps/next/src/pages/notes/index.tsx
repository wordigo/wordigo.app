import React from 'react'
import { api } from '@/libs/trpc'

export default function page() {
  const deneme = api.auth
  console.log(deneme)
  return (
    <div>Note Page</div>
  )
}
