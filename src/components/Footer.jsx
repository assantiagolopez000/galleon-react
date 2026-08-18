import socialLinks from "../data/socialLinks";

function Footer() {
    return (
        <footer className="footer-section">
            <div className="section-content">
                <p className="copyright-text">&copy; 2026 Galleon Landscaping</p>
                
                <div className="social-link-list">
                    {
                        socialLinks.map((socialLink) => (
                            
                            <a href={socialLink.url} className="social-link" key={socialLink.id}><i className={socialLink.font_awsome_icon}></i></a>
                            
                        ))
                    }
                </div>

                <p className="policy-text">
                    <a href="#" className="policy-link">Satisfaction Guarantee</a>
                    <span className="separator">|</span>
                    <a href="#" className="policy-link">Licensed & Insured</a>
                </p>
            </div>
        </footer>
    );

}

export default Footer;