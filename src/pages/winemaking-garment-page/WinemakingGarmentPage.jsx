export const WinemakingGarmentPage = () => {
    return (
        <main className="main">
            <section className="garment">
                <div className="container">
                    <h2>Garment factory</h2>
                    <p>
                        The DAKA-TEX sewing factory has 14 full-fledged threads, equipped with advanced sewing equipment
                        of a full cycle from JUKI (Japan).
                    </p>
                    <p>
                        The sewing complex of the DAKA-TEX factory includes an experimental workshop whose tasks include
                        the development of patterns, the layout of patterns using the computer-aided design system of
                        Gerber Technology (Germany), the development and creation of product samples for customers, work
                        on improving the technical parameters of products, testing, etc. .
                    </p>
                    <div className="garment__cards">
                        <div className="garment__card">
                            <img src="/src/assets/garment-1.jpg" alt=""/>
                        </div>
                        <div className="garment__card">
                            <img src="/src/assets/garment-2.jpg" alt=""/>
                        </div>
                        <div className="garment__card">
                            <img src="/src/assets/garment-3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}