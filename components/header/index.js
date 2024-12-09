import React from "react";
import { Container } from "react-bootstrap";
import classes from "./index.module.scss";
import Logo from "../logo";
import SearchBar from "../searchbar";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Mainnavbar from "../nav";
import Link from "next/link";

const Header = ({ onNavToggle, current, cart }) => {
  return (
    <>
      {cart ? (
        <div>
          <h1>Hello</h1>
        </div>
      ) : (
        <header className={classes.header}>
          <Container className="custom-container">
            <div className={classes.head}>
              <div className="d-flex align-items-center justify-content-between">
                <Mainnavbar />
                <Link href="/">
                <a><Logo /></a>
                </Link>
                <div className="d-flex align-items-center gap-3">
                  <SearchBar />
                  <Link href="/dashboard/user" aria-label="User Profile">
                    <a>
                      <FaRegUser />
                    </a>
                  </Link>
                  <Link href="/wishList" aria-label="Favorites">
                    <a>
                      <FaRegHeart />
                    </a>
                  </Link>
                  <Link href="/myCart" aria-label="Shopping Cart">
                    <a>
                      <FiShoppingCart />
                    </a>
                  </Link>
                </div>
                <div
                  className={`nav-opener ${current ? "active" : ""}`}
                  onClick={onNavToggle}
                  role="button"
                  aria-label="Toggle Navigation Menu"
                  tabIndex={0}
                >
                  <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </header>
      )}
    </>
  );
};

export default Header;
