import ImageSwiper from "./ImageSwiper";

const images = [
    { src: '/src/assets/about-us.jpg', alt: 'About Us' },
    { src: '/src/assets/our-projects.jpg', alt: 'Our Project' },
    { src: '/src/assets/our-services.jpg', alt: 'Our Services' }
  ];

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner--overlay"></div>
            <ImageSwiper images={images} />
        </div>
    );
};

export default Banner;
