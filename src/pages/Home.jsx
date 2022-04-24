import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Foot from '../components/Foot';
import '../index.css';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Helmet>
        <title>Best Mart | Home</title>
      </Helmet>

      <Header />

      <section className="jumbotron jumbotron-fluid showcase">
        <div className="showcase_inner">
          <h1 className='best'>Best Mart</h1>
          <p>This web app is to help you keep records of <br/> your sales while you work here.</p>
          <div className='d-flex justify-content-between border border-dark p-2 mt-5'>
            <p className='emp text-decoration-underline fw-bold'>Already an employee?</p>
            <Button as={Link} to='/login'>Sign in</Button>
          </div>
          <div className='d-flex justify-content-between border border-dark p-2 mt-3'>
            <p className='emp text-decoration-underline fw-bold'>Are you a new employee?</p>
            <Button className='btn-danger' as={Link} to='/register'>Register</Button>
          </div>
        </div>
      </section>

      <Foot />
    </>
  );
};

export default Home;