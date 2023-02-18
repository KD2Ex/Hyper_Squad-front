import React from 'react';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';

export const privateRoutes = [
    {path: '/', element: <MainPage/>},
    {path: '/:Id', element: <AdminPage/>},
];

export const publicRoutes = [
    {path: '/login', element: 'qer'}
];

