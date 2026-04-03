'use client';

import BlogTeaser from '../Components/Home/BlogTeaser';
import OurProcess from '../Components/Home/OurProcess';
import { CTA, Hero, Portfolio, Services, Testimonials } from '../Components/sections';
const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Hero />
      <Services />
      <Testimonials />
      <OurProcess />
      <Portfolio />
      <BlogTeaser />
      <CTA />
    </div>
  );
};
export default HomePage;
