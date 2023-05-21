import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/home";
import SignUp from "../components/signup";
import { RequireAuth } from "react-auth-kit";
import Head from "../components/head";

const Root = () => {
  let navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/signup">
            <Head />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Root;
