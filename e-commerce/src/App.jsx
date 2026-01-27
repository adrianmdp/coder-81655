import { Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Users } from "./pages/Users";
import { Contact } from "./pages/Contact";

import "./App.css";
import { Nav } from "./components/Nav";
import { User } from "./pages/User";
import { Profile } from "./pages/Profile";

// http://localhost:5173/
// http://localhost:5173/contact
// http://localhost:5173/users
// http://localhost:5173/services

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/services" element={<Services />} />

        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
