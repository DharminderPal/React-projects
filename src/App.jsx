import './App.css'
import { useState } from 'react'
import Chatpage from './componets/chatpage'
import DhatFooter from './componets/DhatFooter'
import Chatbox from './componets/chatbox'

const App = () => {
const [show,setshow] =useState(true)

  return (
<>
<Chatbox/>
<Chatpage/>
<DhatFooter/>
</>

  )



}

export default App
