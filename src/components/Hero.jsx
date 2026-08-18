function Hero() {
    return (
        <section className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/videos/galleon-landscaping-video_shortened.mp4" type="video/mp4"/>
            <source src="/videos/galleon-landscaping-video_shortened.webm" type="video/webm"/>
        </video>
        <div className="hero-overlay"></div>

        <div className="section-content">
            <div className="hero-details">
                <h2 className="title">Galleon Landscaping</h2>
                <h3 className="subtitle">Your Landscape &mdash; Smooth Sailing, Every Season</h3>
                <p className="description">At Galleon Landscaping, every project starts with a real commitment to quality and putting the customer first. Like a well-crafted ship navigating open waters, we approach your lawn with precision and care. From routine maintenance to full landscape upgrades, our team keeps your outdoor space vibrant and Florida-ready. Your property gets more than a service. It gets a team that treats it like their own.</p>
                <div className="buttons">
                    <a href="tel:2392060386" className="button free-estimate">Get a Free Estimate</a>
                    <a href="#contact" className="button contact-us">Contact Us</a>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Hero;