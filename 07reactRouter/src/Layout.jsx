import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            {/* ye changable rahega */}
            <Outlet /> 
            <Footer />
        </>
    )
}

export default Layout