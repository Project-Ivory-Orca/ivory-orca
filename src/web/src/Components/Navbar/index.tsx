import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeStyle = "underline text-gray-500 underline-offset-4";

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full y-5 px-8 text-md front-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Ivory-Orca</NavLink>
                </li>
                <li>
                    <NavLink to ="/" 
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        All
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/clothing"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothing"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        T Shirts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothing"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        Hoodies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothing"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        Jerseys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothing"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        Clearance
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;