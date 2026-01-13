import Hero from './components/Hero';
import Social from './components/Social';
import Features from './components/Features';
import Design from './components/Design';
import RootLayout from './components/RootLayout';
import DesignV2 from './components/DesingV2';

function App() {
  return (
    <RootLayout>
      <Hero />
      <Social />
      <Features />
      <Design />
      <DesignV2 />
    </RootLayout>
  );
}

export default App;
