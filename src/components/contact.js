import { useState } from 'react';
import '../style/aboutContact.css'
import axios from 'axios';
import url from '../api/api';

function Contact() {

    const [contact, addContact] = useState({});

    const postContact = (data) => {
        axios.post(`${url}/contact`, data).then(
            (response) => {
                console.log(response);
                alert("message send successfully....");
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const contactForm = (e) => {
        console.log(contact)
        postContact(contact)
        e.preventDefault();
    }


    return (
        <div>

            <div className="contact-us-content">
                <div className="nav-content">
                    <h1>Contact Us</h1>

                </div>
            </div>


            <div id="contact-us-page-content">
                <div id="contact-content">

                    <h4 className="h4-title">Get in touch</h4>
                    <hr className="hr-line" />

                    <div className="from-address">
                        <div className="address">
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

                        <div className="form">
                            <form onSubmit={contactForm} method='post'>
                                <input type="text" name="name" placeholder="Name" className="input" onChange={(e) => { addContact({ ...contact, name: e.target.value }) }}   required />
                                <br />
                                <input type="email" name="email" placeholder="Email" className="input"  onChange={(e) => { addContact({ ...contact, email: e.target.value }) }} required />
                                <br />
                                <textarea className="textarea" type="text" name="message"  style={ {height: '150px'}} onChange={(e) => { addContact({ ...contact, message: e.target.value }) }} rows="4"
                                    placeholder="Message" required></textarea>
                                <br />
                                <input className="btn" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>

                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0337063758266!2d-73.99362322426808!3d40.739283835945244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b24b424f%3A0x618680d3f8c2f773!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sin!4v1695837618158!5m2!1sen!2sin"
                        width="600" height="450" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>

        </div>
    )
    //}
}

export default Contact;