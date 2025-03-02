import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const Join = loadable(() => import('../member/pages/Join'));
const Login = loadable(() => import('../member/pages/Login'));
const Findid = loadable(() => import('../member/pages/Findid'));

const Member = () => {
  return (
    <Routes>
      <Route path="/member" element={<MainLayout />}>
        <Route path="join" element={<Join />} />
      </Route>
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/find_id" element={<Findid />} />
    </Routes>
  );
};

export default React.memo(Member);
