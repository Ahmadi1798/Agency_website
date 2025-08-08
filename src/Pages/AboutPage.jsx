import AboutHero from '../Components/About/AboutHero';
import WhoWeAre from '../Components/About/whoWeAre';
import CoreValues from '../Components/About/CoreValues';
import OurApproach from '../Components/About/OurApproach';
import AboutCTA from '../Components/About/AboutCTA';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <AboutHero />
      <WhoWeAre />
      <CoreValues />
      <OurApproach />
      <AboutCTA />
    </div>
  );
};
export default AboutPage;
