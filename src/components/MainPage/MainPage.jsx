import React from 'react'
import useStyle from './mainPageStyles'
import Header from '../header/Header'
import AllProducts from '../product/AllProducts'

function MainPage() {
    const classes = useStyle()
    return (
      <main className={classes.mainContainer} >
          <Header/>
          <AllProducts/>
      </main>
    )
}

export default MainPage
