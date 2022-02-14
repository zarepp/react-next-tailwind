
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ProfileContext } from "../context/ProfileContext"

export default function HomePage() {
  const { setProfile } = useContext(ProfileContext)
  const router = useRouter()

  useEffect(() => {
    const userAuth = localStorage.getItem("ua")
    const user = JSON.parse(userAuth)
    
    if (userAuth === null) {
      router.push("/auth/login")
    }
  }, [])

  return (
    <>
      <div>Hello World ...</div>
    </>
  )
}