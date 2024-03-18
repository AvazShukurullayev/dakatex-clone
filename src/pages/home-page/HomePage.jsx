import "./HomePage.css"
import Info from "../../components/info/Info.jsx";
import Winemaking from "../../components/winemaking/Winemaking.jsx";
import Factory from "../../components/factory/Factory.jsx";
import Production from "../../components/product/Production.jsx";
import Trust from "../../components/trust/Trust.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import ContactUs from "../../components/contact-us/ContactUs.jsx";


 const HomePage = () => {
    return (
        <main className="main">
            <Info />
            <Winemaking />
            <Factory />
            <Production />
            <Trust />
            <Contacts />
            <ContactUs />
        </main>
    )
}

export default HomePage