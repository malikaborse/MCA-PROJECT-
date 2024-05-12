import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./pages/Header"
import Home from "./pages/Home"
import Cart from './components/Cart/Cart'
import Menu from "./components/Menu/Menu"
import SignIn from './pages/SignIn'
import SignUp from "./pages/SignUp"
import FooterS from './pages/Footer'
import ForgetPassword from './pages/ForgetPassword'
import PlaceOrder from './pages/PlaceOrder'
import MyOrders from "./pages/MyOrders"
import Items from "./components/Admin/Items"
import Orders from "./components/Admin/Orders"

// import PrivateRoute from "./components/PrivateRoute"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <header><Header /></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset" element={<ForgetPassword />} />
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/items" element={<Items />} />
          <Route path="/interiors" element={<Menu />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/orders" element={<Orders />} />
          {/* <Route path="/myposts" element={<MyPosts />} />
            <Route path="/search" element={<Search />} />
          {/* </Route> */}
          {/* <Route path="/signin" element={<SignInPage />} /> */}
        </Routes>
        <footer><FooterS /></footer>
      </BrowserRouter>
    </>
  )
}

export default App
