"use client"

import { add } from "@workspace/math/add"
import { api } from "@workspace/backend/_generated/api"
import { useMutation, useQuery } from "convex/react"
import { Button } from "@workspace/ui/components/button"
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add)
  
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World/web</h1>

        <Button onClick={() => addUser()}></Button>
        
        {JSON.stringify(users)}
       
        
        
      </div>
    </div>
  )
}
