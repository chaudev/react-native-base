import React, {createContext, useContext, useState, useEffect, FC} from 'react'
import {setToken} from '~/api/instance'
import {LocalStorage} from '~/common'

const initUser = {
  token: '',
  fullName: '',
  email: '',
  phone: '',
}

export const GlobalContext = createContext<IMainProvider>({})

const AppProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [mainText, setMainText] = useState('Click me!')
  const [mainLoading, setMainLoading] = useState(true)
  const [user, setUser] = useState<IUser>(initUser)

  useEffect(() => {
    getCurrentToken()
  }, [])

  async function getCurrentToken() {
    try {
      const response = await LocalStorage.getToken()
      console.log('getCurrentToken: ', response)

      setToken(response || '')
      setUser({token: response})
    } catch (error) {
      console.error(error)
    } finally {
      setMainLoading(false)
    }
  }

  const contextValue = {
    mainText,
    setMainText,
    mainLoading,
    setMainLoading,
    user,
    setUser,
  }

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = () => useContext(GlobalContext)
export default AppProvider
