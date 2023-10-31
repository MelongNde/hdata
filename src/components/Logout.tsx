'use client'

import { signOut } from "next-auth/react"

const Logout = async () => {
  return (
    <span onClick={() => signOut()}>

    </span>
  )
}

export default Logout