import { Component } from "react";
import getTimeDiffrence from "../utils/time.js";


class SaleBanner extends Component {
    constructor() {
        super(); 
        this.state = {
            timer: 0,
        };

        this.onstart=this.onstart.bind(this);
        this.onpause=this.onpause.bind(this);
        console.log("initialize")
    }


onstart(){

let setIntervalid = setInterval(()=>{
this.setState({timer:this.state.timer+1})
},1000)
this.setState({setIntervalid:setIntervalid});
}

// new funciton have been  created
onpause(){
    clearInterval(this.state.setIntervalid);
    this.setState({setIntervalid:null});
}
/*

shouldComponentUpdate(){

    // yee component bhut important hota hai  jab elemetn render 
    // hota hai toh yee component react ko call krat hai aur aur upate deta hai
    
    // example ke liye jese mai ikk exapmle set krta hu yaha pe 


    if(this.state.timer>=10){
        return false
    }
    return true;


}

*/

gettime
    render() {

        // console.log("render")
        const{setIntervalid} =this.state

        const timeleft= getTimeDiffrence();
        const {days,minutes,hours,seconds}= timeleft || {};
        
        const salestart = !setIntervalid
        // console.log(seconds,minutes);
        return (
            <div>
                <div> <h3>
                    sale is live till 2 days
                </h3>

                </div>
                <div>
                    <h3>
               {timeleft ? `Time Left:${days} days,${hours} hours,
               ${minutes} minutes,${seconds} seconds` :"sale is over"}
               </h3>
                </div>
                <div>
                  {!salestart &&   <button onClick={this.onstart}>start sale </button>}
                  {salestart &&   <button onClick={this.onpause}>Pasue sale </button>}
                </div>
            </div>
        )
    }
}



export default SaleBanner;