import Nav from './Nav';
import Modal from './Modal';
// import Hero from "./Hero"
import style from './Header.module.scss';
import { useState } from 'react';

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <header className={style.header}>
      <Nav setActive={setModal} />
      {modal && <Modal active={modal} setActive={setModal} />}
      <div className="wrapper">{/* <Hero /> */}</div>
    </header>
  );
};

export default Header;
