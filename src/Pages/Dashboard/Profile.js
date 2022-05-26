import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import useJwtToken from '../../hooks/useJwtToken';
import SectionTitle from '../../Shared/SectionTitle';

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);

  const [token] = useJwtToken(user);

  const onSubmit = () => {};

  return (
    <div>
      <SectionTitle>My Profile</SectionTitle>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Enter Your Name'
          {...register('name', { required: true })}
          className='input input-bordered w-full max-w-xs my-1'
        />
        <p className='text-sm text-warning'>
          {errors.name && <span>Enter a valid name!</span>}
        </p>
        <input
          type='email'
          placeholder='Enter Email Address'
          {...register('email', { required: true })}
          className='input input-bordered w-full max-w-xs my-1'
        />
        <p className='text-sm text-warning'>
          {errors.email && <span>Enter a valid email!</span>}
        </p>

        <input
          type='password'
          placeholder='Enter Password'
          {...register('password', { required: true })}
          className='input input-bordered w-full max-w-xs my-1'
        />
        <p className='text-sm text-warning'>
          {errors.password && <span>Enter minimum 6 charecter!</span>}
        </p>

        <button type='submit' className='btn w-full max-w-xs my-1'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Profile;
