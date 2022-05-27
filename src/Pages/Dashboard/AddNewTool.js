import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";

const AddNewTool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    fetch("https://makers1.herokuapp.com/tool", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    });
    navigate("/dashboard/managetools");
  };

  return (
    <div>
      <SectionTitle className="text-center">Add New Tool</SectionTitle>
      <div className="grid card rounded-box place-items-center text-center py-3">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Tool Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.name && <span>Enter a valid name!</span>}
          </p>

          <input
            type="text"
            placeholder="Enter Image Link"
            {...register("img", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.img && <span>Enter a valid image link!</span>}
          </p>

          <input
            type="text"
            placeholder="Enter Tool Description"
            {...register("description", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.description && <span>Enter minimum 6 charecter!</span>}
          </p>

          <input
            type="text"
            placeholder="Enter Minimum Order Quantity"
            {...register("minOrderQty", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.minOrderQty && <span>Enter a valid integer</span>}
          </p>

          <input
            type="text"
            placeholder="Enter Price"
            {...register("price", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.price && <span>Enter minimum 6 charecter!</span>}
          </p>

          <input
            type="text"
            placeholder="Enter Stock"
            {...register("availableQty", { required: true })}
            className="input input-bordered w-full max-w-xs my-1"
          />
          <p className="text-sm text-warning">
            {errors.availableQty && <span>Enter minimum 6 charecter!</span>}
          </p>

          <button type="submit" className="btn w-full max-w-xs my-1">
            Add New
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTool;
