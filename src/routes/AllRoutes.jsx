import React from 'react'
import Main from '../components/Main'
import Wine from '../components/Wine'
import Whiskey from '../components/Whiskey'
import { Liquor } from '@mui/icons-material'
import Gin from '../components/Gin'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Auth from '../components/auth/Auth'

const AllRoutes = () => {
    const PAGES_ROUTES = [
        {link: "/", element: <Main/>, id: 1},
        {link: "/wine", element: <Wine/>, id: 2},
        {link: "/whiskey", element: <Whiskey/>, id: 3},
        {link: "/liquor", element: <Liquor/>, id: 4},
        {link: "/gin", element: <Gin/>, id: 5},
        {link: "/auth", element: <Auth/>, id: 6},
        {link: "*", element: <NotFoundPage/>, id: 7},
    ]
  return (
    <>
        <Routes>
            {PAGES_ROUTES.map((elem) => (
                <Route path={elem.link} key={elem.id} element={elem.element}/>
            ))}
        </Routes>
    </>
  )
}

export default AllRoutes