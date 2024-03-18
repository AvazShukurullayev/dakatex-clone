import "./App.css"
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import HomePage from "../../pages/home-page/HomePage.jsx";
import AboutUsPage from "../../pages/about-us-page/AboutUsPage.jsx";
import {ProductionYarnPage} from "../../pages/production-yarn-page/ProductionYarnPage.jsx";
import {ProductionKnittingPage} from "../../pages/production-knitting-page/ProductionKnittingPage.jsx";
import {ProductionFinishedGoodsPage} from "../../pages/production-finished-goods-page/ProductionFinishedGoodsPage.jsx";
import {WinemakingSpinningPage} from "../../pages/winemaking-spinning-page/WinemakingSpinningPage.jsx";
import {WinemakingKnittingPage} from "../../pages/winemaking-knitting-page/WinemakingKnittingPage.jsx";
import {WinemakingDyeingPage} from "../../pages/winemaking-dyeing-page/WinemakingDyeingPage.jsx";
import {WinemakingCuttingPage} from "../../pages/winemaking-cutting-page/WinemakingCuttingPage.jsx";
import {WinemakingPrintingPage} from "../../pages/winemaking-printing-page/WinemakingPrintingPage.jsx";
import {WinemakingGarmentPage} from "../../pages/winemaking-garment-page/WinemakingGarmentPage.jsx";
import {CooperationPage} from "../../pages/cooperation-page/CooperationPage.jsx";
import {ContactsPage} from "../../pages/contacts-page/ContactsPage.jsx";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <HomePage/>
            <AboutUsPage/>
            <ProductionYarnPage/>
            <ProductionKnittingPage/>
            <ProductionFinishedGoodsPage/>
            <WinemakingSpinningPage/>
            <WinemakingKnittingPage/>
            <WinemakingDyeingPage/>
            <WinemakingCuttingPage/>
            <WinemakingPrintingPage/>
            <WinemakingGarmentPage/>
            <CooperationPage/>
            <ContactsPage/>
            <Footer/>
        </div>
    )
}

export default App

//Todo: main > section