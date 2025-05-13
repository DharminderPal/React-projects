import { useState } from "react"

const counter = () => {
    // let count = 0; thisi is static version 

    const [count,setcount]=useState(0);

    const add = () => {
    setcount(count+1)
        console.log(count)
    }
    const onSubmit = () => {
        setcount(count-1)
        console.log(count)
    }
    return (
        <>
            <h2>{count}</h2>
            <button onClick={add}>Increase</button>
            <button onClick={onSubmit}>Decrease</button>
        </>

    )




}


export default counter;