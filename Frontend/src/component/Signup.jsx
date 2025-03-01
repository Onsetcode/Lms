import { Link } from "react-router-dom";
import Login from "../component/Login";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Handle login logic, like sending data to the backend
    console.log(data);
  };
  return (
    <>
      <div className="flex h-screen item-center justify-center text-md ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className="w-[700px]">
          <div className="modal-box dark:bg-slate-800 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/">
                {" "}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>
            </form>
            <h3 className="font-bold text-lg mb-4">SignUp</h3>
            <div className="mt-4 space-y-2">
              <span>Username</span>
              <br />
              <input
                type="text"
                {...register("username", { required: true })}
                placeholder="Enter the username"
                className="w-80 px-3 py-1 border rounded outline-none"
              />
                 <br />
                 {errors.username && <span className="text-sm text-red-500">This field is required</span>}
              <br />
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded outline-none"
              />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <br />
            </div>
            <div className="mt-4 space-y-2">
              <span className="mt-4">Password</span>
              <br />
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded outline-none"
              />
               <br />
               {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* login button */}
            <div className="flex justify-around mt-5">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">
                Signup
              </button>
              <p>
                Not registered?{" "}
                <button
                  className="text-blue-700 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
