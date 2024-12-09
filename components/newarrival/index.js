// import React, { useState } from 'react';
// import { Button, Container } from 'react-bootstrap';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import Heading from '../heading';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import Link from 'next/link';
// import classes from "./index.module.scss";

// const NewArrival = ({ products,noHeading , store}) => {
//     const [favorites, setFavorites] = useState({});
//     const [selectedColor, setSelectedColor] = useState({});


//     const toggleFavorite = (id) => {
//         setFavorites((prevFavorites) => ({
//             ...prevFavorites,
//             [id]: !prevFavorites[id]
//         }));
//     };

//     const handleColorClick = (shoeId, color) => {
//         setSelectedColor((prevSelected) => ({
//             ...prevSelected,
//             [shoeId]: color
//         }));
//     };


//     return (

//             <Container>
//                 {noHeading? "":<Heading
//                     subHeading="New Arrivals"
//                     title="CREATIVE COLLECTION"
//                     subtitle="Step into style with our latest collection of shoes, designed for both comfort and elegance. Elevate your wardrobe with fresh arrivals that keep you on trend, wherever you go!"
//                 /> }
//                 <ul className={classes.arrivals}>
//                     {products.map((shoe) => {
//                         const currentImage = selectedColor[shoe.id]
//                             ? shoe.colorImages[selectedColor[shoe.id]].src
//                             : shoe.defaultImage.src;

//                         const currentAlt = selectedColor[shoe.id]
//                             ? shoe.colorImages[selectedColor[shoe.id]].alt
//                             : shoe.defaultImage.alt;

//                         return (
//                             <li key={shoe.id} className={`${store ? classes.list : ''}`}>
//                                 <div className={classes.arrivalsContent}>
//                                     <div className="img-box">
//                                         <Link href={`/store ${shoe.id}`}>
//                                             <a>
//                                                 <img
//                                                     src={currentImage}
//                                                     alt={currentAlt}
//                                                     className={classes.shoeImage}
//                                                     style={{ opacity: 0.9 }}
//                                                     onMouseEnter={(e) => {
//                                                         if (!selectedColor[shoe.id]) {
//                                                             e.target.src = shoe.hoverImage.src;
//                                                             e.target.alt = shoe.hoverImage.alt;
//                                                         }
//                                                     }}
//                                                     onMouseLeave={(e) => {
//                                                         e.target.src = currentImage;
//                                                         e.target.alt = currentAlt;
//                                                     }}
//                                                 />
//                                             </a>
//                                         </Link>
//                                     </div>
//                                     <div className={classes.content}>
//                                         <div className={classes.title}>
//                                             <span>{shoe.name}</span>
//                                             <span className='d-flex justify-content-between align-items-center gap-2'>
//                                                 <MdOutlineShoppingCart />
//                                                 <div onClick={() => toggleFavorite(shoe.id)}>
//                                                     {favorites[shoe.id] ? (
//                                                         <FaHeart  style={{color:"red"}}/>
//                                                     ) : (
//                                                         <FaRegHeart />
//                                                     )}
//                                                 </div>
//                                             </span>
//                                         </div>
//                                         <span className={classes.brand}>{shoe.brand}</span>
//                                         <div className='d-flex justify-content-between align-items-center'>
//                                             <div className={classes.colorOptions}>
//                                                 {shoe.colors.map((color, index) => (
//                                                     <span
//                                                         key={index}
//                                                         className={`${classes.colorCircle} ${selectedColor[shoe.id] === color ? classes.active : ''}`}
//                                                         style={{ backgroundColor: color }}
//                                                         onClick={() => handleColorClick(shoe.id, color)}
//                                                     ></span>
//                                                 ))}
//                                             </div>
//                                             <strong className={classes.shoePrice}>
//                                                 ${shoe.price.toFixed(2)}
//                                             </strong>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//                         );
//                     })}
//                 </ul>
//                 <div className='text-center pt-3'>
//                     <Link href="/store">
//                         <Button className="btn">Show More</Button>
//                     </Link>
//                 </div>
//             </Container>
//     );
// };

// export default NewArrival;



import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Heading from '../heading';
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from 'next/link';
import classes from "./index.module.scss";
import WishList from '../../pages/wishList';

const NewArrival = ({ products, noHeading, store, noBtn, wish }) => {
    const [favorites, setFavorites] = useState({});
    const [selectedColor, setSelectedColor] = useState({});

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id]
        }));
    };

    const handleColorClick = (shoeId, color) => {
        setSelectedColor((prevSelected) => ({
            ...prevSelected,
            [shoeId]: color
        }));
    };

    return (
        <Container>
            {noHeading ? "" : <Heading
                subHeading="New Arrivals"
                title="CREATIVE COLLECTION"
                subtitle="Step into style with our latest collection of shoes, designed for both comfort and elegance. Elevate your wardrobe with fresh arrivals that keep you on trend, wherever you go!"
            />}
            <ul className={classes.arrivals}>
                {products.map((shoe) => {
                    const currentImage = selectedColor[shoe.id]
                        ? shoe.colorImages[selectedColor[shoe.id]].src
                        : shoe.defaultImage.src;

                    const currentAlt = selectedColor[shoe.id]
                        ? shoe.colorImages[selectedColor[shoe.id]].alt
                        : shoe.defaultImage.alt;

                    return (
                        <li key={shoe.id} className={`${store ? classes.list : ''}`}>
                            <div className={classes.arrivalsContent}>
                                <div className="img-box">
                                    {/* Link to the store page */}
                                    <Link href="/product">
                                        <a>
                                            <img
                                                src={currentImage}
                                                alt={currentAlt}
                                                className={classes.shoeImage}
                                                style={{ opacity: 0.9 }}
                                                onMouseEnter={(e) => {
                                                    if (!selectedColor[shoe.id]) {
                                                        e.target.src = shoe.hoverImage.src;
                                                        e.target.alt = shoe.hoverImage.alt;
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.src = currentImage;
                                                    e.target.alt = currentAlt;
                                                }}
                                            />
                                        </a>
                                    </Link>
                                    
                                </div>
                                <div className={classes.content}>
                                    <div className={classes.title}>
                                        <span>{shoe.name}</span>
                                        {/* Wrap the cart icon in a Link to the store page */}
                                        <Link href="/myCart">
                                            <a className='d-flex justify-content-between align-items-center gap-2'>
                                                <MdOutlineShoppingCart />
                                                <div onClick={(e) => {
                                                    e.preventDefault(); // Prevent the default Link behavior
                                                    toggleFavorite(shoe.id);
                                                }}>
                                                    {favorites[shoe.id] ? (
                                                        <FaHeart style={{ color: "red" }} />
                                                    ) : (
                                                        <FaRegHeart />
                                                    )}
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                    <span className={classes.brand}>{shoe.brand}</span>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className={classes.colorOptions}>
                                            {shoe.colors.map((color, index) => (
                                                <span
                                                    key={index}
                                                    className={`${classes.colorCircle} ${selectedColor[shoe.id] === color ? classes.active : ''}`}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => handleColorClick(shoe.id, color)}
                                                ></span>
                                            ))}
                                        </div>
                                        <strong className={classes.shoePrice}>
                                            ${shoe.price.toFixed(2)}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                           {wish &&  <span className={classes.cross}>
                                        <img src='/images/cross.png'></img>
                                    </span>}
                        </li>
                    );
                })}
            </ul>
            {noBtn ? "" : <div className='text-center pt-3'>
                <Link href="/store">
                    <Button className="btn">Show More</Button>
                </Link>
            </div>}

        </Container>
    );
};

export default NewArrival;



