import services from "../data/services"

function Services() {
    return (
        <section className="services-section" id="services">
            <h2 className="section-title">Our Services</h2>
            <div className="section-content">
                <ul className="services-list">
                    {services.map((service) => (
                        <li className="services-item" key={service.id}>
                            <img src={service.image} alt={service.alt} className="services-image"/>
                            <h3 className="name">{service.name}</h3>
                            <p className="text">{service.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Services;