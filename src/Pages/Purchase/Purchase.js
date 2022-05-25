import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useTools from '../../hooks/useTools';
import PageTitle from '../../Shared/PageTitle';

const Purchase = () => {
  const { id } = useParams();
  const tool = useTools(id);

  const { _id, name, img, price, description, minOrderQty, availableQty } =
    tool;

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(tool);
  return (
    <div className='container mx-auto'>
      <PageTitle>
        Purchase <span className='text-secondary'>{name}</span>
      </PageTitle>
      <div class='card lg:card-side bg-base-100 shadow-xl w-3/5 mx-auto my-6'>
        <figure>
          <img src={img} alt='Album' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>{name}</h2>
          <p>{description}</p>
          <div>
            <p>
              Price/Unit:{' '}
              <span className='font-bold'>${parseFloat(price)}</span>
            </p>
            <p>
              Available Stock:{' '}
              <span className='font-bold'>{parseInt(availableQty)} units</span>
            </p>
            <p>
              Minimum Order Quantity:{' '}
              <span className='font-bold'>{parseInt(minOrderQty)} uints</span>
            </p>
          </div>
        </div>
      </div>
      <div class='divider'></div>
      <div className='my-3 max-w-xs mx-auto'>
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='number'
            placeholder='Enter Order Quantity'
            {...register('orderQuantity', {
              required: true,
              min: minOrderQty,
              max: availableQty,
            })}
            className='input input-bordered w-full max-w-xs my-1'
          />
          <p className='text-sm text-warning'>
            {errors.orderQuantity && <span>Enter a valid quantity!</span>}
          </p>
          <button type='submit' className='btn w-full max-w-xs my-1'>
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
