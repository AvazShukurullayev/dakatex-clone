import logo from "../../assets/main-logo.png";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav__logo">
                    <a href="#">
                        <img src={logo} alt="Logo" className="nav__logo-img"/>
                    </a>
                </div>
                <nav className="nav">
                    <div className="burger none"></div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link active" href="#">Home</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">About us</a>
                        </li>
                        <li className="nav__item dropdown">
                            <a className="nav__link dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Production
                            </a>
                            {/*<ul className="dropdown-menu">*/}
                            {/*    <li><a className="dropdown-item" href="#">Yarn</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Knitting Department</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Finished goods</a></li>*/}
                            {/*</ul>*/}
                        </li>
                        <li className="nav__item dropdown">
                            <a className="nav__link dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Winemaking
                            </a>
                            {/*<ul className="dropdown-menu">*/}
                            {/*    <li><a className="dropdown-item" href="#">Spinning mill</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Knitting shop</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Dyeing Department</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Cutting Department</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Printing Department</a></li>*/}
                            {/*    <li><a className="dropdown-item" href="#">Garment Factory</a></li>*/}
                            {/*</ul>*/}
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">Cooperation</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">Contacts</a>
                        </li>
                    </ul>
                    <ul className="nav_lang">
                        <li><a href="">En</a></li>
                        <li><a href="">Ru</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbar