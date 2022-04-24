import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import firebase from '../firebase/config';

function Account() {
  const signOut = async () => {
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container fluid>
        <div className='d-flex justify-content-around mt-3 mark'>
          <h4>Welcome</h4>
          <Button variant="outline-danger" type="submit" onClick={signOut}>Sign out</Button>
        </div>
        <Row>
          <Col md='4'> <UserForm /> </Col>
          <Col md='8'> <UserList/> </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Account;