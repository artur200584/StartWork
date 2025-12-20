import { useState } from 'react';
import Nav from '../Naviation';
import Modal from '../Modal';
import Hero from '../Hero/Hero';
import style from './Header.module.scss';

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className={style.header}>
        <Nav setActive={setModal} />
        {modal && <Modal active={modal} setActive={setModal} />}
      </header>
      <section className="wrapper">
        <Hero />
      </section>
    </>
  );
};

export default Header;
