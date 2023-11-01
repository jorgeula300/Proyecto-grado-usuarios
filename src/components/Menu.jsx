import React, { useState } from "react"
import { NavLink } from "react-router-dom"

export function Menu() {

    const [menu, setMenu] = useState(false)
    const clickMenu = () => {
        setMenu(!menu);
    }


    return (<>
        <header className="Header">
            <nav className='navM'>
                <div>
                    <img className="airQImg" src="/airQ.png" alt="logo de pagina" />
                </div>

                <ul className={` ulM ${menu ? 'active' : ''} `}>
                    <li className="liM"><NavLink className="aM" to='/'>INICIO</NavLink></li>
                    <li className="liM"><NavLink className="aM" to="/nosotros">NOSOTROS</NavLink></li>
                </ul>



            </nav>
            <div className={` menuRes ${menu ? 'active' : ''} `} onClick={clickMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>



    </>)
}