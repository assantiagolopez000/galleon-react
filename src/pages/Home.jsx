import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import ServiceArea from "../components/ServiceArea";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <ServiceArea />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;