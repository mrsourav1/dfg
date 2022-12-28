import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Navigate,Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Job from "./screens/Job";
import Internships from "./screens/Internships";
import Login from "./screens/Login";
import EmployerLogin from "./screens/EmployerLogin";
import Footer from "./components/Footer";
import SignUp from "./screens/SignUp";
import PostJob from "./screens/PostJob";
import PostJobForm from "./screens/PostJobForm";

function App() {
  const user = true;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path = "/jobs" element={<Job />} />
          <Route path = "/internships" element={<Internships />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/employer-login" element={<EmployerLogin />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/postJob" element={<PostJob />}/>
          <Route path="/postJobform" element={user ? <PostJobForm /> : <Navigate replace to={"/employer-login"} />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
