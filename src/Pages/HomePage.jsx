import BlogTeaser from '../Components/Home/BlogTeaser';
import HeroSection from '../Components/Home/HeroSection';
import HomeCTA from '../Components/Home/HomeCTA';
import OurProcess from '../Components/Home/OurProcess';
import ProjectsTeaser from '../Components/Home/ProjectsTeaser';
import ServicesPreview from '../Components/Home/ServicesPreview';
import WhyChooseUs from '../Components/Home/WhyChooseUs';
const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <OurProcess />
      <ProjectsTeaser />
      <BlogTeaser />
      <HomeCTA />
    </div>
  );
};
export default HomePage;
