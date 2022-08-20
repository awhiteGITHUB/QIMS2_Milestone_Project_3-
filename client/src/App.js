import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'






const App = () => {
return (
<div>
<BrowserRouter>
<Routes>
<Route path="/Login" element={<Login/>} />
<Route path="/Register" element={<Register/>} />
<Route path="/Dashboard" element={<Dashboard/>} />
<Route path="/LandingPage" element={<LandingPage/>} />
</Routes>
</BrowserRouter>

</div>
)
}

export default App