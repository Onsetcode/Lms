import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../component/Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state?.form?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3001/user/signup",
        userInfo
      );
      if (res.data) {
        console.log(res.data);
        toast.success('Signup successfully');
        navigate(form, { replace: true })
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error("Error: " + err.response.data.message || "Something went wrong");
      }
    }
  };

  return (
    <div className="flex  item-center justify-center text-md">
      <div className="w-[700px]">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>

            <h3 className="font-bold text-lg mb-4">SignUp</h3>

            <div className="mt-4 space-y-2 md:space-x-1 ">
              <span>Username</span>
              <input
                type="text"
                {...register("fullname", { required: true })}
                placeholder="Enter the username"
                className="w-80 px-3 py-1 border rounded outline-none"
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2 md:space-x-11 ">
              <span>Email</span>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded outline-none"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2 md:space-x-3">
              <span>Password</span>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded outline-none"
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-5">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700"
              >
                Signup
              </button>

              <div>
                <p>
                  Already registered?{" "}
                  <button
                    className="text-blue-700 underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
              </div>
            </div>
          </form>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;
