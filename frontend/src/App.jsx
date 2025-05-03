import React from 'react'
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/products/ProductDetails';
import Checkout from './components/cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './components/admin/UserManagement';
import ProductManagment from './components/admin/ProductManagment';

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          {/* user layout */}
        <Route index element={<Home />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<Register />} />
        <Route path='profile' element={<Profile />} />
        <Route path='collections/:collection' element={<CollectionPage />} />
        <Route path='product/:id' element={<ProductDetails />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='order-confirm' element={<OrderConfirmationPage />} />
        <Route path='order/:id' element={<OrderDetailsPage />} />
        <Route path='my-orders' element={<MyOrdersPage />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          {/* admin layout */}
          <Route index element={<AdminHomePage />} />
          <Route path='users' element={<UserManagement />} />
          <Route path='products' element={<ProductManagment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App