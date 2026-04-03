'use client';

import BackToTop from './BackToTop';
import Footer from './Footer';
import Navbar from './Navbar';
import { ThemeProvider } from '../context/ThemeContext';

const NextLayoutShell = ({ children }) => {
  return (
    <ThemeProvider>
      <BackToTop />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default NextLayoutShell;
