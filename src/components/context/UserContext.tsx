import { createContext, useState } from 'react'

export type AuthUser = {
    name: string,
    email: string
}

type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// type assertion
export const UserContext = createContext<UserContextType>({} as UserContextType);

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}