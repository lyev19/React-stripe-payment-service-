import React, {Component} from "react";
import ReactDOM  from "react-dom";

const portal = document.getElementById("modal")

export default class Portal extends Component{
  newDiv=document.createElement("div")
  componentDidMount=()=>{
    portal.appendChild(this.newDiv)
  }
  componentWillUnmount = ()=>{
    portal.removeChild(this.newDiv)
  }
  render(){
    return ReactDOM.createPortal(this.props.children,this.newDiv)
  }

}