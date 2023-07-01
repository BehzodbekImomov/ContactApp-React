import React, { Component } from "react";
import Contacts from "../Contacts";

import FormCustom from "../FormCustome";


export class Todo extends Component {
  state = {
    data:[
      {
        id: 1,
        title: "Title1",
        img: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Solid-Color-Backgrounds-For-Desktop-768x432.jpg",
        done:true,
        tel:+998933147141,
      },
  
      {
        id: 2,
        title: "Title2",
        img: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Solid-Color-Backgrounds-For-Desktop-768x432.jpg",
        done:true,
        tel:+998933147141,
      },
  
      {
        id: 3,
        title: "Title3",
        img: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Solid-Color-Backgrounds-For-Desktop-768x432.jpg",
        done:true,
        tel:+998933147141,
      },
    ]
  }
  render() {
    let data=[]
    const doneItem=this.state.data.filter((data)=>data.done)
 const getValueTel = (value)=>{
console.log(value);
 data=[...this.state.data,{id:4,tel:value,done:true,}]
this.setState({data})
 } 
 const getValueTitle = (value)=>{
console.log(value);
 data=[...this.state.data,{id:5,title:value,done:true}]
this.setState({data})
 }
  const getValueImg = (value)=>{
console.log(value);
 data=[...this.state.data,{id:6,done:true,img:value}]
this.setState({data})
 }
 const FormProps={getValueImg,getValueTel,getValueTitle};
    return (
      <div>
      <FormCustom {...FormProps} />
      {doneItem.map((data,id)=> <Contacts key={id} {...data}  />)}
     
      </div>
    );
  }
}

export default Todo;