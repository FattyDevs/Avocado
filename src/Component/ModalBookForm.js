import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import SweetAlert from 'react-bootstrap-sweetalert';
class ModalBookForm extends React.Component {
  close=()=>{
    this.props.close();
  }
  render() {
    return (
      <>
        <Modal
          show={this.props.flag}
          onHide={this.close}
        >
          <Modal.Header closeButton  show={this.props.flag}
          onHide={this.props.close}>
            <Modal.Title id="contained-modal-title-vcenter">
              Start your class
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.getData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Email"
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Class</Form.Label>
                <Form.Control as="select" custom name="class">
                  <option value="Personal-with-Family">
                    Personal with Family{" "}
                  </option>
                  <option value="Fit-Beginners">Fit Beginners</option>
                  <option value="Fit-Master">Fit Master </option>
                </Form.Control>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={this.close}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ModalBookForm;
