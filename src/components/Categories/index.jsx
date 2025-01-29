import Button from "../Button";
import "./index.css"

export function Categories({ categories, selectedCategory, onCategoryClick, loading }) {

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "primary" : "bordered"}
          size="md"
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
