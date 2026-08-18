import gallery from "../data/gallery";
import { useState, useEffect } from "react";

function Gallery() {

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") setSelectedImage(null);
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <section className="gallery-section" id="gallery">
                <h2 className="section-title">Gallery</h2>
                <div className="section-content">
                    <ul className="gallery-list">
                        {gallery.map((gallery_) => (
                            <li className="gallery-item" key={gallery_.id}>
                                <img src={gallery_.image} alt={gallery_.alt} className="gallery-image" onClick={() => setSelectedImage(gallery_)} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className={`lightbox-overlay ${selectedImage ? "active" : ""}`} onClick={(e) => {
                    if (e.target === e.currentTarget) setSelectedImage(null);
                }}>
                <span className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</span>
                {selectedImage && (
                    <img src={selectedImage.image} alt={selectedImage.alt} className="lightbox-image" />
                )}
            </div>
        </>
        
    );
}

export default Gallery;