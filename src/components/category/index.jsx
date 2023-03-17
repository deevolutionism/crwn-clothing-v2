import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductCard from '../product-card';
import {CategoryPageContainer, CategoryProductContainer} from './styles.jsx'
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories';

const Category = () => {
  const { category } = useParams();
  const {categories} = useSelector(selectCategories)
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <CategoryPageContainer>
      <h2>{category}</h2>
      <CategoryProductContainer>
        {
          products && products.map((product) => <ProductCard key={product.id} product={product} /> )
        }
      </CategoryProductContainer>
    </CategoryPageContainer>
  )
}

export default Category