import Navbar from "../navbar/Navbar.jsx";
import HeroBg from "../heroBg/HeroBg.jsx";

const Header = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <a href="#">
                    <img src="" alt="Logo"/>
                </a>
            </div>
            <Navbar/>
            <HeroBg/>
        </div>
    )
}
export default Header