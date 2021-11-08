import http from "./httpServices"

export const getAllProducts = (async()=>{
    return await http.get('/allproducts')
    
})
export const createProduct = ((product)=>{
    return http.post('/allproducts',product)
})
export const getDiscountedProduct = (async()=>{
    const {data} = await http.get('/allproducts')
    const filterdList = data.filter(product=>product.discount!==''&&product.discount!==null)
    return filterdList
})
export const getCategorys = (async()=>{
    const {data} = await http.get('/categorys')
    return data
})
export const addCategorys = ((category)=>{
    return http.post('/categorys',category)
    
})