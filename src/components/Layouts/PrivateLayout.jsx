import React from 'react'
import Footer from '../footer/Footer'
import PrivateTopNav from '../Navs/private/PrivateTopNav'

function PrivateLayout({children}) {
    return (
        <main>
            <PrivateTopNav/>
            {children}
            <Footer/>
        </main>
    )
}

export default PrivateLayout
