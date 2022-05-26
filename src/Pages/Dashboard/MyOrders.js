import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SectionTitle from '../../Shared/SectionTitle';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user] = useAuthState(auth);
  const userEmail = user.email;
  useEffect(() => {
    fetch(`https://makers1.herokuapp.com/myorders/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders, user, userEmail]);

  const handleCancelOrder = async (id) => {
    await fetch(`https://makers1.herokuapp.com/myorders/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  };
  const handlePayment = async (order) => {
    const updatedOrder = { ...order, paid: true };
    await fetch(`https://makers1.herokuapp.com/myorders/${order._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedOrder),
    });
  };

  return (
    <div>
      <SectionTitle>My Orders</SectionTitle>

      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Qty</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myOrders.length > 0
              ? myOrders.map((order) => (
                  <tr key={order._id}>
                    <th>1</th>
                    <td>{order.name}</td>
                    <td>{order.orderQuantity}</td>
                    <td>{order.orderQuantity * order.price}</td>
                    <td>
                      {!order.paid && (
                        <>
                          <button
                            className='btn bg-primary mr-3'
                            onClick={() => handleCancelOrder(order._id)}
                          >
                            Cancel Order
                          </button>
                          <button
                            className='btn bg-primary'
                            onClick={() => handlePayment(order)}
                          >
                            Make Payment
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              : undefined}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
