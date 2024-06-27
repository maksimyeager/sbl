import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const ImageSwiper = ({ images }) => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Autoplay]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image.src} alt={image.alt} className="dimmed" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

ImageSwiper.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ImageSwiper;
