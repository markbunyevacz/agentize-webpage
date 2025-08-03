import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  const navigateToServices = () => {
    navigate('/services');
  };

  const navigateToSolutions = () => {
    navigate('/solutions');
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToBlog = () => {
    navigate('/blog');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openExternalDemo = () => {
    // Placeholder - later can be replaced with actual demo URL
    window.open('https://calendly.com', '_blank');
  };

  const openCalendlyBooking = () => {
    // Placeholder - later can be replaced with actual Calendly link
    window.open('https://calendly.com', '_blank');
  };

  const openContactForm = () => {
    navigate('/contact');
  };

  return {
    navigateToContact,
    navigateToServices,
    navigateToSolutions,
    navigateToAbout,
    navigateToBlog,
    scrollToSection,
    openExternalDemo,
    openCalendlyBooking,
    openContactForm,
  };
};