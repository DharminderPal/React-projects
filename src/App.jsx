import Header from './componets/header'
import './App.css'

// import Products from './componets/Products'
// import Footer from './componets/footer'
import Counters from  './componets/Counters'
// import SaleBanner from "../saleBanner";
import MenuPage from './componets/pages/Menupage'
import { useState } from 'react'


const App = () => {
const [show,setshow] =useState(true)

  return (
<>
<button  className='btnn'  onClick={()=>setshow(!show)}>
  {show ? "hidden Menu ": "show Menu"}
</button>
{ show &&  <MenuPage/>}
</>

  )



}

export default App
