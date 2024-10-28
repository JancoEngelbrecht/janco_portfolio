import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/index';
import Footer from '../footer/index';

const Layout:React.FC = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;