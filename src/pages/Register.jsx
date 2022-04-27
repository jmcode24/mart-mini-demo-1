import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Foot from '../components/Foot';
import '../index.css';
import { useNavigate } from "react-router-dom";
import firebase from "../firebase/config";
import Header from '../components/Header';

function Register() {
  const options = [
    "Male",
    "Female"
  ]

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function (result) {
          result.user.updateProfile({
            displayName: firstName,
          });
        })
        .catch(function (error) {
          console.log(error);
        });

        navigate("/account", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Best Mart | Register</title>
      </Helmet>

      <Header />
      <section className="jumbotron jumbotron-fluid showcase-1">
        <Container>
          <Row>
            <Col md='8' className='mx-auto'>
              <Form onSubmit={handleSignUp} className='form-top-1 p-4 border border-dark shadow-lg mb-4 b-body rounded'>
                <h3 className='best text-center mt-2 mb-4 fw-bold'>Register & get started</h3>
                <Form.Group className="mb-3">
                  <Row>
                    <Col md="6">
                      <Form.Label className='log fw-bolder'>First Name</Form.Label>
                      <Form.Control type="text" placeholder="first name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Col>
                    <Col md="6">
                      <Form.Label className='log fw-bolder'>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="other names & surname" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col md="6">
                      <Form.Label className='log fw-bolder'>Gender</Form.Label>
                      <Form.Select className='text-dark' aria-label="Default select example" required value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option>select your gender</option>
                        {options.map((option, index) => {
                          return (
                            <option className='text-primary' key={index} value={option}>
                              {option}
                            </option>
                          )
                        })}
                      </Form.Select>
                    </Col>
                    <Col md="6">
                      <Form.Label className='log fw-bolder'>Date Of Birth</Form.Label>
                      <Form.Control type="date" required value={dob} onChange={(e) => setDOB(e.target.value)}/>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col md="6">
                      <Form.Label className='log fw-bolder'>Phone Number</Form.Label>
                      <Form.Control type="number" placeholder="phone number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Col>
                    <Col md="6">
                      <Form.Label className='log fw-bolder'>Location</Form.Label>
                      <Form.Control type="text" placeholder="where do you stay?" required value={location} onChange={(e) => setLocation(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col md="6">
                      <Form.Label className='log fw-bolder'>Email</Form.Label>
                      <Form.Control type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                    <Col md="6">
                      <Form.Label className='log fw-bolder'>Password</Form.Label>
                      <Form.Control type="password" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>
                <div className='text-center'>
                <Button variant="outline-warning" type="submit" className='btn-lg w-50'>
                  Get Started
                </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
  
      <Foot />
    </div>
  );
};

export default Register;