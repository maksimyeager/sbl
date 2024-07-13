import ImageSwiper from "./ImageSwiper";

import image1 from "./../assets/about-us.jpg";
import image2 from "./../assets/our-projects.jpg";
import image3 from "./../assets/our-services.jpg";

const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' }
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
