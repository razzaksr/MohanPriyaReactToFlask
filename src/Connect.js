import axios from "axios";

const url="http://127.0.0.1:1122"

export const onTraverse=async()=>{
    const t = await axios.get(`${url}/`)
    return t
}

export const onCreate=async(obj)=>{
    //alert(JSON.stringify(obj))
    const t = await axios.post(`${url}/create`,obj)
    return t
}