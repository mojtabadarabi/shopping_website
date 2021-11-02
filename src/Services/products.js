import http from "./httpServices"

export const getAllProducts = (async()=>{
    return await http.get('/allproducts')
    
})
export const createProduct = ((product)=>{
    return http.post('/allproducts',product)
    
})