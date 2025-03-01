import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
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
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-800 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg mb-4">Login</h3>
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
            {/* Login button */}
            <div className="flex justify-around mt-5">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/sign" className="text-blue-700 underline cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
