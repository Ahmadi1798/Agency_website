import ServicesCTA from '../Components/Services/ServicesCTA';
import ServicesHero from '../Components/Services/ServicesHero';
import ServicesList from '../Components/Services/ServicesList';

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </div>
  );
};
export default ServicesPage;
