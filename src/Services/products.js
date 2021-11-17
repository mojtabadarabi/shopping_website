import http from "./httpServices"
import firebasedb from '../firebase.js'
import { doc, getDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';

export const getAllProducts = (async()=>{
        const db = firebase.firestore();
        // return db.collection('products').onSnapshot((snapshot) => {
        //     console.log(snapshot)
        // snapshot.forEach((doc) => console.log(doc));
        // });
        const response=db.collection('Blogs');
        const data=await response.get();
        data.docs.forEach(item=>{
            console.log(item)
           })
        
        // db.database().ref('/products').on('value', querySnapShot => {
        //     console.log(querySnapShot.val())
        //   });
		// .collection('products')
		// .orderBy('createdAt', 'desc')
		// .get()
		// .then((data) => {
		// 	console.log(data)
		// })
		// .catch((err) => {
		// 	console.error(err);
		// });
    
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