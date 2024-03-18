import logo from "../../assets/main-logo.png";

const TopLogo = () => {
    return (
        <div className="d-flex align-items-center justify-content-center p-2 bg-light">
            <a href="#">
                <img src={logo} alt="Logo" className="img-fluid"/>
            </a>
        </div>
    )
}

export default TopLogo