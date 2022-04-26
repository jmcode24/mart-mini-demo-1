import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import firebase from '../firebase/config';
import { useSelector } from 'react-redux';

function Account() {
  const user = useSelector((state) => state.auth.user);

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
          <h4 className='text-dark fw-bold'>Welcome <span className='fw-bold fst-italic text-info f-1'>{user.displayName ? user.displayName : user.email}</span> </h4>
          <Button variant="outline-danger" type="submit" onClick={signOut}>Sign out</Button>
        </div>
        <Row>
          <Col md='4' className='position-start'> <UserForm /> </Col>
          <Col md='8'> <UserList/> </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Account;