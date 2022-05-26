import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch(`https://makers1.herokuapp.com/allorders`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  return (
    <div className='container mx-auto'>
      <SectionTitle>Manage All Orders</SectionTitle>
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
            {allOrders.length > 0
              ? allOrders.map((order) => (
                  <tr key={order._id}>
                    <th>1</th>
                    <td>{order.name}</td>
                    <td>{order.orderQuantity}</td>
                    <td>{order.orderQuantity * order.price}</td>
                    <td></td>
                  </tr>
                ))
              : undefined}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
