import "./Factory.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

const Factory = () => {
    return (
        <section className="factory">
            <div className="container">
                <h2 className="title">About the factory</h2>
                <div className="factory__cards">
                    <div className="factory__card">
                        {/*    Todo: youtube video*/}
                        <img src="/src/assets/cutting-1.jpg" alt="youtube" className="factory__card-img"/>
                    </div>
                    <div className="factory__card">
                        <h3 className="factory__card-title">
                            DAKA-TEX - complex production and wholesale of knitted products from Uzbekistan
                        </h3>
                        <p className="factory__card-description">
                            The factory for the production of cotton yarn and fabrics in Uzbekistan DAKA-TEX is the
                            largest supplier of knitted products to Italy, Russia, Germany and other regions. We invite
                            partners to mutually beneficial cooperation - you can always buy knitted fabrics and
                            finished products in bulk from our company on the most acceptable terms.
                        </p>
                        <br/>
                        <p className="factory__card-description">
                            Production facilities operate around the clock, while we carry out the entire cycle of work
                            - from the production of yarn to sewing finished knitwear. Partnership with our company is a
                            guarantee of uninterrupted supply of fabric and knitwear in the shortest possible time with
                            a guarantee of quality!
                        </p>
                    </div>
                </div>

                <h4>History and achievements of DAKA-TEX</h4>
                <p>
                    The history of the brand began back in 2008, when we started the production of yarn in Samarkand,
                    making carded, ring-spun yarn. Over 14 years of efficient work, we have brought technological
                    processes to a new level of efficiency, having won a high level of trust from wholesale buyers.
                    Today, the knitwear factory with vertical integration DAKA-TEX combines all production links into a
                    single, well-coordinated technological process:
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCircle} className="circle"  /> <b>Spinning factory.</b> The spinning mill is equipped with a complete complex of Swiss made
                        Reiter equipment and produces Ne 20/1 and Ne 30/1 carded yarns.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCircle} className="circle" /> <b>Sewing factory.</b> Today, the workshops are equipped with the latest Japanese sewing
                        equipment JUKI and advanced technologies are used. We carry out the development, layout of
                        patterns, create product samples according to individual customer requests, improve technical
                        parameters and test.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCircle} className="circle" /> <b>Knitting shop.</b> We use circular knitting and flat knitting machines from leading
                        manufacturers in Italy, Taiwan and China. There are single jersey and double jersey circular
                        knitting machines for the production of knitted fabrics of all popular types: single jersey,
                        double jersey (interlock), 2-thread and 3-thread terry, pique and rib. Natural organic cotton is
                        used in production, the addition of elastane and polyester guarantees a high level of aesthetics
                        and wear resistance.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCircle} className="circle" /> <b>Dyeing Department.</b> Dyeing of knitted fabrics on modern Turkish and Italian equipment
                        using high-quality dyes provides the highest colour accuracy, light fastness and washing
                        resistance.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCircle} className="circle" /> <b>Cutting Department</b> - ultra-precise cutting of fabrics using Bullmer automatic cutting
                        equipment guarantees higher efficiency and quality of the finished product.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCircle} className="circle" /> <b>Printing Department </b> - we carry out silkscreen printing of any complexity using advanced
                        printing machines with subsequent fixation in the drying machine.
                    </li>
                </ul>
                <h4>Advantages of cooperation with DAKA-TEX</h4>
                <p>
                    Why do customers choose direct deliveries of cotton yarn, knitted fabric and garments from the
                    manufacturer DAKA-TEX?
                </p>
                <ul>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> We are in the TOP 10 Uzbek factories for the production of knitwear.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> We produce 300 tons of dyed fabric per month.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> 12 lines of sewing production are systematically adjusted and functioning.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> The company has hundreds of highly qualified employees.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> We produce about 500 thousand garments monthly.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> The production capacity of the print shop is more than 250 prints per month.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> 50% of customers come from referrals.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> Transparent pricing, the risk of additional costs is excluded.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> Prompt and careful delivery.</li>
                    <li><FontAwesomeIcon icon={faCircle} className="circle" /> Warranty for all goods.</li>
                </ul>
                <p>
                    DAKA-TEX is a high-tech vertically integrated factory with the authority of a recognized leader in
                    the production of yarn, knitting and dyeing of knitted fabric, sewing and printing products. Get a
                    detailed consultation and find out everything about your benefits.
                </p>
                <a href="" className="cooperation__link">cooperation</a>

                <div className="factory__numbers">
                    <div className="factory__number">
                        <span>icon</span>
                        <h3>189</h3>
                        <p>Tons of Yarn per Month</p>
                    </div>
                    <div className="factory__number">
                        <span>icon</span>
                        <h3>300</h3>
                        <p>Tons of Dyed Fabric per Month</p>
                    </div>
                    <div className="factory__number">
                        <span>icon</span>
                        <h3>400</h3>
                        <p>Thousand Units of Knitted Garments per Month</p>
                    </div>
                    <div className="factory__number">
                        <span>icon</span>
                        <h3>260</h3>
                        <p>Thousand Prints per Month</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Factory