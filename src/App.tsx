import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "components/footer";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
