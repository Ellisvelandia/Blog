import { Routes, Route } from "react-router-dom";
import { IndexPage, Layout } from "./page";
import { Login, Register } from "./auth";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
