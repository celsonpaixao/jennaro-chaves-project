import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/view/page/home";
import Login from "./app/view/page/login";
import Register from "./app/view/page/register";
import Dashboard from "./app/view/page/dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
