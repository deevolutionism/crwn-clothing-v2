import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

import { CategoriesContext } from '../../context/categories'
import ProductCard from '../product-card';
import {CategoryPageContainer, CategoryProductContainer} from './styles.jsx'

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext)
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