import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GlobalProvider from './context/globalProvider/globalProvider'
import Compose from './Routes/Compose'
const providers=[
    GlobalProvider
]

function AppContext() {
    return (
        <BrowserRouter basename='/'>
            <Compose components={providers}>
                <App/>
            </Compose>
        </BrowserRouter>
    )
}

export default AppContext
