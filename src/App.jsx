import React, { useState } from "react";
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
        <div className="phone">(323) 576-1942</div>

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
          <li className="active">HOME</li>
          <li>PRODUCT</li>
          <li>SHOP</li>
          <li>BLOG</li>
          <li>PAGES</li>
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

            <div className="badge">0</div>
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
            <button className="primary-btn">
              Shop Sell
            </button>

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