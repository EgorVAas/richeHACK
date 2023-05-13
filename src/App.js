import React from 'react'
import Header from './components/Header'
import AllRoutes from './routes/AllRoutes'
import { useAuth } from './contexts/AuthContextProvider'

const App = () => {
  const {user} = useAuth()
  return (
    <div>
      <Header/>
      <AllRoutes/>
    </div>
  )
}

export default App