import Hero from './components/Hero';
import Social from './components/Social';
import Features from './components/Features';
import Design from './components/Design';
import RootLayout from './components/RootLayout';

function App() {
  return (
    <RootLayout>
      <Hero />
      <Social />
      <Features />
      <Design />
    </RootLayout>
  );
}

export default App;
