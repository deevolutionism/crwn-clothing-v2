import CategoryPreview from '../../components/category-preview';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories'

const CategoriesPreview = () => {
  const {categories} = useSelector(selectCategories)
  return (
    <>
      {
        Object.keys(categories).map( title => {
          const products = categories[title]
          return (
            <CategoryPreview key={products.id} title={title} products={products} />
          )
        })
      }
    </>
  )
}

export default CategoriesPreview