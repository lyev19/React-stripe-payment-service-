
import './App.css';
import React from 'react';
import { useState,useEffect} from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

import { Store } from './pages/store';

 
function App() {

  const [Items,setItems]= useState([]);
  const [pop,setPop] = useState(false)
  const [Cart,SetCart] = useState([])
  
  
 
  const set_items = (item)=>{
     //missing check for item integrity
     setItems(Items =>[ ...Items,item])
  } 
  
  const set_cart = (item)=>{
    //missing check for item integrity
    SetCart(Cart =>[ ...Cart,item])
    console.log(Cart)
 } 
 
  const remove_cart = (item)=>{
   
    console.log(Cart.filter((a)=>JSON.stringify(a.id)!==item))
    SetCart(Cart.filter((a)=>JSON.stringify(a.id)!==item))
    
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
            <Route path="/"  element={<Store remove_cart={remove_cart} Items={Items} set_items={set_items} pop={pop} set_pop={set_pop} all_items_fetch={ all_items_fetch} set_cart={set_cart} Cart={Cart}/> } />
            <Route path="/pay"></Route>
        </Routes>
     </Router>
  );
}

export default App;



/* 
<li class= "item"> </li>


style 

*/