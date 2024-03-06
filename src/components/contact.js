import '../style/aboutContact.css'

function Contact() {
    return(
        <div>
            
            <div class="contact-us-content">
        <div class="nav-content">
            <h1>Contact Us</h1>

        </div>
    </div>


    <div id="contact-us-page-content">
        <div id="contact-content">

            <h4 class="h4-title">Get in touch</h4>
            <hr class="hr-line"/>

            <div class="from-address">
                <div class="address">
                    <h6>Phone :</h6>
                    <p>981-454-6868</p>
                    <h6>Email :</h6>
                    <p>contact@info.com</p>
                    <h6>Address :</h6>
                    <p>
                    <address>
                        123 Fifth Avenue, New York, NY 10160
                    </address>
                    </p>

                    <div class="icon">
                        <a href="#" class="fa fa-twitter social-icon"></a>
                        <a href="#" class="fa fa-instagram social-icon"></a>
                        <a href="#" class="fa fa-youtube social-icon"></a>
                    </div>
                </div>

                <div class="form">
                    <form action="login.html" method="get">
                        <input type="text" name="name" placeholder="Name" class="input" required />
                        <br/>
                        <input type="email" name="email" placeholder="Email" class="input" required/>
                        <br/>
                        <textarea class="textarea" type="text" name="message" className="input" rows="4"
                            placeholder="Message" required></textarea>
                        <br/>
                        <input class="btn" type="submit"/>
                    </form>
                </div>
            </div>
        </div>

        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0337063758266!2d-73.99362322426808!3d40.739283835945244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b24b424f%3A0x618680d3f8c2f773!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sin!4v1695837618158!5m2!1sen!2sin"
                width="600" height="450"  allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>

        </div>
    )
}

export default Contact;