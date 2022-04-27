import React, {useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap';
import Foot from '../components/Foot';
import '../index.css';
import { useNavigate } from "react-router-dom";
import firebase from "../firebase/config";
import firebase1 from "firebase";
import Header from '../components/Header';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      if (!email || !password) {
        setError(false);
        setTimeout(() => {
          setError(true);
        }, 2000);
      } else {
        setLoading(true);
        await firebase.auth().signInWithEmailAndPassword(email, password);

        navigate("/account", { replace: true });
      };
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setEmailError(false);
        setTimeout(() => {
          setEmailError(true);
        }, 2000);
      }
      console.log(error.code);
    } finally {
      setLoading(false)
    }
  };

  const signInWithGoogle = async (e) => {
    try {
      e.preventDefault();

      const provider = new firebase1.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Best Mart | Log In</title>
      </Helmet>

      <Header />

      <section className="jumbotron jumbotron-fluid showcase-1">
        <Container>
          <Row>
            <Col md='6' className='mx-auto'>
              <Form onSubmit={handleLogin} className='form-top p-4 border border-dark shadow-lg mb-5 b-body rounded'>
                <h3 className='best text-center mt-2 mb-4 fw-bold'>Login to continue keeping records of your sales</h3>
                {!error ? <Alert variant='danger' className='text-center mt-1 mb-3'>Enter email and password</Alert> : '' }
                {!emailError ? <Alert variant='danger' className='text-center mt-1 mb-3'>Wrong email or password</Alert> : '' }
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="2" className='log fw-bolder'>Email</Form.Label>
                  <Col sm="10">
                    <Form.Control type="email" placeholder="email" value={email} onChange={handleEmail}/>
                  </Col>
                </Form.Group>
              
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" className='log fw-bolder'>Password</Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="password" value={password} onChange={handlePassword} />
                  </Col>
                </Form.Group>

                <div className="d-flex justify-content-around mt-4 mb-3">
                  <Button disabled={loading} variant="outline-warning" className='btn-lg' type="submit" onClick={handleLogin}>
                      {loading ? (
                        <i>
                          <Spinner as="span" animation="grow" variant="light" size="sm" role="status" aria-hidden="true"/> Signing in
                        </i>) : ("Sign in")}
                    </Button>
                    <Button variant="outline-success" type="submit" className='btn-lg' onClick={signInWithGoogle}>
                      Login with Google
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

export default Login;