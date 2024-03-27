import "./ContactUs.css"

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="container">
                <h2 className="title">Contact Us</h2>
                <div className="contact-us__cards">
                    <div className="contact-us__card">
                        <form action="" className="contact-us__form">
                            <h4>Send a message, ask a question</h4>
                            <input type="text" placeholder="First name" id="name"/>
                            <input type="number" placeholder="+99899 0000000" id="phoneNumber"/>
                            <input type="email" placeholder="E-mail" id="email"/>
                            <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Message"></textarea>
                            <button type="submit" className="contact-us__form-submit">Send</button>
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