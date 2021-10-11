import { toast } from "react-toastify"
import http from "./httpServices"

export const registerUser = (async(user)=>{
    if (!await findUser(user)) {
        try {
            const response = await http.post('/users',user)
            if (response.status===201) {
                return true
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }
    else{
        toast.error('نام کاربری یا شماره همراه قبلا وجود دارد')
        return false
    }
})
export const loginUser = (async(user)=>{
    try {
        const response = await http.get('/users')
        console.log(response)
    } catch (error) {
        console.log(error)
        return false
    }
})
export const getAllUser = (async()=>{
    try {
        return http.get('/users')
    } catch (error) {
        console.log(error)
    }
})
export const findUser = (async(userReq)=>{
    const {data} = await getAllUser()
    const finded = data.filter(user=>user.userName===userReq.userName||user.phone===userReq.phone)
    if (finded.length===0) {
        return false
    }
    else{
        return true
    }
    
})