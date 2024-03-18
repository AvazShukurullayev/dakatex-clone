import "./Header.css"
import Navbar from "../navbar/Navbar.jsx";
import HeroBg from "../heroBg/HeroBg.jsx";

const Header = () => {
    return (
        <header className="header">
            <Navbar/>
            <HeroBg/>
        </header>
    )
}
export default Header