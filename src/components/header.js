import { NavLink } from 'react-router-dom';
import '../style/header.css'

function Header() {
    return (
        <div>
            <header>
                <nav>
                    < NavLink to="/home">
                        <img src="images/logo.png" alt="" className="logo" />
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                    <div>


                        < NavLink to="/login" className="fas fa-user-alt icon"></NavLink>
                        {/* <a NavLink to="./product-card.html" className="fa fa-shopping-bag icon"></a> */}

                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;