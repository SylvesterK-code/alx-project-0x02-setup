// import Header from "./Header";
// import Footer from "./Footer";
// import { ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Header />
//       <main className="flex-1 p-6">{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;










//  Layout Wrapper

import Header from './Header';
import Footer from "./Footer";
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
