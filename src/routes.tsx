import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/view/page/home";
import Login from "./app/view/page/login";
import Register from "./app/view/page/register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
