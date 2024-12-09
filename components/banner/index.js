import React from 'react';
import Slider from 'react-slick';
import Heading from '../heading';
import classes from "./index.module.scss";


const BannerSlider = () => {
    const settings = {
        centerMode: false,
        centerPadding: "0",
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        dots: false,
        speed: 1000,
    };

    const slidesData = [
        {
            text: "NEW ARRIVALS",
            title: "CUSTOM LUXURY FOOTWARE",
            subtitle: "Discover our style and comfortable shoes, perfect for every occasion, crafted with exceptional quality and flair.",
            btnText: "Shop Now",
            bgImg: 'images/banner1.jpg',
            bgAlt: 'Banner showing custom luxury footwear',
            href: '/store',
            white: true,
            subtext: true,
            btnWhite: true,
            mainText: true
        },
        {
            text: "NEW ARRIVALS",
            title: "HIGH-FASHION FOOTWARE",
            subtitle: "Discover our style and comfortable shoes, perfect for every occasion, crafted with exceptional quality and flair.",
            btnText: "Shop Now",
            bgImg: 'images/banner2.jpg',
            bgAlt: 'Banner showing high-fashion footwear',
            href: '/store',
            brown: true,
        },
        {
            text: "NEW ARRIVALS",
            title: "EXCLUSIVE LUXURY SHOES",
            subtitle: "Discover our style and comfortable shoes, perfect for every occasion, crafted with exceptional quality and flair.",
            btnText: "Shop Now",
            bgImg: 'images/banner3.jpg',
            bgAlt: 'Banner showing exclusive luxury shoes',
            href: '/store',
            black: true,
            btnBlack: true
        },
    ];

    return (
        <Slider {...settings}>
            {slidesData.map((slide, index) => (
                <div key={index}>
                   <div
                        style={{ backgroundImage: `url(${slide.bgImg})` }}
                        className={classes.BannerSlider}
                        role="img"
                        aria-label={slide.bgAlt} 
                    >
                        <div className={classes.textBox}>
                            <Heading
                                button
                                heading
                                text={slide.text}
                                title={slide.title}
                                subtitle={slide.subtitle}
                                btnText={slide.btnText}
                                href={slide.href}
                                white={slide.white}
                                brown={slide.brown}
                                black={slide.black}
                                subtext={slide.subtext}
                                btnWhite={slide.btnWhite}
                                btnBlack={slide.btnBlack}
                                mainText={slide.mainText}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default BannerSlider;
