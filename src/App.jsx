import Header from './components/Header';
import Hero from './components/Hero';
import Social from './components/Social';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <Social />
      </main>
    </>
  );
}

export default App;
