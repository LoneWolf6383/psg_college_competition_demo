/* eslint-disable no-unused-vars */
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        {/* <Route path="/login">{user ? <Route path='/' element={<App/>}/>   : <Login />}</Route> */}
        {/* <Route path="/register">
          {user ? <Route path='/' element={<App/>}/>   : <Register />}
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;