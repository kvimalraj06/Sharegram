import { Routes, Route } from "react-router-dom";

import SigninForm from "./_auth/forms/signinForm";
import SignupForm from "./_auth/forms/signupForm";
import AuthLayout from "./_auth/authLayout";
import { Home } from "./_root/pages";

import "./styles/globals.css";
import RootLayout from "./_root/rootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
