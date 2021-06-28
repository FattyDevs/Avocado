import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';


class InfoForm extends React.Component{
    render(){
        return(
            <>

             <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.props.show}>
              <Modal.Header>
                   <Modal.Title id="contained-modal-title-vcenter">
                   User's Information
                    </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div>
                 <Form onSubmit={this.props.saveUser}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>How Old Are You?</Form.Label>
               <Form.Control type="number" placeholder="Age" name="age"/>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Your Height</Form.Label>
               <Form.Control type="number" placeholder="Height" name="height"/>  
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Enter Your Weight</Form.Label>
                  <Form.Control type="number" placeholder="Weight" name="weight"/>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Enter Your Favorite Sport</Form.Label>
                  <Form.Control type="text" placeholder="Fav Sport" name="favSport"/>
               </Form.Group>
                
               <Button variant="success" type="submit" >
                  Save
               </Button>
             </Form>
                 </div>
             
             </Modal.Body>

               <Modal.Footer>
                 <Button variant="success" onClick={this.props.hide}>Close</Button>
                  </Modal.Footer>
                </Modal>
            

            </>
        )
    }
}

export default withAuth0(InfoForm);