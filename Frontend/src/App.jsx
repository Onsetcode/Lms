// import Home from "./home/Home";
// import Login from "./component/Login";
import Signup from "./component/Signup";
// import Login from "./component/Login";
import Courses from "./cources/Cources";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom"
export default function App() {
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/sign" element={<Signup />}/>
      {/* <Route path="//" element={<Login />}/>  */}
     </Routes>
     </div>
    </>
  );
}
