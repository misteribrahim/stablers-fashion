import React, { useState } from "react";
import MainLayout from "../Layout/mainLayout";
import SecondaryBanner from "../components/secondaryBanner";
import { Accordion, Col, Container, Form, Row, InputGroup, } from "react-bootstrap";
import { CiFilter } from "react-icons/ci";
import Slider from 'react-slider';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import NewArrival from "../components/newarrival";

function store() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1030);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Alphabetically, A-Z');
  const options = [
    'Featured',
    'Best Selling',
    'Latest',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price Low To High',
    'Price High To Low',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSliderChange = ([min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const categories = [
    'Loafers',
    'Monks',
    'Lace Ups',
    'Sneakers',
    'Brogues',
    'Boots'
  ];
  const colors = [
    { name: 'Black', colorCode: '#000000' },
    { name: 'Brown', colorCode: '#8B4513' },
    { name: 'Blue', colorCode: '#1E90FF' },
    { name: 'Green', colorCode: '#006400' },
    { name: 'Beige', colorCode: '#F5F5DC' },
    { name: 'Navy', colorCode: '#003366' }
  ];

  const material = [
    'Calf',
    'Deerskin',
    'Grain',
    'Fabric',
    'Patent',
    'Hand Painted'
  ];

  const size = [
    'UK 5',
    'UK 5.5',
    'UK 6',
    'UK 6.5',
    'UK 7',
    'UK 7.5',
    'UK 8',
    'UK 8.5',
    'UK 9',
    'UK 9.5',
    'UK 10',
    'UK 10.5'
  ];

  const store = [
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
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
  }
];

  return (
    <>
      <MainLayout>
        <SecondaryBanner
          img={"/images/storebg.png"}
          title={"MEN’S SHOES"}
          desc={
            "Using only the finest leathers from the leading tanneries of Europe, Crockett & Jones shoes are individually crafted on lasts designed to produce the best possible fitting characteristics. Each pair takes up to eight weeks to manufacture in a labour-intensive process involving over 200 highly skilled operations."
          }
        />
        <section className="py-5">
          <Container>
            <Row>
              <Col lg={2}>
                <div className="d-flex gap-2 align-items-center">
                  <CiFilter size={18} color="#753403" /> <span style={{color:"#753403"}}> FILTER BY</span>
                </div>
                <div className=" accordions  pt-4">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Categories</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                              {categories.map((label, index) => (
                                <div className="mb-3" key={index}>
                                  <Form.Check type="checkbox" id={`check-api-checkbox-${index}`} className='checkbox-container'>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>{label}</Form.Check.Label>
                                  </Form.Check>
                                </div>
                              ))}
                            </Form>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Colors</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                              {colors.map((color, index) => (
                                <div className="mb-3" key={index}>
                                  <Form.Check type="checkbox" id={`check-api-checkbox-${index}`} className='checkbox-container'>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>
                                      <span
                                        className="color-circle"
                                        style={{ backgroundColor: color.colorCode }}>
                                      </span>
                                      {color.name}
                                    </Form.Check.Label>
                                  </Form.Check>
                                </div>
                              ))}
                            </Form>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Material</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                              {material.map((label, index) => (
                                <div className="mb-3" key={index}>
                                  <Form.Check type="checkbox" id={`check-api-checkbox-${index}`} className='checkbox-container'>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>{label}</Form.Check.Label>
                                  </Form.Check>
                                </div>
                              ))}
                            </Form>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Price ($)</Accordion.Header>
                      <Accordion.Body>
                        <Row className="mb-3">
                          <Col xs={6}>
                            <InputGroup>
                              <Form.Control
                                type="number"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                aria-label="Minimum price"
                                min="0"
                              />
                            </InputGroup>
                          </Col>
                          <Col xs={6}>
                            <InputGroup>
                              <Form.Control
                                type="number"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                aria-label="Maximum price"
                                min="0"
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                        <Slider
                          className="price-slider"
                          thumbClassName="slider-thumb"
                          trackClassName="slider-track"
                          min={0}
                          max={1030}
                          value={[minPrice, maxPrice]}
                          onChange={handleSliderChange}
                        />
                        <div className="price-labels d-flex justify-content-between mt-2">
                          <span>0</span>
                          <span>206</span>
                          <span>412</span>
                          <span>618</span>
                          <span>824</span>
                          <span>1030</span>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Shoe Size</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                              {size.map((label, index) => (
                                <div className="mb-3" key={index}>
                                  <Form.Check type="checkbox" id={`check-api-checkbox-${index}`} className='checkbox-container'>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>{label}</Form.Check.Label>
                                  </Form.Check>
                                </div>
                              ))}
                            </Form>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col lg={10}>
                <div className="d-flex align-items-center justify-content-between px-4">
                  <h6>46 Products</h6>

                  <div className="d-flex align-items-center gap-2 ">
                    <h6>Sort By</h6>
                    <div className="custom-select">
                    <div className={`select-box ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                      <span className="selected">{selectedOption}</span>
                      <span className="arrow">{isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                    </div>
                    {isOpen && (
                      <ul className="options-list">
                        {options.map((option, index) => (
                          <li
                            key={index}
                            className={`option ${selectedOption === option ? 'selected-option' : ''}`}
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  </div>
                 
                </div>
                <NewArrival products={store} noHeading store noBtn/>
              </Col>
            </Row>
          </Container>
        </section>
      </MainLayout>
    </>
  );
}

export default store;
