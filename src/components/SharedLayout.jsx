import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
