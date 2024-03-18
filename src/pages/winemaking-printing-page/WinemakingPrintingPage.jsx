export const WinemakingPrintingPage = () => {
    return (
        <main className="main">
            <section className="printing">
                <div className="container">
                    <h2>Printing Department</h2>
                    <p>
                        One of the new divisions of the DAKA-TEX factory is the print shop.
                    </p>
                    <p>
                        The workshop is equipped with two silk-screen printing machines for 12 and 16 colors from ROQ
                        (Portugal). After application, the print is fixed in tunnel drying equipment from Ansal
                        (Turkey).
                    </p>
                    <p>
                        Thanks to advanced printing equipment, the DAKA-TEX factory is able to produce products with the
                        most complex prints of various types.
                    </p>
                    <div className="printing__cards">
                        <div className="printing__card">
                            <img src="/src/assets/printing-1.jpg" alt=""/>
                        </div>
                        <div className="printing__card">
                            <img src="/src/assets/printing-2.jpg" alt=""/>
                        </div>
                        <div className="printing__card">
                            <img src="/src/assets/printing-3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}