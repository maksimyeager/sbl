import ImageSwiper from "./ImageSwiper";

import image1 from "./../assets/banner/image-1.jpg";
import image2 from "./../assets/banner/image-2.jpg";
import image3 from "./../assets/banner/image-3.jpg";

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
