
import './App.css';
import React from 'react';
import { useState} from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

import { Store } from './pages/store';
 
function App() {

  const [Items,setItems]= useState([]);
  const [pop,setPop] = useState(false)

  const set_items = (item)=>{
     //missing check for item integrity
     setItems(Items =>[ ...Items,item])
  } 

  const all_items_fetch= async()=>{
    if(localStorage.getItem("items")===null){
      const res = await fetch('https://fakestoreapi.com/products/')
      const result = await res.json()
      console.log(result)
     localStorage.setItem("items",JSON.stringify(result))
    
    }
   
    
  } 

  
  const set_pop =()=>{
    setPop(!pop)
  }
  console.log(Items)
  return (
     <Router>
        <Routes>
            <Route path="/"  element={<Store Items={Items} set_items={set_items} pop={pop} set_pop={set_pop} all_items_fetch={ all_items_fetch}/> } />
        </Routes>
     </Router>
  );
}

export default App;
