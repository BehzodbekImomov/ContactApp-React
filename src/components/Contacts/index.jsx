import React, { Component } from "react";
import { Container } from "react-bootstrap";


import "../Contacts/Contacts.scss";


export class Contacts extends Component {
 
  render() {
    const {img,title,tel}=this.props
    return (
      <Container>
        <ul>
          <li className="lists w-75 mt-5  m-auto ">
            <div className="imgs">
            <img src={img} alt="contact" />
           
              <div className="title">
              <h1>{title}</h1>
                
               <p>{tel}</p>
              
             
              </div>
            </div>
            <img
              className="deleted"
              width="30"
              height="30"
              src="https://img.icons8.com/arcade/64/delete-forever.png"
              alt="delete-forever"
            />
          </li>

          {/* <li className="lists w-75 mt-5  m-auto ">
            <div className="imgs">
              <img src="" alt="contact" />
              <div className="title">
                <h1>title1</h1>
                <p>+998901859499</p>
              </div>
            </div>
            <img
              className="deleted"
              width="30"
              height="30"
              src="https://img.icons8.com/arcade/64/delete-forever.png"
              alt="delete-forever"
            />
          </li> */}
        </ul>
      </Container>
    );
  }
}

export default Contacts;
