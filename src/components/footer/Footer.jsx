import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <a href="" className="footer__logo">
                        <img src="/src/assets/main-logo.png" alt="main-logo"/>
                    </a>
                    <ul>
                        <li>
                            <a href="">
                                Manufacture and sale of knitted products | Dakatex
                            </a>
                        </li>
                        <li>
                            <a href="">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="">
                                News
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Contacts
                            </a>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <p>&copy; 2024 Vertically integrated knitwear production</p>
            </div>
        </footer>
    )
}

export default Footer