import { toast } from "react-toastify"
import http from "./httpServices"

export const registerUser = (async(user)=>{
    const findedUser = await existUser(user)
    if (!findedUser) {
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
        toast.error(findedUser)
        return false
    }
})
export const getAllUser = async()=>{
    return await http.get('/users')
}
export const loginUser = (async(userReq)=>{
    try {
        const {data} = await getAllUser()
        const findedUserName = data.filter(user=>user.userName===userReq.userName)
        if (findedUserName.length===0) {
            return 'نام کاربری وجود ندارد'
        }
        const correctPassword = findedUserName[0].password==userReq.password
        if (correctPassword) {
            return findedUserName[0]
        }
        else{
            return 'رمز عبور نادرست است'
        }
        
    } catch (error) {
        console.log(error)
    }
        
})
export const existUser = (async(userReq)=>{
    const {data} = await getAllUser()
    const findedUserName = data.filter(user=>user.userName===userReq.userName)
    const findedPhone = data.filter(user=>user.phone===userReq.phone)
    if (findedUserName.length>0&&findedPhone.length>0) {
        return 'نام کاربری و شماره تلفن وجود دارد'
    }
    else if(findedUserName.length>0){
        return 'نام کاربری وجود دارد'
    }
    else if(findedPhone.length>0){
        return 'شماره تلفن وجود دارد'
    }
    else{
        return false
    }
    
})