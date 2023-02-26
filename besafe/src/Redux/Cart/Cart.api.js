import axios from "axios";

export const getCartAPI = async() => {
    let res =  await fetch("http://localhost:8080/cart/items",{
            method:"GET",
            headers :{
                Authorization:localStorage.getItem("token"),
                "Content-type":"application/json"
            }
    })
    .then(res=>
        res.json())
    .then((res)=>{
        // console.log('res:', res.msg)
        return res.msg;
    })
   return res
}


export const updateCart =  async(id,newValue) => {
    // return axios.patch(`http://localhost:8080/cart/items/update/${id}`,newValue);
    let res =  await fetch(`http://localhost:8080/cart/update/${id}`,{
            method:"PATCH",
            headers :{
                Authorization:localStorage.getItem("token"),
                "Content-type":"application/json"
            },
            body:JSON.stringify(newValue)
    })
    .then(res=>
        res.json())
    .then((res)=>{
        return res.msg;
    })
    return res
}


export const deleteCart = async(id) => {
        try{
            let res =  await fetch(`http://localhost:8080/cart/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:localStorage.getItem("token"),
                    "Content-type":"application/json"
                }
            })
        .then(res=>
            res.json())
        .then((res)=>{
            return res.msg;
        })
        return res
    }catch(err){
        return err;
    }
}
   