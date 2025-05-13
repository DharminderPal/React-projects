import { Component } from "react";

class Classcounter extends Component{


// what is constructor for interview question
// ans---
constructor(){

    super();
    this.state={
        count : 0,

    };
    this.onadd=this.onadd.bind(this);
this.onminus=this.onminus.bind(this);
}
onadd(){

    // console.log(this );
    this.setState({count:this.state.count+1})
}

onminus(){
    this.setState({count:this.state.count-1})
}

render(){

    const {count } =this.state 
    return (
        <div><h1>class counter</h1>
        
        <h2>{count}</h2>
        
        <button onClick={this.onadd}>add</button>
        <button onClick={this.onminus}>minus</button>
        </div>
    )
}

}

export default Classcounter;

// this is class component 