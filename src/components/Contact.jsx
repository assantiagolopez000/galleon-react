import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({name: "", email: "", message: ""});

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    async function handleSubmit(e) {
        e.preventDefault() // stops the browser default full page reload form behavior 

        const response = await fetch("https://galleon-api-production.up.railway.app/api/contact", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData),
        });

        // console.log(response);
        if (response.ok) {
            setFormData({ name:"", email:"", message:""});
            alert("Message sent!"); // simple for now — we can build a nicer UI message later
        } else {
            alert("Something went wrong. Please try again.");
        }
    }


    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Contact Us</h2>
            <div className="section-content">
                <ul className="contact-info-list">
                    <li className="contact-info">
                        <i className="fa-solid fa-location-crosshairs" ></i>
                        <p>Based in Naples, Florida</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-regular fa-envelope"></i>
                        <p>galleonlandscaping@gmail.com</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-solid fa-phone"></i>
                        <p>(239)-206-0386</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-regular fa-clock"></i>
                        <p>Monday - Saturday: 8:00 AM - 6:00 PM<br></br>Sunday: Closed</p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-solid fa-globe"></i>
                        <p><a href="https://www.galleonlandscaping.com">www.galleonlandscaping.com</a></p>
                    </li>
                </ul>
                
                <form name="contact" method="POST" className="contact-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" defaultValue="contact"/>
                    <p className="hidden" style={{display: "none"}}>
                        <label>Don't fill this out if you're human: <input name="bot-field"/></label>
                    </p>

                    <input type="text" name="name" placeholder="Your Name" className="form-input" value={formData.name} onChange={handleChange} required/>
                    <input type="email" name="email" placeholder="Your Email" className="form-input" value={formData.email} onChange={handleChange} required/>
                    <textarea name="message" placeholder="Your message" className="form-input" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                
            </div>
        </section>
    )
};

export default Contact;