
import BannerSlider from "../components/banner";
import NewSeason from "../components/newSeason";
import MainLayout from "../Layout/mainLayout";
import Policy from "../components/Policy";
import NewArrival from "../components/newarrival";
import Discount from "../components/discount";
import HandCrafted from "../components/handcrafted";
import Customize from "../components/customize";
import Manufacturing from "../components/manufacturing";



export default function Home() {
  const shoesData = [
    {
        id: 1,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival1.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival11.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 2,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival2.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival22.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 3,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival3.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival33.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 4,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival4.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival4.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 5,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival5.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival5.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 6,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival6.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival6.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 7,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival7.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival7.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 8,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival8.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival8.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 9,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival9.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival9.png",
            alt: "Brown loafers hover view"
        }
    },
    {
        id: 10,
        name: "Brown Loafers",
        brand: "Stylish Footware",
        price: 180.00,
        colors: ["#000", "#7b5b4d", "#7a716d"],
        colorImages: {
            "#000": {
                src: "/images/black.png",
                alt: "Black loafers"
            },
            "#7b5b4d": {
                src: "/images/brown.png",
                alt: "Brown loafers"
            },
            "#7a716d": {
                src: "/images/gray.png",
                alt: "Gray loafers"
            }
        },
        defaultImage: {
            src: "/images/arrival10.png",
            alt: "Brown loafers default view"
        },
        hoverImage: {
            src: "/images/arrival10.png",
            alt: "Brown loafers hover view"
        }
    }
];

  return (
    <>
      <MainLayout>
        <BannerSlider />
        <Policy/>
        <NewSeason />
        <NewArrival  products={shoesData}/>
        <Discount/>
        <Customize/>
        <Manufacturing/>
        <HandCrafted/>
       
      </MainLayout>
    </>
  );
}

