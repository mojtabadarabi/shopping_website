import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import GlobalProvider from './context/globalProvider/globalProvider'
import Compose from './Routes/Compose'
const providers=[
    GlobalProvider
]

function AppContext() {
    return (
        <BrowserRouter basename='/'>
            <Compose components={providers}>
                <AuthProvider>
                <App/>

                </AuthProvider>

            </Compose>
        </BrowserRouter>
    )
}

export default AppContext
