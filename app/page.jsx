import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Results />
      <Reviews />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}
