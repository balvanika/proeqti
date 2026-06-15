import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Search,
  User,
  ShoppingCart,
  X,
  Truck,
  Gift,
  BadgeCheck,
  Package,
} from "lucide-react";

import ProductList from "../components/ProductList";



export default function Shop() {

  const [searchOpen, setSearchOpen] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3001/api/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.error(err));
}, []);

  return (
    <div className="shop-wrapper">

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
          <span>Australia(USD $)</span>
        </div>

      </div>

      <nav className="navbar">

        <div className="logo">
          <img
            src="https://brew-blis.myshopify.com/cdn/shop/files/Logo_200x@2x.png?v=1736775810"
            alt="logo"
            className="logo-image"
          />
        </div>

        <ul className="nav-links">

          <li>
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

                <Link to="/">Amber Crisp Ale</Link>
                <Link to="/">Amber Gold Lager</Link>
                <Link to="/">Citrus Smooth IPA</Link>
                <Link to="/">Crisp Golden IPA</Link>
                <Link to="/">Dark Chocolate Stout</Link>
                <Link to="/">Stout Rich Dark</Link>

              </div>

              <div className="mega-column">

                <h3>Beer</h3>

                <Link to="/">Velvet Dark Stout</Link>
                <Link to="/">Summer Glow Lager</Link>
                <Link to="/">Stout Rich Dark</Link>
                <Link to="/">Red Grapes Tasty Beer</Link>
                <Link to="/">Ocean Breeze IPA</Link>
                <Link to="/">Summer Glow Lager</Link>

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
            size={21}
            className="icon"
            onClick={() => setSearchOpen(true)}
          />

          <User
            size={21}
            className="icon"
          />

          <div className="cart-wrapper">

            <ShoppingCart
              size={21}
              className="icon"
            />

            <div className="badge">
              0
            </div>

          </div>

        </div>

      </nav>

      <div
        className="shop-banner"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
          url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qIgtJZtTyLJIpf03RVQzVuR5fbVvUbEviA&s")
          `,
        }}
      >

        <h1>
          Shop
        </h1>

      </div>

      <div className="shop-page">

        <ProductList products={products} />

      </div>

      <section className="features-section">

        <div className="feature-card">

          <div className="feature-icon">
            <Truck size={28} />
          </div>

          <h3>Free Shipping</h3>

          <p>
            Free Shipping, Hassle-Free!
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <Gift size={28} />
          </div>

          <h3>Gift Package</h3>

          <p>
            Stylish Gifts For Every Occasion!
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <BadgeCheck size={28} />
          </div>

          <h3>One Year Warranty</h3>

          <p>
            One-Year Warranty For Lasting,
            Quality Jewelry!
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <Package size={28} />
          </div>

          <h3>Easy Returns</h3>

          <p>
            Stress-Free Returns For Your
            Satisfaction!
          </p>

        </div>

      </section>

      <section className="gallery-section">

        <img src="https://brew-blis.myshopify.com/cdn/shop/files/instagram01.png?v=1737376523&width=2000" alt="" />
        <img src="https://brew-blis.myshopify.com/cdn/shop/files/instagram02.png?v=1737377635&width=2000" alt="" />
        <img src="https://brew-blis.myshopify.com/cdn/shop/files/instagram03.png?v=1737377654&width=2000" alt="" />
        <img src="https://brew-blis.myshopify.com/cdn/shop/files/instagram04.png?v=1737377654&width=2000" alt="" />
        <img src="https://brew-blis.myshopify.com/cdn/shop/files/instagram05.png?v=1737377654&width=2000" alt="" />
        <img src="https://brew-blis.myshopify.com/cdn/shop/files/instagram07.png?v=1737377654&width=2000" alt="" />
        <img src="https://brew-blis.myshopify.com/cdn/shop/files/instagram08.png?v=1737377654&width=2000" alt="" />
        <img src="https://brew-blis.myshopify.com/cdn/shop/files/instagram06.png?v=1737377654&width=2000" alt="" />

      </section>

      <footer className="footer">

        <div className="footer-grid">

          <div className="footer-col">

            <img
              src="https://brew-blis.myshopify.com/cdn/shop/files/Logo_200x@2x.png?v=1736775810"
              alt=""
              className="footer-logo"
            />

            <p className="footer-text">
              We Are Passionate About Crafting The
              Perfect Beer Experience..
            </p>

            <p>
              <strong>Address</strong> 218 Fifth Avenue,
              Heaven Tower
            </p>

            <p>
              <strong>Phone</strong> (323) 576-1942
            </p>

            <p>
              <strong>Email</strong> Exampleinfo@Gmail.Com
            </p>

          </div>

          <div className="footer-col">

            <h3>Our Company</h3>

            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Our Stores</a>
            <a href="/">Contact Us</a>
            <a href="/">Size Guide</a>
            <a href="/">My Account</a>

          </div>

          <div className="footer-col">

            <h3>Customer Service</h3>

            <a href="/">Privacy Policy</a>
            <a href="/">Theme FAQs</a>
            <a href="/">Refund Policy</a>
            <a href="/">Advanced Search</a>
            <a href="/">Store Locations</a>
            <a href="/">Term & Conditions</a>

          </div>

          <div className="footer-col">

            <h3>Sign Up To Newsletter</h3>

            <p className="newsletter-text">
              Sign Up For Exclusive Updates,
              New Arrivals And More.
            </p>

            <div className="newsletter-box">

              <input
                type="text"
                placeholder="Your email address..."
              />

              <button>
                Subscribe
              </button>

            </div>

            <h4 className="follow-title">
              Follow Us
            </h4>

            <div className="social-icons">

              <span>f</span>
              <span>X</span>
              <span>◎</span>
              <span>♪</span>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            Copyright ©
            <span> Brew Bliss Store.</span>
            All Rights Reserved.
            Powered By
            <span> UIPARADOX.</span>
          </p>

          <div className="payment-icons">

            <span>amazon</span>
            <span>applePay</span>
            <span>mastercard</span>
            <span>paypal</span>
            <span>visa</span>

          </div>

        </div>

      </footer>

      {searchOpen && (

        <div className="search-overlay">

          <div className="search-modal">

            <button
              className="close-btn"
              onClick={() => setSearchOpen(false)}
            >
              <X size={24} />
            </button>

            <h2>
              WHAT ARE YOU LOOKING FOR?
            </h2>

            <div className="search-box">

              <input
                type="text"
                placeholder="Search for products..."
              />

              <button>
                <Search size={20} />
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}