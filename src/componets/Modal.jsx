const navLiks = ['Home', 'Features', 'Pricing', 'About us', 'Contact']

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? "modal__icons modal" : "modal__icons"}>
            <img onClick={() => setActive(false)} className="modal__arow" src="/public/arrow-right-o.svg" alt="" />
            <ul>
                {navLiks.map((item) => {
                 return <li key = {item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Modal