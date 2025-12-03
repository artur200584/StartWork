import Nav from "./Nav"
import Modal from "./Modal"
import { useState } from "react"

const Header = () => {
    const [modal, setModal] = useState(false)

    return(
        <header className="header">
            <Nav setActive = {setModal} />
            <Modal active = {modal} setActive ={setModal} />
        </header>
    )
}

export default Header