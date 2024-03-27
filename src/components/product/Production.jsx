import "./Production.css"

const Production = () => {
    return (
        <section>
            <div className="container">
                <h2 className="title">Production</h2>
                {/*Todo: card ni component qilish kere*/}
                <div className="winemaking__cards">
                    <div className="winemaking__card">
                        <img src="/src/assets/product-1.png" alt="Yarn"/>
                        <h4><a href="">Yarn</a></h4>
                    </div>
                    <div className="winemaking__card">
                        <img src="/src/assets/product-2.png" alt="Knitting Department"/>
                        <h4><a href="">Knitting Department</a></h4>
                    </div>
                    <div className="winemaking__card">
                        <img src="/src/assets/product-3.png" alt="Finished goods"/>
                        <h4><a href="">Finished goods</a></h4>
                    </div>
                </div>
            </div>
            <div className="production__cards">
                <div className="production__card bg"></div>
                <div className="production__card">
                    <h2 className="title production__card-title">Why us?</h2>
                    <div className="production__infos">
                        <div className="production__info">
                            <div className="production__info-icon"></div>
                            <div className="production__info-desc">
                                <h4>Right on Time</h4>
                                <p>
                                    Having worked in this industry for over XNUMX years, we are well aware that timing
                                    is one of the most crucial criteria!
                                </p>
                            </div>
                        </div>
                        <div className="production__info">
                            <div className="production__info-icon"></div>
                            <div className="production__info-desc">
                                <h4>New Technologies</h4>
                                <p>
                                    Modern technologies and innovative approach are applied in our production with
                                    continuous improvement. We work to minimise the human factor and improve the quality
                                    of our products constantly.
                                </p>
                            </div>
                        </div>
                        <div className="production__info">
                            <div className="production__info-icon"></div>
                            <div className="production__info-desc">
                                <h4>Full Vertical Integration</h4>
                                <p>
                                    Daka-Tex is a system of factories, including yarn spinning, knitting, dyeing,
                                    printing and sewing of finished garments. This allows for greater quality control,
                                    while always delivering on schedule.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Production