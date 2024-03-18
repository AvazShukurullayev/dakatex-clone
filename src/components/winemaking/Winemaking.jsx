import "./Winemaking.css"

const Winemaking = () => {
    return (
        <section className="winemaking">
            <div className="container">
                <h2 className="title">Winemaking</h2>
                <div className="winemaking__cards">
                    <div className="winemaking__card">
                        <img src="/src/assets/spinning-mill-1.jpg" alt="spinning-mill-1"/>
                        <h4><a href="">Spinning mill</a></h4>
                    </div>
                    <div className="winemaking__card">
                        <img src="/src/assets/spinning-mill-2.jpg" alt="spinning-mill-1"/>
                        <h4><a href="">Knitting shop</a></h4>
                    </div>
                    <div className="winemaking__card">
                        <img src="/src/assets/spinning-mill-3.jpg" alt="spinning-mill-1"/>
                        <h4><a href="">Dyeing Department</a></h4>
                    </div>
                    <div className="winemaking__card">
                        <img src="/src/assets/spinning-mill-4.jpg" alt="spinning-mill-1"/>
                        <h4><a href="">Cutting Department</a></h4>
                    </div>
                    <div className="winemaking__card">
                        <img src="/src/assets/spinning-mill-5.jpg" alt="spinning-mill-1"/>
                        <h4><a href="">Printing Department</a></h4>
                    </div>
                    <div className="winemaking__card">
                        <img src="/src/assets/spinning-mill-6.jpg" alt="spinning-mill-1"/>
                        <h4><a href="">Garment factory</a></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Winemaking