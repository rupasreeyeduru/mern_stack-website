import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Vendor_Register from "./components/common/Vendor";
import Buyer_Register from "./components/common/Buyer";
import Navbar from "./components/templates/Navbar";
import VProfile from "./components/users/VProfile";
import BProfile from "./components/users/BProfile";
import Login from "./components/common/Login";
import ItemsList from "./components/common/Vfoodl";
import BItemsList from "./components/common/Bfoodl"
const Layout = () => {
  return (
    <div>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Register />} />
          <Route path="Vendors/vregister" element={<Vendor_Register />} />
          <Route path="Buyers/bregister" element={<Buyer_Register />} />
          <Route path="login" element={<Login />} />
          <Route path="vendorprofile" element={<VProfile />} />
          <Route path="bprofile" element={<BProfile />} />
          <Route path="foodlist" element={<ItemsList />} />
          <Route path="bfoodlist" element={<BItemsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
