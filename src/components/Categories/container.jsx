import { useEffect, useState, useCallback } from "react";
import { Categories } from "../Categories";

export function CategoriesContainer({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleCategoryClick = useCallback(
    (category) => {
      const newSelectedCategory =
        selectedCategory === category ? null : category;
      setSelectedCategory(newSelectedCategory);
      onCategorySelect(newSelectedCategory);
    },
    [selectedCategory, onCategorySelect]
  );

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryClick={handleCategoryClick}
      loading={loading}
    />
  );
}
