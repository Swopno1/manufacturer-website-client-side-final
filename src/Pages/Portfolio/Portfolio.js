import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='container mx-auto my-3'>
      <h1 className='text-3xl text-center font-bold py-3'>My Portfolio</h1>
      <div className='card card-side bg-base-100 shadow-xl'>
        <figure>
          <img
            src='https://i.ibb.co/xScyRxs/Amir.jpg'
            alt='Md Amir Hossain'
            className='w-60'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Md Amir Hossain</h2>
          <p>
            <a href='mailto:amirhossain.limon@gmail.com'>
              Email: amirhossain.limon@gmail.com
            </a>
            <br />
            <a href='tel:+8801819062270'>Phone: 01819062270</a>
            <br />
            <br />
            <span className='font-bold text-secondary'>
              Education Background
            </span>
            <br />
            MBA, Accounting & Information Systems <br />
            Rajshahi University
            <br />
            <br />
            <span className='font-bold text-secondary'>
              Skills relevant to development
            </span>
            <br />
            JavaScript, Google AppsScript, React, NodeJs, ExpressJs, MongoDb,
            HTML, CSS
            <br />
          </p>
          <div className='card-actions justify-end'>
            <Link to='/contact' className='btn btn-primary'>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
