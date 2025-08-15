import { useNavigate } from 'react-router-dom';
import { safeOpenExternal } from '@/lib/security';

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
    safeOpenExternal('https://calendly.com');
  };

  const openCalendlyBooking = () => {
    // Placeholder - later can be replaced with actual Calendly link
    safeOpenExternal('https://calendly.com');
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