import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import { clearAll } from "./redux/slice.jsx";
import { useDispatch } from "react-redux";
import CartList from "./redux/CartList.jsx";
function App() {
  const dispatch = useDispatch();
  return (
    <>
      {/* <h1>React Redux Toolkit</h1>
      <button className='btn' onClick={() => dispatch(clearAll())}> Clear All </button> */}

      <BrowserRouter basename="/ReduxToolkit/">
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
