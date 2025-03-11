import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Layout = ({ children, darkMode, toggleDarkMode }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-light dark:bg-dark text-dark-light dark:text-light transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
