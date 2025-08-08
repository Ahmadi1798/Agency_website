import PortfolioHero from '../Components/Portfolio/PortfolioHero';
import ProjectsGallery from '../Components/Portfolio/ProjectsGallery';
import ProtfolioCTA from '../Components/Portfolio/ProtfolioCTA';

const PortfolioPage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <PortfolioHero />
      <ProjectsGallery />
      <ProtfolioCTA />
    </div>
  );
};
export default PortfolioPage;
