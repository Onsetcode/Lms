
import Signup from "./component/Signup";
import Courses from "./cources/Cources";
import Home from "./home/home";
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AutoProvider";

export default function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  console.log(setAuthUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/sign" />} />
          <Route path="/sign" element={<Signup />} />
          {/* <Route path="//" element={<Login />}/>  */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
