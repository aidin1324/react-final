import { useState } from "react";
import { CategoriesContainer } from "./components/Categories/container.jsx";
import { ProductCardListContainer } from "./components/ProductCardList/container.jsx";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="content">
      <CategoriesContainer onCategorySelect={setSelectedCategory} />
      <ProductCardListContainer selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
