import "./category.styles.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesMap, selectCategoriesIsLoading
} from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    console.log("effect fired calling setProduct");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>

      <h2 className="category-title">{category.toUpperCase()}</h2>
      {
        isLoading ? (<Spinner/>) : (<div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>)
      }
      
    </>
  );
};

export default Category;
