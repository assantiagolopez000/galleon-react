import socialLinks from "../data/socialLinks";

function About() {
    return (
        <section className="about-section" id="about">
            <div className="section-content">
                <div className="about-image-wrapper">
                    <img src="/images/header_galleon_logo.png" alt="About" className="about-image" />
                </div>
                <div className="about-details">
                    <h2 className="section-title">About Us</h2>
                     <p className="text">
                        “Galleon Landscaping is about doing outdoor care the right way, with precision and craftsmanship behind every project. We take the same steady approach as a well-built ship, pairing solid technique with a customer experience built on honesty and respect.
                        We create landscapes that look intentional and stay well maintained, giving Florida homeowners a level of service they can count on. Every yard gets real attention, shaped with care and kept looking its best over time.
                        If quality matters to you, Galleon Landscaping is the team that delivers it.”
                    </p>
                    <div className="social-link-list">
                        {socialLinks.map((socialLink) => (
                            <a key={socialLink.id} href={socialLink.url} className="social-link"><i className={socialLink.font_awsome_icon} ></i></a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;