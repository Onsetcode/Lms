import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:3001/user/login", userInfo);
      if (res.data && res.data.user) {
        console.log(res.data);
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success('Successfully created!');
        document.getElementById("my_modal_3").close();
        setTimeout(()=>{ 
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        },1000)
       
      
      } else {

        alert("Unexpected response from server.");
        setTimeout(()=>{})
      }
      
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error("Error: " + (err.response.data.message));
        setTimeout(() => {}, 3000);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

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
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
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
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Login button */}
            <div className="flex justify-around mt-5">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/sign" className="text-blue-700 underline cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
