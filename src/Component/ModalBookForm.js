import React from "react";
import { Modal, Button } from "react-bootstrap";
// import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <Modal.Body>
                 Booked! Thank you for joining
                 <br/>
          <Button onClick={this.close}>Ok</Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ModalBookForm;
