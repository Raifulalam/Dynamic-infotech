import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css';
import DistributionOperationPlatform from './Pages/DistributionOperationPlatform'


function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/distribution-operation-platform" element={<DistributionOperationPlatform/>}/>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
