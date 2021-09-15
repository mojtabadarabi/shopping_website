import React from 'react'
import styles from './FeaturedProducts.module.css'
import data from './data'
import FeaturedProduct from './FeaturedProduct'

function FeaturedProducts() {
    return (
        <section className={styles.container}>
            {
                data.map(product=>{
                    return(
                        <FeaturedProduct product={product} key={product.id}/>
                    )
                    })
            }
        </section>
    )
}

export default FeaturedProducts
