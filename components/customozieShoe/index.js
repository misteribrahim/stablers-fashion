// import React, { useState, useEffect } from "react";
// import { Button, Col, Container, Row, Form } from "react-bootstrap";
// import { AiOutlineMinus, AiOutlinePlus, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import Link from "next/link";
// import classes from "./index.module.scss";
// import Heading from "../heading";
// import NewArrival from "../newarrival";
// import { IoClose } from "react-icons/io5";
// import SizeGuide from "../sizeguide";

// const CustomozieShoe = () => {
//     const [quantity, setQuantity] = useState(1);
//     const [favorites, setFavorites] = useState({});
//     const [activeColorIndex, setActiveColorIndex] = useState(0);
//     const [selectedSize, setSelectedSize] = useState(null);
//     const [SizeGuideModalShow, setSizeGuideModalShow] = useState(false);

//     const unavailableSizes = ["UK 6", "UK 7.5"];
//     const colorImages = [
//         ["/images/fff.png", "/images/arrival11.png"],
//         ["/images/shoes2.png", "/images/shoes2.png"],
//         ["/images/shoes3.png", "/images/shoes3.png"],
//         ["/images/shoes4.png", "/images/shoes4.png"],
//     ];
//     const sizes = ["UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8"];
//     const socialIcons = [
//         { imgSrc: "/images/whatsapp.png", link: "/" },
//         { imgSrc: "/images/facebook.png", link: "/" },
//         { imgSrc: "/images/linkedin.png", link: "/" },
//     ];

//     useEffect(() => {
//         setFavorites(Array(colorImages[0].length).fill(false));
//     }, []);

//     const handleColorClick = (index) => {
//         setActiveColorIndex(index);
//     };

//     const handleQuantityChange = (type) => {
//         setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
//     };


//     const handleSizeClick = (size) => {
//         if (!unavailableSizes.includes(size)) setSelectedSize(size);
//     };
//     const products = [
//         {
//             id: 1,
//             name: "Brown Loafers",
//             brand: "Stylish Footware",
//             price: 180.00,
//             colors: ["#000", "#7b5b4d", "#7a716d"],
//             colorImages: {
//                 "#000": {
//                     src: "/images/black.png",
//                     alt: "Black loafers"
//                 },
//                 "#7b5b4d": {
//                     src: "/images/brown.png",
//                     alt: "Brown loafers"
//                 },
//                 "#7a716d": {
//                     src: "/images/gray.png",
//                     alt: "Gray loafers"
//                 }
//             },
//             defaultImage: {
//                 src: "/images/arrival1.png",
//                 alt: "Brown loafers default view"
//             },
//             hoverImage: {
//                 src: "/images/arrival11.png",
//                 alt: "Brown loafers hover view"
//             }
//         },
//         {
//             id: 2,
//             name: "Brown Loafers",
//             brand: "Stylish Footware",
//             price: 180.00,
//             colors: ["#000", "#7b5b4d", "#7a716d"],
//             colorImages: {
//                 "#000": {
//                     src: "/images/black.png",
//                     alt: "Black loafers"
//                 },
//                 "#7b5b4d": {
//                     src: "/images/brown.png",
//                     alt: "Brown loafers"
//                 },
//                 "#7a716d": {
//                     src: "/images/gray.png",
//                     alt: "Gray loafers"
//                 }
//             },
//             defaultImage: {
//                 src: "/images/arrival2.png",
//                 alt: "Brown loafers default view"
//             },
//             hoverImage: {
//                 src: "/images/arrival22.png",
//                 alt: "Brown loafers hover view"
//             }
//         },
//         {
//             id: 3,
//             name: "Brown Loafers",
//             brand: "Stylish Footware",
//             price: 180.00,
//             colors: ["#000", "#7b5b4d", "#7a716d"],
//             colorImages: {
//                 "#000": {
//                     src: "/images/black.png",
//                     alt: "Black loafers"
//                 },
//                 "#7b5b4d": {
//                     src: "/images/brown.png",
//                     alt: "Brown loafers"
//                 },
//                 "#7a716d": {
//                     src: "/images/gray.png",
//                     alt: "Gray loafers"
//                 }
//             },
//             defaultImage: {
//                 src: "/images/arrival3.png",
//                 alt: "Brown loafers default view"
//             },
//             hoverImage: {
//                 src: "/images/arrival33.png",
//                 alt: "Brown loafers hover view"
//             }
//         },
//         {
//             id: 4,
//             name: "Brown Loafers",
//             brand: "Stylish Footware",
//             price: 180.00,
//             colors: ["#000", "#7b5b4d", "#7a716d"],
//             colorImages: {
//                 "#000": {
//                     src: "/images/black.png",
//                     alt: "Black loafers"
//                 },
//                 "#7b5b4d": {
//                     src: "/images/brown.png",
//                     alt: "Brown loafers"
//                 },
//                 "#7a716d": {
//                     src: "/images/gray.png",
//                     alt: "Gray loafers"
//                 }
//             },
//             defaultImage: {
//                 src: "/images/arrival4.png",
//                 alt: "Brown loafers default view"
//             },
//             hoverImage: {
//                 src: "/images/arrival4.png",
//                 alt: "Brown loafers hover view"
//             }
//         },
//         {
//             id: 5,
//             name: "Brown Loafers",
//             brand: "Stylish Footware",
//             price: 180.00,
//             colors: ["#000", "#7b5b4d", "#7a716d"],
//             colorImages: {
//                 "#000": {
//                     src: "/images/black.png",
//                     alt: "Black loafers"
//                 },
//                 "#7b5b4d": {
//                     src: "/images/brown.png",
//                     alt: "Brown loafers"
//                 },
//                 "#7a716d": {
//                     src: "/images/gray.png",
//                     alt: "Gray loafers"
//                 }
//             },
//             defaultImage: {
//                 src: "/images/arrival5.png",
//                 alt: "Brown loafers default view"
//             },
//             hoverImage: {
//                 src: "/images/arrival5.png",
//                 alt: "Brown loafers hover view"
//             }
//         }
//     ];

//     return (
//         <>
//         <section className="py-5">
//             <Container>
//                 <Row>
//                     <Col lg={7}>
//                         <div className="img-box">
//                             <img src="/images/fff.png" alt="Selected shoe" />
//                         </div>
//                     </Col>
//                     <Col lg={5} style={{ position: "relative", overflow: "hidden" }}>
//                         <div className={classes.productDetails}>
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <h2>Customize This Shoe</h2>
//                                 <Link href="/product">
//                                     <a><IoClose  size={20} className="text-dark"/></a>
//                                 </Link>
//                             </div>
//                             <hr />

//                             <div className={classes.colorsSection}>
//                                 <p>Colors</p>
//                                 {colorImages.map((_, index) => (
//                                     <img
//                                         key={index}
//                                         src={colorImages[index][0]}
//                                         alt={`Color option`}
//                                         className={classes.colorOption}
//                                         onClick={() => handleColorClick(index)}
//                                     />
//                                 ))}
//                             </div>
//                             <div className={classes.colorsSection}>
//                                 <p>Material</p>
//                                 {colorImages.map((_, index) => (
//                                      <img
//                                      key={index}
//                                      src={colorImages[index][0]}
//                                      alt={`Color option`}
//                                      className={classes.colorOption}
//                                      onClick={() => handleColorClick(index)}
//                                  />
//                                 ))}
//                             </div>
//                             <div className={classes.colorsSection}>
//                                 <p>Extensions</p>
//                                 {colorImages.map((_, index) => (
//                                      <img
//                                      key={index}
//                                      src={colorImages[index][0]}
//                                      alt={`Color option`}
//                                      className={classes.colorOption}
//                                      onClick={() => handleColorClick(index)}
//                                  />
//                                 ))}
//                             </div>
//                             <div className={classes.sizesSection}>
//                     <div className="d-flex justify-content-between">
//                       <p>Size</p>
//                       <span className={classes.guide} onClick={() => setSizeGuideModalShow(true)}>
//                         View size guide
//                       </span>
//                     </div>
//                     {sizes.map((size) => (
//                       <Button
//                         key={size}
//                         className={`${classes.sizeBtn} ${unavailableSizes.includes(size) ? classes.unavailable : ''} ${selectedSize === size ? classes.selected : ''
//                           }`}
//                         disabled={unavailableSizes.includes(size)}
//                         onClick={() => handleSizeClick(size)}
//                       >
//                         {size}
//                       </Button>
//                     ))}
//                   </div>
//                   <hr />
//                   <p>Quantity</p>
//                   <div className="d-flex align-items-center gap-4 mb-3">
//                     <div className={classes.quantityControl}>
//                       <Button onClick={() => handleQuantityChange("decrease")}>
//                         <AiOutlineMinus />
//                       </Button>
//                       <Form.Control
//                         type="text"
//                         value={quantity}
//                         readOnly
//                         className={classes.quantityInput}
//                       />
//                       <Button onClick={() => handleQuantityChange("increase")}>
//                         <AiOutlinePlus />
//                       </Button>
//                     </div>
//                   </div>
//                   <Form >
//                         <Form.Group className="mb-3 form-group" controlId="message">
//                             <Form.Control
//                                 as="textarea"
//                                 placeholder="Add Additional Notes Here"
//                                 name="message"
//                                 rows={4}
//                                 className="text-input"
//                             />
//                         </Form.Group>
                        
//                         <Link href="">
//                         <Button className="btn w-100">Add To Cart</Button>
//                     </Link>
//                     </Form>
//                             <div className={classes.socialIcons}>
//                                 <p>Share</p>
//                                 {socialIcons.map((icon, index) => (
//                                     <Link href={icon.link} key={index}>
//                                         <a>
//                                             <img
//                                                 src={icon.imgSrc}
//                                                 alt={`Social icon ${index + 1}`}
//                                                 style={{ width: "30px", height: "30px" }}
//                                             />
//                                         </a>
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <Heading
//                             subHeading="Similar Items"
//                             title="YOU MAY ALSO LIKE"
//                         />
//                         <NewArrival products={products} noHeading noBtn />
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//         <SizeGuide show={SizeGuideModalShow} onHide={() => setSizeGuideModalShow(false)} />
//         </>
//     );
// };

// export default CustomozieShoe;


// import React, { useEffect, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html, AxesHelper } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// const Loader = () => (
//     <div
//         style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             width: "100vw",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             zIndex: 1,
//         }}
//     >
//         <div>Loading...</div>
//     </div>
// );

// const Model = () => {
//     const [model, setModel] = useState(null);

//     useEffect(() => {
//         const loader = new GLTFLoader();
//         const dracoLoader = new DRACOLoader();
//         dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"); // Draco decoder files
//         loader.setDRACOLoader(dracoLoader);

//         loader.load(
//             "/modal3/shoe-draco.glb",
//             (gltf) => {
//                 console.log("Model loaded successfully:", gltf.scene);
//                 setModel(gltf.scene); // Set the model
//             },
//             undefined,
//             (error) => {
//                 console.error("Error loading the model:", error);
//             }
//         );

//         // Clean up DRACOLoader on unmount
//         return () => {
//             dracoLoader.dispose();
//         };
//     }, []);

//     if (!model) {
//         return (
//             <Html center>
//                 <Loader />
//             </Html>
//         );
//     }

//     return (
//         <>
//             <primitive object={model} scale={[0.1, 0.1, 0.1]} />
//             <axesHelper args={[5]} /> {/* Visualize the axes */}
//         </>
//     );
// };

// const RenderPage = () => {
//     return (
//         <div style={{ width: "100%", height: "100vh" }}>
//             <Canvas camera={{ position: [0, 0, 5] }}>
//                 <ambientLight intensity={0.5} />
//                 <OrbitControls enableZoom={true} />
//                 <Suspense fallback={<Html center><Loader /></Html>}>
//                     <Model />
//                 </Suspense>
//             </Canvas>
//         </div>
//     );
// };

// export default RenderPage;

// import React, { useEffect, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html, AxesHelper } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// const Loader = () => (
//     <div
//         style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             width: "100vw",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             zIndex: 1,
//         }}
//     >
//         <div>Loading...</div>
//     </div>
// );

// const Model = ({ selectedPart, selectedColor, onPartsLoaded }) => {
//     const [model, setModel] = useState(null);

//     useEffect(() => {
//         const loader = new GLTFLoader();
//         const dracoLoader = new DRACOLoader();
//         dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
//         loader.setDRACOLoader(dracoLoader);

//         loader.load(
//             "/modal3/shoe-draco.glb",
//             (gltf) => {
//                 console.log("Model loaded successfully:", gltf.scene);
//                 setModel(gltf.scene);

//                 // Extract part names dynamically and pass them to parent
//                 const parts = [];
//                 gltf.scene.traverse((child) => {
//                     if (child.isMesh) {
//                         parts.push({ name: child.name, displayName: child.name });
//                     }
//                 });
//                 onPartsLoaded(parts);
//             },
//             undefined,
//             (error) => {
//                 console.error("Error loading the model:", error);
//             }
//         );

//         return () => {
//             dracoLoader.dispose();
//         };
//     }, [onPartsLoaded]);

//     useEffect(() => {
//         if (model && selectedPart && selectedColor) {
//             const part = model.getObjectByName(selectedPart);
//             if (part && part.material) {
//                 part.material.color.set(selectedColor);
//             }
//         }
//     }, [model, selectedPart, selectedColor]);

//     if (!model) {
//         return (
//             <Html center>
//                 <Loader />
//             </Html>
//         );
//     }

//     return (
//         <>
//             <primitive object={model} scale={[0.1, 0.1, 0.1]} />
//             <axesHelper args={[5]} />
//         </>
//     );
// };

// const RenderPage = () => {
//     const [selectedPart, setSelectedPart] = useState(null);
//     const [selectedColor, setSelectedColor] = useState("#ff0000");
//     const [parts, setParts] = useState([]);

//     const handlePartClick = (partName) => {
//         setSelectedPart(partName);
//     };

//     const handleColorChange = (event) => {
//         setSelectedColor(event.target.value);
//     };

//     const handlePartsLoaded = (loadedParts) => {
//         setParts(loadedParts);
//         console.log("Loaded parts:", loadedParts);
//     };

//     return (
//         <div style={{ display: "flex", height: "100vh" }}>
//             {/* Sidebar for selecting parts and colors */}
//             <div style={{ width: "20%", padding: "1rem", backgroundColor: "#f7f7f7" }}>
//                 <h3>Shoe Parts</h3>
//                 <ul style={{ listStyleType: "none", padding: 0 }}>
//                     {parts.map((part) => (
//                         <li
//                             key={part.name}
//                             style={{
//                                 cursor: "pointer",
//                                 padding: "0.5rem",
//                                 backgroundColor: selectedPart === part.name ? "#e0e0e0" : "transparent",
//                             }}
//                             onClick={() => handlePartClick(part.name)}
//                         >
//                             {part.displayName}
//                         </li>
//                     ))}
//                 </ul>

//                 <h3>Color</h3>
//                 <input
//                     type="color"
//                     value={selectedColor}
//                     onChange={handleColorChange}
//                     style={{ width: "100%", height: "2rem", border: "none", cursor: "pointer" }}
//                 />
//             </div>

//             {/* 3D Canvas */}
//             <div style={{ width: "80%" }}>
//                 <Canvas camera={{ position: [0, 0, 5] }}>
//                     <ambientLight intensity={0.5} />
//                     <OrbitControls enableZoom={true} />
//                     <Suspense fallback={<Html center><Loader /></Html>}>
//                         <Model
//                             selectedPart={selectedPart}
//                             selectedColor={selectedColor}
//                             onPartsLoaded={handlePartsLoaded}
//                         />
//                     </Suspense>
//                 </Canvas>
//             </div>
//         </div>
//     );
// };

// export default RenderPage;






// import React, { useEffect, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// const Loader = () => (
//     <div
//         style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             width: "100vw",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             zIndex: 1,
//         }}
//     >
//         <div>Loading...</div>
//     </div>
// );

// const Model = ({ selectedPart, selectedColor, onPartsLoaded }) => {
//     const [model, setModel] = useState(null);

//     useEffect(() => {
//         const loader = new GLTFLoader();
//         const dracoLoader = new DRACOLoader();
//         dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
//         loader.setDRACOLoader(dracoLoader);

//         loader.load(
//             "/modal3/shoe-draco.glb",
//             (gltf) => {
//                 console.log("Model loaded successfully:", gltf.scene);
//                 setModel(gltf.scene);

//                 // Extract part names dynamically and pass them to parent
//                 const parts = [];
//                 gltf.scene.traverse((child) => {
//                     if (child.isMesh) {
//                         parts.push({ name: child.name, displayName: child.name });
//                     }
//                 });
//                 onPartsLoaded(parts);
//             },
//             undefined,
//             (error) => {
//                 console.error("Error loading the model:", error);
//             }
//         );

//         return () => {
//             dracoLoader.dispose();
//         };
//     }, [onPartsLoaded]);

//     useEffect(() => {
//         if (model && selectedPart && selectedColor) {
//             const part = model.getObjectByName(selectedPart);
//             if (part && part.material) {
//                 part.material.color.set(selectedColor);
//             }
//         }
//     }, [model, selectedPart, selectedColor]);

//     if (!model) {
//         return (
//             <Html center>
//                 <Loader />
//             </Html>
//         );
//     }

//     return (
//         <primitive object={model} scale={[10, 10, 10]} /> 
//     );
// };

// const RenderPage = () => {
//     const [selectedPart, setSelectedPart] = useState(null);
//     const [selectedColor, setSelectedColor] = useState("#ff0000");
//     const [parts, setParts] = useState([]);

//     const handlePartClick = (partName) => {
//         setSelectedPart(partName);
//     };

//     const handleColorChange = (event) => {
//         setSelectedColor(event.target.value);
//     };

//     const handlePartsLoaded = (loadedParts) => {
//         setParts(loadedParts);
//         console.log("Loaded parts:", loadedParts);
//     };

//     return (
//         <div style={{ display: "flex", height: "100vh" }}>
//             {/* Sidebar for selecting parts and colors */}
//             <div style={{ width: "20%", padding: "1rem", backgroundColor: "#f7f7f7" }}>
//                 <h3>Shoe Parts</h3>
//                 <ul style={{ listStyleType: "none", padding: 0 }}>
//                     {parts.map((part) => (
//                         <li
//                             key={part.name}
//                             style={{
//                                 cursor: "pointer",
//                                 padding: "0.5rem",
//                                 backgroundColor: selectedPart === part.name ? "#e0e0e0" : "transparent",
//                             }}
//                             onClick={() => handlePartClick(part.name)}
//                         >
//                             {part.displayName}
//                         </li>
//                     ))}
//                 </ul>

//                 <h3>Color</h3>
//                 <input
//                     type="color"
//                     value={selectedColor}
//                     onChange={handleColorChange}
//                     style={{ width: "100%", height: "2rem", border: "none", cursor: "pointer" }}
//                 />
//             </div>

//             {/* 3D Canvas */}
//             <div style={{ width: "80%" }}>
//                 <Canvas camera={{ position: [0, 8, 20] }}> {/* Adjusted camera position */}
//                     <ambientLight intensity={0.8} /> {/* Increased light intensity */}
//                     <OrbitControls enableZoom={true} /> {/* Allow rotation and zoom */}
//                     <Suspense fallback={<Html center><Loader /></Html>}>
//                         <Model
//                             selectedPart={selectedPart}
//                             selectedColor={selectedColor}
//                             onPartsLoaded={handlePartsLoaded}
//                         />
//                     </Suspense>
//                 </Canvas>
//             </div>
//         </div>
//     );
// };

// export default RenderPage;



// import React, { useEffect, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// const Loader = () => (
//     <div
//         style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             width: "100vw",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             zIndex: 1,
//         }}
//     >
//         <div>Loading...</div>
//     </div>
// );

// const Model = ({ selectedPart, selectedColor, onPartsLoaded }) => {
//     const [model, setModel] = useState(null);

//     useEffect(() => {
//         const loader = new GLTFLoader();
//         const dracoLoader = new DRACOLoader();
//         dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
//         loader.setDRACOLoader(dracoLoader);

//         loader.load(
//             "/modal3/shoe-draco.glb",
//             (gltf) => {
//                 console.log("Model loaded successfully:", gltf.scene);
//                 setModel(gltf.scene);

//                 // Extract part names dynamically and pass them to parent
//                 const parts = [];
//                 gltf.scene.traverse((child) => {
//                     if (child.isMesh) {
//                         parts.push({ name: child.name, displayName: child.name });
//                     }
//                 });
//                 onPartsLoaded(parts);
//             },
//             undefined,
//             (error) => {
//                 console.error("Error loading the model:", error);
//             }
//         );

//         return () => {
//             dracoLoader.dispose();
//         };
//     }, [onPartsLoaded]);

//     useEffect(() => {
//         if (model && selectedPart && selectedColor) {
//             const part = model.getObjectByName(selectedPart);
//             if (part && part.material) {
//                 part.material.color.set(selectedColor);
//             }
//         }
//     }, [model, selectedPart, selectedColor]);

//     if (!model) {
//         return (
//             <Html center>
//                 <Loader />
//             </Html>
//         );
//     }

//     return (
//         <primitive object={model} scale={[10, 10, 10]} position={[0, -1, 0]} /> 
        
//     );
// };

// const RenderPage = () => {
//     const [selectedPart, setSelectedPart] = useState(null);
//     const [selectedColor, setSelectedColor] = useState("#ff0000");
//     const [parts, setParts] = useState([]);

//     const handlePartClick = (partName) => {
//         setSelectedPart(partName);
//     };

//     const handleColorChange = (event) => {
//         setSelectedColor(event.target.value);
//     };

//     const handlePartsLoaded = (loadedParts) => {
//         setParts(loadedParts);
//         console.log("Loaded parts:", loadedParts);
//     };

//     return (
//         <div style={{ display: "flex", height: "100vh" }}>
//             {/* Sidebar for selecting parts and colors */}
//             <div style={{ width: "20%", padding: "1rem", backgroundColor: "#f7f7f7" }}>
//                 <h3>Shoe Parts</h3>
//                 <ul style={{ listStyleType: "none", padding: 0 }}>
//                     {parts.map((part) => (
//                         <li
//                             key={part.name}
//                             style={{
//                                 cursor: "pointer",
//                                 padding: "0.5rem",
//                                 backgroundColor: selectedPart === part.name ? "#e0e0e0" : "transparent",
//                             }}
//                             onClick={() => handlePartClick(part.name)}
//                         >
//                             {part.displayName}
//                         </li>
//                     ))}
//                 </ul>

//                 <h3>Color</h3>
//                 <input
//                     type="color"
//                     value={selectedColor}
//                     onChange={handleColorChange}
//                     style={{ width: "100%", height: "2rem", border: "none", cursor: "pointer" }}
//                 />
//             </div>

//             {/* 3D Canvas */}
//             <div style={{ width: "80%" }}>
//                 <Canvas camera={{ position: [0, 5, 20] }}> {/* Adjusted camera position */}
//                     <ambientLight intensity={0.8} /> {/* Increased light intensity */}
//                     <OrbitControls enableZoom={true} /> {/* Allow rotation and zoom */}
//                     <Suspense fallback={<Html center><Loader /></Html>}>
//                         <Model
//                             selectedPart={selectedPart}
//                             selectedColor={selectedColor}
//                             onPartsLoaded={handlePartsLoaded}
//                         />
//                     </Suspense>
//                 </Canvas>
//             </div>
//         </div>
//     );
// };

// export default RenderPage;



// //  dress shoe
// import React, { useEffect, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// const Loader = () => (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       width: "100vw",
//       position: "absolute",
//       top: 0,
//       left: 0,
//       backgroundColor: "rgba(255, 255, 255, 0.8)",
//       zIndex: 1,
//     }}
//   >
//     <div>Loading...</div>
//   </div>
// );

// const Model = ({ selectedPart, selectedColor, onPartsLoaded }) => {
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     const dracoLoader = new DRACOLoader();
//     dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
//     loader.setDRACOLoader(dracoLoader);

//     loader.load(
//       "/modal/dress.glb", // Ensure the path to your model is correct
//       (gltf) => {
//         const scene = gltf.scene;
//         setModel(scene);

//         // Extract and map parts
//         const parts = [];
//         scene.traverse((child) => {
//           if (child.isMesh) {
//             parts.push({ name: child.name, displayName: child.name });
//           }
//         });
//         onPartsLoaded(parts);
//       },
//       undefined,
//       (error) => {
//         console.error("Error loading the model:", error);
//       }
//     );

//     return () => {
//       dracoLoader.dispose();
//     };
//   }, [onPartsLoaded]);

//   useEffect(() => {
//     if (model && selectedPart && selectedColor) {
//       const part = model.getObjectByName(selectedPart);
//       if (part && part.material) {
//         part.material.color.set(selectedColor);
//       }
//     }
//   }, [model, selectedPart, selectedColor]);

//   if (!model) {
//     return <Html center><Loader /></Html>;
//   }

//   return (
//     <primitive object={model} scale={[1.5, 1.5, 1.5]} position={[0, -1, 0]} />
//   );
// };

// const RenderPage = () => {
//   const [selectedPart, setSelectedPart] = useState(null);
//   const [selectedColor, setSelectedColor] = useState("#000000");
//   const [parts, setParts] = useState([]);

//   useEffect(() => {
//     const savedPart = localStorage.getItem("selectedPart");
//     const savedColor = localStorage.getItem("selectedColor");
//     if (savedPart) setSelectedPart(savedPart);
//     if (savedColor) setSelectedColor(savedColor);
//   }, []);

//   const handlePartClick = (partName) => {
//     setSelectedPart(partName);
//     localStorage.setItem("selectedPart", partName);
//   };

//   const handleColorChange = (event) => {
//     const color = event.target.value;
//     setSelectedColor(color);
//     localStorage.setItem("selectedColor", color);
//   };

//   const handlePartsLoaded = (loadedParts) => {
//     setParts(loadedParts);
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <div style={{ width: "20%", padding: "1rem", backgroundColor: "#f7f7f7" }}>
//         <h3>Shoe Parts</h3>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {parts.map((part) => (
//             <li
//               key={part.name}
//               style={{
//                 cursor: "pointer",
//                 padding: "0.5rem",
//                 backgroundColor: selectedPart === part.name ? "#e0e0e0" : "transparent",
//               }}
//               onClick={() => handlePartClick(part.name)}
//             >
//               {part.displayName}
//             </li>
//           ))}
//         </ul>

//         <h3>Color</h3>
//         <input
//           type="color"
//           value={selectedColor}
//           onChange={handleColorChange}
//           style={{ width: "100%", height: "2rem", border: "none", cursor: "pointer" }}
//         />
//       </div>

//       <div style={{ width: "80%" }}>
//         <Canvas camera={{ position: [0, 3, 10] }}>
//           <ambientLight intensity={0.8} />
//           <OrbitControls enableZoom={true} />
//           <Suspense fallback={<Html center><Loader /></Html>}>
//             <Model
//               selectedPart={selectedPart}
//               selectedColor={selectedColor}
//               onPartsLoaded={handlePartsLoaded}
//             />
//           </Suspense>
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default RenderPage;




// import React, { useEffect, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { TextureLoader } from "three/src/loaders/TextureLoader";

// const Loader = () => (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       width: "100vw",
//       position: "absolute",
//       top: 0,
//       left: 0,
//       backgroundColor: "rgba(255, 255, 255, 0.8)",
//       zIndex: 1,
//     }}
//   >
//     <div>Loading...</div>
//   </div>
// );

// const Model = ({ selectedPart, selectedColor, onPartsLoaded }) => {
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const objLoader = new OBJLoader();
//     const textureLoader = new TextureLoader();

//     // Load the texture for the model (ensure the path is correct)
//     const texture = textureLoader.load('/modal/Rightshoe.JPEG'); // Path should be correct

//     objLoader.load(
//       '/modal/Rightshoe.obj', // Path should be correct
//       (obj) => {
//         obj.traverse((child) => {
//           if (child.isMesh) {
//             // Apply texture to all meshes
//             child.material.map = texture;
//             child.material.needsUpdate = true;
//           }
//         });

//         setModel(obj);

//         // Extract and map parts of the shoe
//         const parts = [];
//         obj.traverse((child) => {
//           if (child.isMesh) {
//             parts.push({ name: child.name, displayName: child.name });
//           }
//         });
//         onPartsLoaded(parts);
//       },
//       undefined,
//       (error) => {
//         console.error("Error loading the model:", error);
//       }
//     );
//   }, [onPartsLoaded]);

//   useEffect(() => {
//     if (model && selectedPart && selectedColor) {
//       const part = model.getObjectByName(selectedPart);
//       if (part && part.material) {
//         part.material.color.set(selectedColor);
//       }
//     }
//   }, [model, selectedPart, selectedColor]);

//   if (!model) {
//     return <Html center><Loader /></Html>;
//   }

//   return <primitive object={model} scale={[1.3, 1.3, 1.3]} position={[0, -1, 0]} />;
// };

// const RenderPage = () => {
//   const [selectedPart, setSelectedPart] = useState(null);
//   const [selectedColor, setSelectedColor] = useState("#000000");
//   const [parts, setParts] = useState([]);

//   useEffect(() => {
//     const savedPart = localStorage.getItem("selectedPart");
//     const savedColor = localStorage.getItem("selectedColor");
//     if (savedPart) setSelectedPart(savedPart);
//     if (savedColor) setSelectedColor(savedColor);
//   }, []);

//   const handlePartClick = (partName) => {
//     setSelectedPart(partName);
//     localStorage.setItem("selectedPart", partName);
//   };

//   const handleColorChange = (event) => {
//     const color = event.target.value;
//     setSelectedColor(color);
//     localStorage.setItem("selectedColor", color);
//   };

//   const handlePartsLoaded = (loadedParts) => {
//     setParts(loadedParts);
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <div style={{ width: "20%", padding: "1rem", backgroundColor: "#f7f7f7" }}>
//         <h3>Shoe Parts</h3>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {parts.map((part) => (
//             <li
//               key={part.name}
//               style={{
//                 cursor: "pointer",
//                 padding: "0.5rem",
//                 backgroundColor: selectedPart === part.name ? "#e0e0e0" : "transparent",
//               }}
//               onClick={() => handlePartClick(part.name)}
//             >
//               {part.displayName}
//             </li>
//           ))}
//         </ul>

//         <h3>Color</h3>
//         <input
//           type="color"
//           value={selectedColor}
//           onChange={handleColorChange}
//           style={{ width: "100%", height: "2rem", border: "none", cursor: "pointer" }}
//         />
//       </div>

//       <div style={{ width: "80%" }}>
//         <Canvas camera={{ position: [0, 4, 15], fov: 55 }}>
//           <ambientLight intensity={1.5} /> {/* Adjusted light intensity */}
//           <OrbitControls enableZoom={true} />
//           <Suspense fallback={<Html center><Loader /></Html>}>
//             <Model
//               selectedPart={selectedPart}
//               selectedColor={selectedColor}
//               onPartsLoaded={handlePartsLoaded}
//             />
//           </Suspense>
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default RenderPage;


// import React, { useEffect, useState, Suspense } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { IoClose } from "react-icons/io5";
// import Link from "next/link";
// import Tab from "react-bootstrap/Tab";
// import Nav from "react-bootstrap/Nav";
// import { Vector3 } from "three";
// import classes from "./index.module.scss"; // Assuming your styles are here

// const Loader = () => (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100%",
//       width: "100%",
//       position: "absolute",
//       top: 0,
//       left: 0,
//       backgroundColor: "rgba(255, 255, 255, 0.8)",
//       zIndex: 1,
//     }}
//   >
//     <div>Loading...</div>
//   </div>
// );

// const Model = ({ onLoading, selectedTextures, focusedPart }) => {
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     onLoading(true);
//     const loader = new GLTFLoader();
//     loader.load(
//       "/modal/dress.glb", // Make sure the path is correct
//       (gltf) => {
//         console.log("Model loaded:", gltf);

//         const object = gltf.scene;
//         object.scale.set(0.02, 0.02, 0.02); // Scale down for proper view
//         setModel(object);
//         onLoading(false);
//       },
//       undefined,
//       (error) => {
//         console.error("Error loading model:", error);
//         onLoading(false);
//       }
//     );
//   }, [onLoading]);

//   // Adjust camera position to focus on the selected part
//   useFrame(({ camera }) => {
//     if (model && focusedPart) {
//       const part = model.getObjectByName(focusedPart);
//       if (part) {
//         const partPosition = new Vector3();
//         part.getWorldPosition(partPosition);
//         camera.position.lerp(partPosition.add(new Vector3(0, 0, 2)), 0.1); // Smooth transition
//         camera.lookAt(partPosition);
//       }
//     }
//   });

//   return model ? <primitive object={model} /> : null;
// };

// const CustomizeShoe = () => {
//   const [loading, setLoading] = useState(true);
//   const [selectedTextures, setSelectedTextures] = useState({
//     laces: "/modal2/lace1.jpg",
//     mesh: "/modal2/mash1.jpg",
//     caps: "/modal2/cap1.jpg",
//     sole: "/modal2/sole1.jpg",
//     band: "/modal2/band1.jpg",
//     patch: "/modal2/patch1.jpg",
//   });
//   const [focusedPart, setFocusedPart] = useState(null);

//   const textureOptions = {
//     laces: ["/modal2/lace1.jpg", "/modal2/lace2.jpg", "/modal2/lace3.jpg"],
//     mesh: ["/modal2/mash1.jpg", "/modal2/mash2.jpg", "/modal2/mash3.jpg"],
//     caps: ["/modal2/cap1.jpg", "/modal2/cap2.jpg", "/modal2/cap3.jpg"],
//     sole: ["/modal2/sole1.jpg", "/modal2/sole2.jpg", "/modal2/sole3.jpg"],
//     band: ["/modal2/band1.jpg", "/modal2/band2.jpg", "/modal2/band3.jpg"],
//     patch: ["/modal2/patch1.jpg", "/modal2/patch2.jpg", "/modal2/patch3.jpg"],
//   };

//   const handleTextureChange = (part, textureUrl) => {
//     console.log(`Changing ${part} texture to ${textureUrl}`);
//     setSelectedTextures((prevTextures) => ({
//       ...prevTextures,
//       [part]: textureUrl,
//     }));
//   };

//   const handlePartFocus = (part) => {
//     console.log(`Focusing on part: ${part}`);
//     setFocusedPart(part);
//   };

//   return (
//     <section className="py-5">
//       <Container>
//         <Row>
//           <Col lg={7}>
//             <div style={{ width: "100%", height: "500px", position: "relative" }}>
//               {loading && <Loader />}
//               <Canvas>
//                 <ambientLight intensity={0.5} />
//                 <OrbitControls enableZoom={true} />
//                 <Suspense fallback={<Loader />}>
//                   <Model
//                     onLoading={setLoading}
//                     selectedTextures={selectedTextures}
//                     focusedPart={focusedPart}
//                   />
//                 </Suspense>
//               </Canvas>
//             </div>
//           </Col>
//           <Col lg={5}>
//             <div className={classes.productDetails}>
//               <div className="d-flex justify-content-between align-items-center">
//                 <h2>Customize This Shoe</h2>
//                 <Link href="/product">
//                   <a>
//                     <IoClose size={20} className="text-dark" />
//                   </a>
//                 </Link>
//               </div>
//               <hr />
//               <Tab.Container id="left-tabs-example" defaultActiveKey="laces">
//                 <Row>
//                   <Col sm={2} style={{ borderRight: "1px solid #dee2e6" }}>
//                     <Nav variant="pills" className="flex-column">
//                       {Object.keys(textureOptions).map((part) => (
//                         <Nav.Item key={part}>
//                           <Nav.Link
//                             eventKey={part}
//                             onClick={() => handlePartFocus(part)}
//                           >
//                             {part}
//                           </Nav.Link>
//                         </Nav.Item>
//                       ))}
//                     </Nav>
//                   </Col>
//                   <Col sm={10}>
//                     <Tab.Content>
//                       {Object.entries(textureOptions).map(([part, options]) => (
//                         <Tab.Pane eventKey={part} key={part}>
//                           <div className={classes.colorsSection}>
//                             {options.map((url, index) => (
//                               <img
//                                 key={index}
//                                 src={url}
//                                 className={classes.colorOption}
//                                 onClick={() => handleTextureChange(part, url)}
//                               />
//                             ))}
//                           </div>
//                         </Tab.Pane>
//                       ))}
//                     </Tab.Content>
//                   </Col>
//                 </Row>
//               </Tab.Container>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };
//correct one
// export default CustomizeShoe;


// test 
import React, { useEffect, useState, Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Vector3 } from "three";
import classes from "./index.module.scss"; // Assuming your styles are here

const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: 1,
    }}
  >
    <div>Loading...</div>
  </div>
);

const Model = ({ onLoading, selectedTextures, focusedPart }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    onLoading(true);
    const loader = new GLTFLoader();
    loader.load(
      "/modal/dress_shoe.glb", // Correct path for your project
      (gltf) => {
        const object = gltf.scene;
        object.scale.set(0.02, 0.02, 0.02); // Scale for proper initial view
        setModel(object);
        onLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        onLoading(false);
      }
    );
  }, [onLoading]);

  // Adjust camera position to focus on the selected part
  useFrame(({ camera }) => {
    if (model && focusedPart) {
      const part = model.getObjectByName(focusedPart);
      if (part) {
        const partPosition = new Vector3();
        part.getWorldPosition(partPosition);
        camera.position.lerp(partPosition.add(new Vector3(0, 0, 2)), 0.1); // Smooth transition
        camera.lookAt(partPosition);
      }
    }
  });

  // Apply textures to specific parts
  useEffect(() => {
    if (model && selectedTextures) {
      model.traverse((child) => {
        if (child.isMesh) {
          const partName = child.name.toLowerCase(); // Get the name of the part (like laces, mesh)
          if (selectedTextures[partName]) {
            child.material.map = selectedTextures[partName];
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [model, selectedTextures]);

  return model ? <primitive object={model} /> : null;
};

const CustomizeShoe = () => {
  const [loading, setLoading] = useState(true);
  const [selectedTextures, setSelectedTextures] = useState({
    laces: "/modal2/lace1.jpg",
    mesh: "/modal2/mash1.jpg",
    caps: "/modal2/cap1.jpg",
    sole: "/modal2/sole1.jpg",
    band: "/modal2/band1.jpg",
    patch: "/modal2/patch1.jpg",
    heel: "/modal2/heel1.jpg",
    liner: "/modal2/liner1.jpg",
    toe: "/modal2/toe1.jpg",
  });
  const [focusedPart, setFocusedPart] = useState(null);

  // Texture options for different parts of the shoe
  const textureOptions = {
    laces: ["/modal2/lace1.jpg", "/modal2/lace2.jpg", "/modal2/lace3.jpg"],
    mesh: ["/modal2/mash1.jpg", "/modal2/mash2.jpg", "/modal2/mash3.jpg"],
    caps: ["/modal2/cap1.jpg", "/modal2/cap2.jpg", "/modal2/cap3.jpg"],
    sole: ["/modal2/sole1.jpg", "/modal2/sole2.jpg", "/modal2/sole3.jpg"],
    band: ["/modal2/band1.jpg", "/modal2/band2.jpg", "/modal2/band3.jpg"],
    patch: ["/modal2/patch1.jpg", "/modal2/patch2.jpg", "/modal2/patch3.jpg"],
    heel: ["/modal2/heel1.jpg", "/modal2/heel2.jpg", "/modal2/heel3.jpg"],
    liner: ["/modal2/liner1.jpg", "/modal2/liner2.jpg", "/modal2/liner3.jpg"],
    toe: ["/modal2/toe1.jpg", "/modal2/toe2.jpg", "/modal2/toe3.jpg"],
  };

  // Handle texture change for a specific part
  const handleTextureChange = (part, textureUrl) => {
    console.log(`Changing ${part} texture to ${textureUrl}`);
    setSelectedTextures((prevTextures) => ({
      ...prevTextures,
      [part]: textureUrl,
    }));
  };

  // Handle focusing on a specific part of the shoe (for camera focus)
  const handlePartFocus = (part) => {
    console.log(`Focusing on part: ${part}`);
    setFocusedPart(part);
  };

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={7}>
            <div style={{ width: "100%", height: "500px", position: "relative" }}>
              {loading && <Loader />}
              <Canvas>
                <ambientLight intensity={0.5} />
                <OrbitControls enableZoom={true} />
                <Suspense fallback={<Loader />}>
                  <Model
                    onLoading={setLoading}
                    selectedTextures={selectedTextures}
                    focusedPart={focusedPart}
                  />
                </Suspense>
              </Canvas>
            </div>
          </Col>
          <Col lg={5}>
            <div className={classes.productDetails}>
              <div className="d-flex justify-content-between align-items-center">
                <h2>Customize This Shoe</h2>
                <Link href="/product">
                  <a>
                    <IoClose size={20} className="text-dark" />
                  </a>
                </Link>
              </div>
              <hr />
              <Tab.Container id="left-tabs-example" defaultActiveKey="laces">
                <Row>
                  <Col sm={2} style={{ borderRight: "1px solid #dee2e6" }}>
                    <Nav variant="pills" className="flex-column">
                      {Object.keys(textureOptions).map((part) => (
                        <Nav.Item key={part}>
                          <Nav.Link
                            eventKey={part}
                            onClick={() => handlePartFocus(part)}
                          >
                            {part.charAt(0).toUpperCase() + part.slice(1)} {/* Capitalize first letter */}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                  <Col sm={10}>
                    <Tab.Content>
                      {Object.entries(textureOptions).map(([part, options]) => (
                        <Tab.Pane eventKey={part} key={part}>
                          <div className={classes.colorsSection}>
                            {options.map((url, index) => (
                              <img
                                key={index}
                                src={url}
                                className={classes.colorOption}
                                onClick={() => handleTextureChange(part, url)}
                              />
                            ))}
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomizeShoe;
