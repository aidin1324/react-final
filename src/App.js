import { useState } from "react";
import { CategoriesContainer } from "./components/Categories/container.jsx";
import { ProductCardListContainer } from "./components/ProductCardList/container.jsx";
import { Header } from "./components/Header";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <div className="content">
          <CategoriesContainer onCategorySelect={setSelectedCategory} />
          <ProductCardListContainer selectedCategory={selectedCategory} />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;