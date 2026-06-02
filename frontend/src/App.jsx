import React, { useState } from "react";

import {
  Link,
} from "react-router-dom";

import "./styles.css";

import {
  Search,
  User,
  ShoppingCart,
  X,
} from "lucide-react";

export default function App() {

  const [searchOpen, setSearchOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (

    <div className="page">

      <div className="top-strip">

        <div className="phone">
          (323) 576-1942
        </div>

        <div className="shipping">
          Free Shipping On Orders Of $49+
        </div>

        <div className="settings">
          <span>🇺🇸 English</span>
          <span>|</span>
          <span>Pakistan(USD $)</span>
        </div>

      </div>

      <nav className="navbar">

        <div className="logo">

          <img
            src="https://brew-blis.myshopify.com/cdn/shop/files/Logo_200x@2x.png?v=1736775810"
            alt="Brew Bliss Logo"
            className="logo-image"
          />

        </div>

        <ul className="nav-links">

          <li className="active">

            <Link to="/">
              HOME
            </Link>

          </li>

          <li className="dropdown product-dropdown">

            <Link to="/product">
              PRODUCT
            </Link>

            <div className="product-mega-menu">

              <div className="mega-column">

                <h3>Whisky</h3>

                <Link to="/">
                  Amber Crisp Ale
                </Link>

                <Link to="/">
                  Amber Gold Lager
                </Link>

                <Link to="/">
                  Citrus Smooth IPA
                </Link>

                <Link to="/">
                  Crisp Golden IPA
                </Link>

                <Link to="/">
                  Dark Chocolate Stout
                </Link>

                <Link to="/">
                  Stout Rich Dark
                </Link>

              </div>

              <div className="mega-column">

                <h3>Beer</h3>

                <Link to="/">
                  Velvet Dark Stout
                </Link>

                <Link to="/">
                  Summer Glow Lager
                </Link>

                <Link to="/">
                  Stout Rich Dark
                </Link>

                <Link to="/">
                  Red Grapes Tasty Beer
                </Link>

                <Link to="/">
                  Ocean Breeze IPA
                </Link>

                <Link to="/">
                  Summer Glow Lager
                </Link>

              </div>

              <div className="mega-images">

                <div className="mega-image-card">

                  <img
                    src="https://brew-blis.myshopify.com/cdn/shop/collections/prod04.png?v=1737441174&width=2000"
                    alt=""
                  />

                  <p>Beer</p>

                </div>

                <div className="mega-image-card">

                  <img
                    src="https://brew-blis.myshopify.com/cdn/shop/collections/prod06.png?v=1737441112&width=2000"
                    alt=""
                  />

                  <p>Whisky</p>

                </div>

              </div>

            </div>

          </li>

          <li className="dropdown">

            <Link to="/shop">
              SHOP
            </Link>

            <ul className="dropdown-menu">

              <li>
                <Link to="/cart">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/wishlist">
                  Wishlist
                </Link>
              </li>

              <li>
                <Link to="/checkout">
                  Checkout
                </Link>
              </li>

              <li>
                <Link to="/product-list">
                  Product List
                </Link>
              </li>

              <li>
                <Link to="/product-details">
                  Product Details
                </Link>
              </li>

            </ul>

          </li>

          <li className="dropdown">

            <Link to="/blog">
              BLOG
            </Link>

            <ul className="dropdown-menu">

              <li>
                <Link to="/blogs-list">
                  Blogs List
                </Link>
              </li>

              <li>
                <Link to="/blog-details">
                  Blog Details
                </Link>
              </li>

            </ul>

          </li>

          <li className="dropdown">

            <Link to="/pages">
              PAGES
            </Link>

            <ul className="dropdown-menu">

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/team">
                  Our Team
                </Link>
              </li>

              <li>
                <Link to="/account">
                  Account
                </Link>
              </li>

              <li>
                <Link to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/404">
                  404
                </Link>
              </li>

            </ul>

          </li>

        </ul>

        <div className="nav-icons">

          <Search
            size={22}
            className="icon"
            onClick={() => setSearchOpen(true)}
          />

          <User
            size={22}
            className="icon"
          />

          <div className="cart-wrapper">

            <ShoppingCart
              size={22}
              className="icon"
            />

            <div className="badge">
              0
            </div>

          </div>

        </div>

      </nav>

      {searchOpen && (

        <div className="search-overlay">

          <div className="search-modal">

            <button
              className="close-btn"
              onClick={() => setSearchOpen(false)}
            >

              <X size={20} />

            </button>

            <h2>
              WHAT ARE YOU LOOKING FOR?
            </h2>

            <div className="search-box">

              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    searchTerm.trim() !== ""
                  ) {
                    handleSearch();
                  }
                }}
              />

              <button onClick={handleSearch}>

                <Search size={18} />

              </button>

            </div>

          </div>

        </div>

      )}

      <section className="hero">

        <div className="bg-glow"></div>

        <div className="hero-content">

          <div className="arrival">

            <span className="line"></span>

            NEW ARRIVAL

            <span className="line"></span>

          </div>

          <h1>
            Discover Flavors,
            <br />
            One Bottle At A Time!
          </h1>

          <p>
            Explore The Rich And Diverse World Of
            Beer, Savoring Unique Flavors Crafted
            To Perfection, One Bottle At A Time!
          </p>

          <div className="buttons">

            <Link
              to="/shop"
              className="shop-btn-link"
            >

              <button className="primary-btn">
                Shop Sale
              </button>

            </Link>

            <button className="secondary-btn">
              Our Collections
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="flower"></div>

          <img
            className="beer-image"
            src="https://brew-blis.myshopify.com/cdn/shop/files/hero.png?v=1736771607"
            alt="Beer Bottle"
          />

        </div>

      </section>

    </div>
  );
}