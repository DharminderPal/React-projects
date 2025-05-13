// export  default function getTimeLeft(){
//     const now = new Date(); 
//     const future = new Date (now.getTime() + 2 * 24 * 60 * 60 * 1000); 
//     const diff = future.getTime() - now.getTime(); 
    
//     const days = Math.floor(diff / (86400)); 



//     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); 
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000); 
//     return { 
//     days, 
//     hours, 
//     minutes, 
//     seconds, 
//     }; 


// }
let futureDate  =Date.now()+100*60*100;
export  default function getTimeDiffrence(){
    const now = new Date(); 
    const target= new Date (futureDate); 
    // const diff = future.getTime() - now.getTime(); 
    const diffi_in_milli_seconds =target-now;


    if(diffi_in_milli_seconds<0){
return"the given date is in the past";
    }

    const totalseconds = Math.floor(diffi_in_milli_seconds / 1000); 



    const days = Math.floor(( totalseconds/3600*24)); 
    const   hours= Math.floor(( totalseconds  % (3600*24)) / 3600); 
    const   minutes= Math.floor(( totalseconds  % 3600)/60); 
     const  seconds =totalseconds%60;
    return { 
    days:days, 
    hours:hours, 
    minutes:  minutes, 
    seconds:seconds, 
    }; 


}
