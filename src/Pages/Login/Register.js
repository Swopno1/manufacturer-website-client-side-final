import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../../Shared/Spinner";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  if (error || gError) {
    return (
      <div className="container mx-auto">
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || gLoading) {
    return (
      <div className="container mx-auto flex text-center justify-center">
        <Spinner></Spinner>
      </div>
    );
  }
  if (user || gUser) {
    return (
      <div>
        <p>Registered User: {user ? user.email : gUser.user.email}</p>
      </div>
    );
  }

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex flex-col w-96 mx-auto border-opacity-50 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Create New User</h1>
      <div className="grid card bg-base-300 rounded-box place-items-center text-center py-3">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.name && <span>Enter a valid name!</span>}
          </p>
          <input
            type="email"
            placeholder="Enter Email Address"
            {...register("email", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.email && <span>Enter a valid email!</span>}
          </p>

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.password && <span>Enter minimum 6 charecter!</span>}
          </p>

          <button type="submit" className="btn w-full max-w-xs my-1">
            Register
          </button>
        </form>
      </div>
      <div className="divider">OR</div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-full max-w-xs my-1"
        >
          Register With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
