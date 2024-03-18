import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Info.css"
import {faShirt, faSun} from "@fortawesome/free-solid-svg-icons";

const Info = () => {

    return (
        <section className="info">
            <div className="container">
                <h2 className="info__title">
                    Attention! DAKA-TEX is looking for regional dealers in Russia. Leave an application by filling out
                    form on the site.
                </h2>
                <div className="info__cards">
                    <div className="info__card">
                        <div>
                            <FontAwesomeIcon icon={faSun}/>
                            <h4 className="card__title">Knitting Department</h4>
                        </div>
                        <p className="card__description">
                            We produce all kinds of knitted fabric. <b>Minimum order quantity - 10000 kg </b>(1000 kg
                            per fabric type, 200 kg per color).
                        </p>
                    </div>
                    <div className="info__card">
                        <div>
                            <FontAwesomeIcon icon={faShirt}/>
                            <h4 className="card__title">Finished goods</h4>
                        </div>
                        <p className="card__description">
                            We carry out all stages of the production of finished products on a turnkey basis. <b>The
                            minimum order quantity is 10000 pcs.</b>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info