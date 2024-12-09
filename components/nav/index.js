// import Link from "next/link";
// import classes from "./index.module.scss"; 
// import { Fade, Slide } from "react-awesome-reveal";

// const dropdownData = [
//   {
//     name: "MAN'S SHOES",
//     subcategories: [
//       {
//         heading: "MAN'S SHOES",
//         items: [
//           { name: "Sale Belts", link: "/" },
//           { name: "Formal Belts", link: "/" },
//           { name: "Casual Belts", link: "/" },
//           { name: "View All Belts", link: "/" },
//         ],
//       },
//       {
//         heading: "Leather Bags",
//         items: [
//           { name: "Overnight Bags", link: "/overnight-bags" },
//           { name: "Day Bags", link: "/day-bags" },
//           { name: "Formal Bags", link: "/formal-bags" },
//           { name: "View All Bags", link: "/view-all-bags" },
//         ],
//       },
//       {
//         heading: "Accessories",
//         items: [
//           { name: "Sale Accessories", link: "/sale-accessories" },
//           { name: "Men's Slippers", link: "/mens-slippers" },
//           { name: "Wallets / Card Holders", link: "/wallets-card-holders" },
//           { name: "Leather Gloves", link: "/leather-gloves" },
//           { name: "View All Accessories", link: "/view-all-accessories" },
//         ],
//       },
//       {
//         image: "/images/production2.jpg",
//       },
//     ],
//   },
//   {
//     name: "WOMEN'S SHOES",
//     subcategories: [
//       {
//         heading: "Oxfords",
//         items: [
//           { name: "Cap Toe Oxfords", link: "/cap-toe-oxfords" },
//           { name: "Plain Toe Oxfords", link: "/plain-toe-oxfords" },
//           { name: "Wingtip Oxfords", link: "/wingtip-oxfords" },
//           { name: "View All Oxfords", link: "/view-all-oxfords" },
//         ],
//       },
//       {
//         heading: "Loafers",
//         items: [
//           { name: "Penny Loafers", link: "/penny-loafers" },
//           { name: "Tassel Loafers", link: "/tassel-loafers" },
//           { name: "Horsebit Loafers", link: "/horsebit-loafers" },
//           { name: "View All Loafers", link: "/view-all-loafers" },
//         ],
//       },
//       {
//         heading: "Boots",
//         items: [
//           { name: "Chelsea Boots", link: "/chelsea-boots" },
//           { name: "Chukka Boots", link: "/chukka-boots" },
//           { name: "Dress Boots", link: "/dress-boots" },
//           { name: "View All Boots", link: "/view-all-boots" },
//         ],
//       },
//       {
        
//         image: "/images/production2.jpg",
//       },
//     ],
//   },
//   {
//     name: "ACCESSORIES",
//     subcategories: [
//       {
//         heading: "Socks",
//         items: [
//           { name: "Ankle Socks", link: "/ankle-socks" },
//           { name: "Crew Socks", link: "/crew-socks" },
//           { name: "No-Show Socks", link: "/no-show-socks" },
//           { name: "View All Socks", link: "/view-all-socks" },
//         ],
//       },
//       {
//         heading: "Wallets",
//         items: [
//           { name: "Bifold Wallets", link: "/bifold-wallets" },
//           { name: "Trifold Wallets", link: "/trifold-wallets" },
//           { name: "Cardholders", link: "/cardholders" },
//           { name: "View All Wallets", link: "/view-all-wallets" },
//         ],
//       },
//       {
//         heading: "Belts",
//         items: [
//           { name: "Leather Belts", link: "/leather-belts" },
//           { name: "Canvas Belts", link: "/canvas-belts" },
//           { name: "Elastic Belts", link: "/elastic-belts" },
//           { name: "View All Belts", link: "/view-all-belts" },
//         ],
//       },
//       {
//         image: "/images/production2.jpg",
//       },
//     ],
//   },
//   {
//     name: "STORE",
//     subcategories: [
//       {
//         heading: "Shoe Repairs",
//         items: [
//           { name: "Sole Replacement", link: "/sole-replacement" },
//           { name: "Heel Repair", link: "/heel-repair" },
//           { name: "Toe Cap Repair", link: "/toe-cap-repair" },
//           { name: "View All Shoe Repairs", link: "/view-all-shoe-repairs" },
//         ],
//       },
//       {
//         heading: "Bag Repairs",
//         items: [
//           { name: "Handle Repair", link: "/handle-repair" },
//           { name: "Zipper Repair", link: "/zipper-repair" },
//           { name: "Leather Conditioning", link: "/leather-conditioning" },
//           { name: "View All Bag Repairs", link: "/view-all-bag-repairs" },
//         ],
//       },
//       {
//         heading: "Accessory Repairs",
//         items: [
//           { name: "Belt Repair", link: "/belt-repair" },
//           { name: "Wallet Repair", link: "/wallet-repair" },
//           { name: "Glove Repair", link: "/glove-repair" },
//         ],
//       },
//       {
//         image: "/images/production2.jpg",
//       },
//     ],
//   },
// ];

// const Mainnavbar = () => {
//   return (
//     <nav className="nav">
//       <ul>
//         {dropdownData.map((category) => (
//           <li key={category.name}>
//             <span className="dropdown-btn">{category.name}</span>
//             <div className={`${classes.megaMenu} mega-menu`}>
//               <div className={classes.megaMenuContent}>
//                 <div className={classes.menuTypes}>
//                   <ul className={classes.menuFlex}>
//                     {category.subcategories.map((subcategory, subIndex) => (
//                       <li key={subcategory.heading} className={classes.menuItems}>
//                         <div className={classes.heading} style={{ paddingTop: "0" }}>
//                           <Link href={subcategory.items && subcategory.items[0] ? subcategory.items[0].link : "#"} passHref>
//                             <a>{subcategory.heading}</a>
//                           </Link>
//                         </div>
//                         <div>
//                           {subcategory.items && subcategory.items.map((item, itemIndex) => (
//                             <Fade key={item.name} delay={(subIndex * 100) + (itemIndex * 100)}>
//                               <Link href={item.link} passHref>
//                                 <a>{item.name}</a>
//                               </Link>
//                             </Fade>
//                           ))}
                          
//                           {subcategory.image && (
//                             <div className={classes.imageWrapper}>
//                               <img src={subcategory.image} alt={subcategory.heading} className={classes.image} />
//                             </div>
//                           )}
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Mainnavbar;




import Link from "next/link";
import classes from "./index.module.scss";
import { Zoom } from "react-awesome-reveal";

const Mainnavbar = () => {
  return (
    <nav className="nav">
      <ul>
        {/* MAN'S SHOES */}
        <li>
          <span className="dropdown-btn">MAN'S SHOES</span>
          <div className={`${classes.megaMenu} mega-menu`}>
            <div className={classes.megaMenuContent}>
              <div className={classes.menuTypes}>
                <ul className={classes.menuFlex}>
                  <li className={classes.menuItems}>
                    <Zoom delay={0}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav1.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Loafers</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={200}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav2.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Monk Shoes</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={400}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav3.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Lace Up</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={600}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav4.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Sneakers</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={800}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav5.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Brogues</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={1000}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav6.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Chelsea</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* ACCESSORIES */}
        <li>
          <span className="dropdown-btn">ACCESSORIES </span>
          <div className={`${classes.megaMenu} mega-menu`}>
            <div className={classes.megaMenuContent}>
              <div className={classes.menuTypes}>
              <ul className={classes.menuFlex}>
                  <li className={classes.menuItems}>
                    <Zoom delay={0}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav1.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Loafers</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={200}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav2.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Monk Shoes</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={400}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav3.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Lace Up</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={600}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav4.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Sneakers</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={800}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav5.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Brogues</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                  <li className={classes.menuItems}>
                    <Zoom delay={1000}>
                      <Link href="/store" passHref>
                        <div className={classes.imageWrapper}>
                          <img src="/images/nav6.png" alt="MAN'S SHOES" className={classes.image} />
                          <h6 className="text-center pt-3">Chelsea</h6>
                        </div>
                      </Link>
                    </Zoom>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* STORE */}
        <li>
          <Link href="/store" passHref>
            <span className="dropdown-btn">STORE</span>
          </Link>
        </li>

        {/* CONTACT */}
        <li>
          <Link href="/contactUs" passHref>
            <span className="dropdown-btn">CONTACT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Mainnavbar;

