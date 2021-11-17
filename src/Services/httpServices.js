import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL="https://shopping-7941a-default-rtdb.firebaseio.com/"

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        toast.error("مشکلی از سمت سرور رخ داده است");
    }

    return Promise.reject(error);
});

const http = {
    get:axios.get,
    post:axios.post,
    delete:axios.delete,
    put:axios.put,
}

export default http;