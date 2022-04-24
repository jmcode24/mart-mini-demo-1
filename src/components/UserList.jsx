import React from 'react';
import User from './User'
import { Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

function UserList() {
  const users = useSelector((state) => {
    return state.users.users;
  });

  const totalAmount = users.reduce((prev, cur) => (prev += cur.amount), 0);

  return (
    <div>
      <Container>
        <Row>
          {users.length > 0 ? (
            <>
              <h4 className='text-center mt-4 mb-2 text-info'>Sales History</h4>
              <Table bordered hover variant='dark'>
                <thead>
                  <tr>
                    <th className='text-center text-warning'>Date & Time</th>
                    <th className='text-center text-warning'>Item</th>
                    <th className='text-center text-warning'>No̲ 0f Items</th>
                    <th className='text-center text-warning'>Amount</th>
                    <th className='text-center text-warning'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {users.map((user, index) => {
                  return (
                    <User key={user.id} user={user} index={index}/>
                  );
                })}
                </tbody>
              </Table>
              <h5 className='text-center mt-2'>Total Sales Made: <span className='text-success'>GH¢</span> <span className='text-dark'><NumberFormat displayType="text" value={totalAmount} thousandSeparator={true} /></span></h5>
            </>
          ) : ('')}
          
        </Row>
      </Container>
    </div>
  );
};

export default UserList;