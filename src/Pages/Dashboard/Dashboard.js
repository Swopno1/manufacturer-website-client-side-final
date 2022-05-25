import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle';
import RequireAuth from '../Login/RequireAuth';
import AddReview from './AddReview';
import MyOrders from './MyOrders';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <div className='container mx-auto'>
      <PageTitle>Dashboard</PageTitle>
      <div className='tabs'>
        <Link className='tab tab-lifted' to='/dashboard/myorders'>
          My Orders
        </Link>
        <Link className='tab tab-lifted' to='/dashboard/addreview'>
          Add Review
        </Link>
        <Link className='tab tab-lifted' to='/dashboard/myprofile'>
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
