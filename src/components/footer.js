import { NavLink } from 'react-router-dom';
import '../style/footer.css';

function Footer() {
    return (
        <div>
            <footer>
                <div className="sub-footer">
                    <div className="site-details">
                        <img src="./img/logo.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum aliquid illo nihil asperiores dignissimos, amet accusantium nemo consequuntur id? Labore, blanditiis facere. Earum, aspernatur animi! Alias tempore ratione itaque!</p>
                    </div>
                    <div className="links">
                        <h6>Useful links</h6>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/product">Products</NavLink></li>
                            <li><NavLink to="/contact">Contact US</NavLink></li>
                        </ul>
                    </div>
                    <div className="social-link">
                        <h6>Useful links</h6>
                        <ul>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Instragram</a></li>
                            <li><a href="#">Gmail</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>Copyright &#169; 2023 By Mayur Hajare</p>
            </footer>
        </div>
    );
}

export default Footer;