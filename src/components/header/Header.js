import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
// // import "./Header.scss";
import { useEffect, useState } from "react";

import { ConText } from "../../context/AppConText";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Header.css";
import Search from "../search/Search";
import logo from "../../assets/logo1.png";
export default function Header() {
  const value = useContext(ConText);
  const [cart] = value.cart;
  const [showSearch, setShowSearch] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  {
    /* <header className={`main-header ${scrolled ? "sticky-header" : " "} `}>
      <div className="header-content">
        <ul className="left">
          <Link to="/">
          <li>Home</li>
          </Link>
          <li>About</li>
          <Link to="/products">
          <li>Categories</li>
          </Link>
        </ul>
        <div className="center">Logo</div>
        <div className="right">
          <TbSearch onClick={() => setShowSearch(true)} />
          <AiOutlineHeart />
          <span className="cart-icon">
            <Link to='/cart' className="link_cart">
            <CgShoppingCart />
            <span>{cart.length}</span>
            </Link>
          </span>
        </div>
      </div>
    </header>
   { showSearch &&  <Search setShowSearch={setShowSearch} />} */
  }

  return (
    <nav className={`navbar ${scrolled ? "sticky-header" : " "} `}>
      <div className="navbar_container1">
        <div className="img__logo">
          <img src={logo} alt="" width="100px" />
        </div>

        <ul
          className={mobile ? "nav-links-mobile" : "nav_links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <span className="search-icon">
            <li>
              <TbSearch onClick={() => setShowSearch(true)} />
            </li>
          </span>

          <span className="cart-icon">
            <Link to="/cart" className="link_cart">
              <li>
                <CgShoppingCart />
                <span>{cart.length}</span>
              </li>
            </Link>
          </span>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </nav>
  );
}
