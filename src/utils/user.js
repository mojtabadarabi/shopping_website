export const isLogin=()=>{
    const user = localStorage.getItem('user')
    if(!user){
        return false
    }
    return true
}
