import {api } from "..";

const  getmeals  = async ()=>{
const result =await api({endpoint:"public/meals"})
// console.log(result);
if(result && result.data && result.data.data)
    return result.data.data;

}


export default getmeals;
