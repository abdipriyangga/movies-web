import React from 'react'
import { BrowserRouter as MainRouter, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';

const Router = () => {
    return (
        <MainRouter>
            <Routes>
                <Route index element={<Login />} />
            </Routes>
        </MainRouter>
    )
}

export default Router