import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle';

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className='container mx-auto'>
      <PageTitle>Dashboard</PageTitle>

      <div className='flex mb-6'>
        <div className='lg:w-2/5'>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
        </div>
        <div className='divider divider-horizontal'></div>
        <div className='w-full'>
          <div className='flex flex-wrap items-center justify-center'>
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
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
