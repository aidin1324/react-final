import { useCart } from "../../context/CartContext";
import "./index.css";

export function ProductCard(props) {
  const { image, category, title, price, id } = props.data;
  const { cart, addToCart, updateQuantity } = useCart();
  
  const cartItem = cart.find(item => item.id === id);
  
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="category">{category}</div>
      <h4>{title}</h4>
      <div className="footer">
        <div className="price">${price.toFixed(2)}</div>
        
        {cartItem ? (
          <div className="quantity-control">
            <button onClick={() => updateQuantity(id, cartItem.quantity - 1)}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => updateQuantity(id, cartItem.quantity + 1)}>+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(props.data)}>Add to cart</button>
        )}
      </div>
    </div>
  );
}