import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle';
import useJwtToken from '../../hooks/useJwtToken';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [token] = useJwtToken(user || gUser);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (error || gError) {
    return (
      <div className='container mx-auto'>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading || gLoading) {
    return <Spinner></Spinner>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className='flex flex-col w-96 mx-auto border-opacity-50 mb-12'>
      <PageTitle>Sign In</PageTitle>
      <div className='grid card bg-base-300 rounded-box place-items-center text-center py-6'>
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            placeholder='Enter Email Address'
            autoComplete='username'
            {...register('email', { required: true })}
            className='input input-bordered w-full max-w-xs my-1'
          />
          <p className='text-sm text-warning'>
            {errors.email && <span>Enter a valid email!</span>}
          </p>

          <input
            type='password'
            placeholder='Enter Password'
            autoComplete='current-password'
            {...register('password', { required: true })}
            className='input input-bordered w-full max-w-xs my-1'
          />
          <p className='text-sm text-warning'>
            {errors.password && <span>Enter minimum 6 charecter!</span>}
          </p>

          <button type='submit' className='btn w-full max-w-xs my-1'>
            Login
          </button>
        </form>
      </div>
      <div className='divider'>OR</div>
      <div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
        <button
          onClick={() => signInWithGoogle()}
          className='btn w-full max-w-xs my-1'
        >
          Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
