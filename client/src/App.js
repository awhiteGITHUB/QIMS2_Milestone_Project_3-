import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App = () => {
return (
<div>
<BrowserRouter>
<Routes>
<Route path="/Login" element={<Login/>} />
<Route path="/Register" element={<Register/>} />
<Route path="/Dashboard" exact component={Dashboard} />
</Routes>
</BrowserRouter>

</div>
)
}

export default App