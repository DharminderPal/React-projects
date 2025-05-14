import {api } from "..";

const  getmeals  = async ()=>{
const result =await api({endpoint:"public/meals"})
// console.log(result); chaking for the point ----- 
if(result && result.data && result.data.data)
    return result.data.data;

}


export default getmeals;

