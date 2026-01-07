import Header from './components/Header';
import Hero from './components/Hero';
import Social from './components/Social';
import Features from './components/Features';
import Design from './components/Design';
import style from './styles/global.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={style.wrapper}>
        <Hero />
        <Social />
        <Features />
        <Design />
      </main>
    </>
  );
}

export default App;
