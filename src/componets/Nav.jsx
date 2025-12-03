const navLiks = ['Home', 'Features', 'Pricing', 'About us', 'Contact']

const Nav = ({ setActive }) => {
    return (
        <nav className="navigation">
            <div className="header__brand">
                <img className="header__logo" src="./public/logo_header.jpg" alt="" />
                <p className="header__text">Abstractly</p>
            </div>
           <div>
            <ul className="nav__links">
                {navLiks.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
           </div>
           <div className="nav__buttons">
            <button>Lear More</button>
            <button>See Pricing</button>
           </div>
           <img onClick= {() => setActive(true)} className='burger__logo' src="./public/menu__burger.jpg" alt="" />
        </nav>
    )
}

export default Nav