import http from "./httpServices"

export const getAllProducts = (async()=>{
    return await http.get('/allproducts')
    
})