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
                 Start your class 
                 <br/>
          <Button onClick={this.close}>close</Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ModalBookForm;
