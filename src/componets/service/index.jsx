
const BASE_URL ="https://api.freeapi.app/api/v1/";
export const  api = async(config)=>{
    const {endpoint ,method ="GET"}= config || {};
    let url  = BASE_URL+endpoint;
    try {

const result  = await fetch(url,{
    method,

});
if(result.status>=200 && result.status<300){
const data =await result.json();
return data;
}
        throw result;

    }
    
    catch(abc){
console.log(abc,url);
throw new Error("API FAILEd",{ case :abc });
    }

}


// we got the data  corectly 