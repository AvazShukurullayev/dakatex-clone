export const WinemakingCuttingPage = () => {
    return (
        <main className="main">
            <section className="cutting">
                <div className="container">
                    <h2>Cutting Department</h2>
                    <p>
                        Cutting the fabric is an important process in the production of finished garments. The process
                        begins with the development of patterns by our designers, after which the way the patterns are
                        laid out on the canvas is automatically calculated in a special computer-aided design system
                        from Gerber Technology (Germany). This is how we achieve the most efficient web consumption per
                        unit of finished product.
                    </p>
                    <p>
                        The cutting shop is equipped with automatic spreading machines from Ozbilim (Turkey), an
                        advanced automatic cutting machine from Bullmer (Germany) and a belt cutting machine from Astron
                        (Turkey).
                    </p>
                    <div className="cutting__cards">
                        <div className="cutting__card">
                            <img src="/src/assets/cutting-1.jpg" alt=""/>
                        </div>
                        <div className="cutting__card">
                            <img src="/src/assets/cutting-2.jpg" alt=""/>
                        </div>
                        <div className="cutting__card">
                            <img src="/src/assets/cutting-3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}