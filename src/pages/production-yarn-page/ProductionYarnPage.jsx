import "./ProductionYarnPage.css"

export const ProductionYarnPage = () => {
    return (
        <main className="main">
            <section className="production__yarn">
                <div className="container">
                    <h2 className="title">Yarn</h2>
                    <div className="production__yarn-cards">
                        <div className="production__yarn-card">
                            <img src="/src/assets/yarn-1.jpg" alt="yarn-1"/>
                            <p>Card yarn Nm 34 / 1 (Ne 20 / 1)</p>
                        </div>
                        <div className="production__yarn-card">
                            <img src="/src/assets/yarn-2.jpeg" alt="yarn-2"/>
                            <p>Card yarn Nm 34 / 1 (Ne 20 / 1)</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}