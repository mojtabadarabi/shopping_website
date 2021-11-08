import React, { useEffect ,memo} from 'react'
import useStyle from './mainPageStyles'
import Header from '../header/Header'
import AllProducts from '../product/AllProducts'
import DiscountedProducts from '../product/DiscountedProducts'
import { useContextActions, useContextValue } from '../../context/ContextProvider'

function MainPage() {
    const classes = useStyle()
    return (
      <main className={classes.mainContainer} >
          <Header/>
          <DiscountedProducts/>
          <AllProducts/>
      </main>
    )
}

export default MainPage
