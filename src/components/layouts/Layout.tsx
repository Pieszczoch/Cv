import { ReactNode } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex m-0 min-h-[100dvh] flex-col bg-[#7e7f83] p-0">
      <Navbar />
      <main className="grow flex-1 w-full mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
