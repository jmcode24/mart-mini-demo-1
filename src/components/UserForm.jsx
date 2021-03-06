import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { v4 as uuid } from 'uuid';
import firebase from '../firebase/config';
import { BiErrorCircle, BiCheck } from 'react-icons/bi';

function UserForm() {
  const [item, setItem] = useState('');
  const [itemNum, setItemNum] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(true);

  const handleItem = (e) => {
    setItem(e.target.value);
  };

  const handleItemNum = (e) => {
    setItemNum (e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.value);
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    
      if (!item || !itemNum || !amount) {
        setError(false);
        setTimeout(() => {
          setError(true);
        }, 2000);
      } else {
        let newUser = {
          id: uuid(),
          date: Date.now(),
          item: item,
          itemNum: itemNum,
          amount: amount * 1
        };
  
        setSuccess(false);
        setTimeout(() => {
          setSuccess(true);
        }, 2000);
    
        firebase.firestore().collection("users").doc(newUser.id).set(newUser);

        setItem('');
        setItemNum('');
        setAmount('');
      }

    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Best Mart | Employee Account</title>
      </Helmet>
      <Container>
        <h3 className='text-center text-muted mt-2 mb-2 fw-bold text-decoration-underline'>Book-Keeper</h3>
        <Form onSubmit={handleSubmit}>
        {!error ? <Alert variant='danger' className='text-center'> <BiErrorCircle/> Leave no input field empty</Alert> : '' }
        {!success ? <Alert variant='success' className='text-center'> <BiCheck /> Sales recorded</Alert> : '' }
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='text-success'>Item Sold</Form.Label>
            <Form.Control type="text" placeholder="name of item" value={item} onChange={handleItem}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='text-success'>Number Of Item(s)</Form.Label>
            <Form.Control type="number" placeholder="number of items sold" value={itemNum} onChange={handleItemNum} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='text-success'>Amount Received</Form.Label>
            <Form.Control as={NumberFormat} placeholder="amount received" thousandSeparator={true} prefix={"GH??"}  value={amount} onValueChange={handleAmount} />
          </Form.Group>
          <Button type="submit" className='btn-danger w-100'>Record Sales</Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserForm;