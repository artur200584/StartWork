import Hero from './components/Hero';
import Social from './components/Social';
import Features from './components/Features';
import Design from './components/Design';
import RootLayout from './components/RootLayout';
import DesignV2 from './components/DesingV2';
import OrderCards from './components/OrderCards';
import FAQ from './components/FQA';
import NewSletter from './components/NewSletter';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <RootLayout>
      <Hero />
      <Social />
      <Features />
      <Design />
      <DesignV2 />
      <OrderCards />
      <FAQ />
      <NewSletter />
      <Support />
      <Footer />
    </RootLayout>
  );
}

export default App;
