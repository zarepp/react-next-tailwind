import { createContext, useMemo, useState, useEffect } from "react"

export const ProfileContext = createContext(null)

export function AppWrapper({ children }) {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (profile === null) {
      const user = localStorage.getItem("ua")
      const userJson = JSON.parse(user)
      setProfile(userJson)
    }
  }, [profile])

  const value = useMemo(() => ({ profile, setProfile }, [profile, setProfile]))

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
  