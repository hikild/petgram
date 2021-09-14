// @ts-nocheck
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginCreate from './login-create';
import LoginForm from './login-form';
import LostPassword from './lost-password';
import ResetPassword from './reset-password';

function Login() {
    return (
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="signup" element={<LoginCreate/>}/>
            <Route path="lost-password" element={<LostPassword/>}/>
            <Route path="reset-password" element={<ResetPassword/>}/>
        </Routes>
    )
}

export default Login
