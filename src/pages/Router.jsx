import React from 'react'
import { BrowserRouter as MainRouter, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Homepage from './Homepage';
import MovieDetail from './MovieDetail';

const Router = () => {
    return (
        <MainRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/movie/:id/detail' element={<MovieDetail />} />
            </Routes>
        </MainRouter>
    )
}

export default Router