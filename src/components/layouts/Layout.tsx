import { ReactNode } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex m-0 min-h-[100dvh] flex-col bg-[#E5E7E6] p-0">
      <Navbar />
      <main className="grow w-full flex-1 mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
