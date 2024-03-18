 const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="container">
                <h2 className="title">Contact Us</h2>
                <div className="contact-us__cards">
                    <div className="contact-us__card">
                        <form action="">
                            <h2>Send a message, ask a question</h2>
                            <input type="text" placeholder="First name"/>
                            <input type="number" placeholder="+99899 0000000"/>
                            <input type="email" placeholder="E-mail"/>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="contact-us__card">
                        <h4>Map</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

 export default ContactUs