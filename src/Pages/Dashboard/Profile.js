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

  const onSubmit = async (data) => {
    await updateProfile({ displayName: data.name, photoURL: data.photoUrl });
  };

  return (
    <div>
      <SectionTitle>My Profile</SectionTitle>
      <div className='max-w-xs mx-auto'>
        <form className='max-w-xs' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Enter Your Profile Link'
            {...register('photoUrl', { required: true })}
            className='input input-bordered w-full max-w-xs my-1'
          />
          <p className='text-sm text-warning'>
            {errors.photoUrl && <span>Enter a valid URL!</span>}
          </p>
          <input
            type='text'
            placeholder='Enter Your Name'
            {...register('name', { required: true })}
            className='input input-bordered w-full max-w-xs my-1'
          />
          <p className='text-sm text-warning'>
            {errors.name && <span>Enter a valid name!</span>}
          </p>

          <button type='submit' className='btn w-full max-w-xs my-1'>
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
