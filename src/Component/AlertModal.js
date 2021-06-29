import React from 'react';
//  import SweetAlert from 'react-bootstrap-sweetalert';
import Alert from 'react-bootstrap/Alert';
import LoginButton from '../LoginButton.js';
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";

class AlertModal extends React.Component{
render(){
    return(
        <>
        <Modal show={this.props.showAlert} onHide={this.props.hide}>
        <Modal.Header closeButton  show={this.props.showAlert}
          onHide={this.props.hide}/>
          <Modal.Body> 
<Alert show={this.props.showAlert} variant="success">
        <Alert.Heading>You need to Join us first</Alert.Heading>
        <LoginButton
        />
            <div className="d-flex justify-content-end">
          <Button onClick={this.props.hide} variant="outline-success">
            OK
          </Button>
        </div>
      </Alert>
      </Modal.Body>
      </Modal>
    </>
    )
}
}
export default AlertModal ;