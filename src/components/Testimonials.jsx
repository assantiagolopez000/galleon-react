import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import testimonials from "../data/testimonials";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            <h2 className="section-title">Testimonials</h2>
            <div className="section-content">
                <div className="slider-container swiper">
                    <div className="slider-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            loop={true}
                            spaceBetween={25}
                            grabCursor={true}
                            pagination={{ el: ".swiper-pagination", clickable: true, dynamicBullets: true }}
                            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className = "testimonials-list"
                            >
                            {
                                testimonials.map((testimonial) => (
                                    <SwiperSlide className="testimonial" key={testimonial.id}>
                                            <blockquote className="feedback">
                                                <p>{testimonial.text}</p>
                                            </blockquote>
                                            <h3 className="name">{testimonial.name}</h3>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                        <div className="swiper-pagination"></div>
                        <div className="swiper-slide-button swiper-button-prev"></div>
                        <div className="swiper-slide-button swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;