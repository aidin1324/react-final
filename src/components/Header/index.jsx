import { useState, useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext";
import { Cart } from "../Cart";
import "./index.css";

export function Header() {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Закрывать корзину при клике вне её
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1>ShopCart</h1>
        
        <div className="cart-icon-container" ref={cartRef}>
          <button className="cart-button" onClick={toggleCart}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="currentColor" d="M7 8V6a5 5 0 0 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm2 0h6V6a3 3 0 0 0-6 0v2zm-2 2v10h14V10H7zm8 5h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"/>
            </svg>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
          
          {isCartOpen && (
            <div className="cart-dropdown">
              <Cart />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}