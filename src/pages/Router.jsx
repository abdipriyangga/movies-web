import React from 'react'
import { BrowserRouter as MainRouter, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Homepage from './Homepage';

const Router = () => {
    return (
        <MainRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/homepage' element={<Homepage />} />
            </Routes>
        </MainRouter>
    )
}

export default Router