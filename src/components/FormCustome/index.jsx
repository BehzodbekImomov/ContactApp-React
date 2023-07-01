import React, { Component, createRef } from "react";
import { Container, Form } from "react-bootstrap";

import "../FormCustome/FormCustom.scss";

export class FormCustom extends Component {
  inputRef = createRef();
  telRef = createRef();
  imgRef = createRef();
  render() {
   const {getValueImg,getValueTel,getValueTitle}=this.props;
    const submit = (e) => {
e.preventDefault();
getValueTitle(this.inputRef.current.value);
getValueImg(this.imgRef.current.value);
getValueTel((this.telRef.current.value));
    };
    
    return (
      <Container>
        <Form
          onSubmit={submit}
          className="d-flex flex-column flex-md-row justify-content-between gap-5 m-auto w-75 pt-5 d-md-flex  "
        >
          <Form.Group controlId="   w-50 formFile" className="mb-3">
            <Form.Control
            ref={this.imgRef}
              className="fst-italic fw-bolder text-white"
              type="file"
            />
          </Form.Group>

          <Form.Group
            className=" m-auto  w-50 mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
            ref={this.inputRef}
              className="fst-italic fw-bolder text-white"
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group
            className=" m-auto  w-50 mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
            ref={this.telRef}
              className="fst-italic fw-bolder text-white"
              type="number"
              placeholder="Tel:+998901859499"
            />
          </Form.Group>

          <button type="submit" className="button m-auto m-md-0">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ultraviolet/40/000000/plus--v1.png"
              alt="plus--v1"
            />
          </button>
        </Form>
      </Container>
    );
  }
}

export default FormCustom;
