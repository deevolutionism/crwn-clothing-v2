import { CategoriesContext } from '../../context/categories'
import { useContext} from 'react'
import CategoryPreview from '../../components/category-preview'

const CategoriesPreview = () => {
  const { categories  } = useContext(CategoriesContext)
  
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