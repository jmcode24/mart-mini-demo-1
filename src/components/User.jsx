import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import firebase from '../firebase/config';

function User(props) {
  const user = props.user;

  const [item, setItem] = useState(user.item);
  const [itemNum, setItemNum] = useState(user.itemNum);
  const [amount, setAmount] = useState(user.amount);
  const [isShowing, setIsShowing] = useState(false);

  const handleDelete = async () => {
    try {
      firebase.firestore().collection("users").doc(user.id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      let userData = {
        date: new Date(),
        id: user.id,
        item: item,
        itemNum: itemNum,
        amount: amount * 1
      };
      
      firebase.firestore().collection("users").doc(user.id).update(userData);
      
      handleClose();

    } catch(error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <tr>
        <td className='text-center'> {moment(user.date).format('dddd, MMMM Do YYYY, h:mm')}</td>
        <td className='text-center'><span className='text-info'>•</span> {user.item}</td>
        <td className='text-center'><span className='text-info'>⁍</span> {user.itemNum}</td>
        <td className='text-center'><span className='text-success'>¢</span> <NumberFormat displayType="text" value={user.amount} thousandSeparator={true} /></td>
        <td>
          <div className='d-flex justify-content-around'>
            <Button variant='primary' onClick={() => setIsShowing(true)}>Edit</Button>
            <Button variant='danger' onClick={handleDelete}>Delete</Button>
          </div>
        </td>
      </tr>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Corrections</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='text-success'>Item Sold</Form.Label>
            <Form.Control type="text" placeholder="name of item" value={item} onChange={(e) => {setItem(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='text-success'>Number Of Item(s)</Form.Label>
            <Form.Control type="number" placeholder="number of items sold" value={itemNum} onChange={(e) => {setItemNum(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='text-success'>Amount Received</Form.Label>
            <Form.Control as={NumberFormat} placeholder="amount received" thousandSeparator={true} prefix={"GH¢"} value={amount} onValueChange={(e) => {setAmount(e.value)}} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;