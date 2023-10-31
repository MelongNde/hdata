import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {

    const session = await getServerSession(authOptions) 
    console.log(session)
    
    if(session?.user) {
        return (
            <h2>Please login to see this admin page</h2>
        )
    }

    return (
    <div>Welcome to the dashboard {session?.user.firstName}</div>
    )
}

export default page