import http from "./httpServices"

export const getAllProducts = (async()=>{
    return http.get('/allproducts')
    
})