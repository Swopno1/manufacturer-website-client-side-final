import React from 'react';

const PageNotFound = () => {
  return (
    <div className='container mx-auto card w-96 bg-base-100 m-6 p-6'>
      <div className='card-body'>
        <h2 className='card-title text-6xl font-bold mx-auto text-secondary'>
          404
        </h2>
        <p className='text-primary font-light'>
          Page not found. Please check the link again!
        </p>
      </div>
      <figure>
        <img
          src='https://i.ibb.co/Bf4Bkh3/error-404-page-not-found-vector-14463998.jpg'
          alt='Shoes'
        />
      </figure>
    </div>
  );
};

export default PageNotFound;
