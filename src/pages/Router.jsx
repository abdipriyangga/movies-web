import React from 'react'
import { BrowserRouter as MainRouter, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';

const Router = () => {
    return (
        <MainRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </MainRouter>
    )
}

export default Router