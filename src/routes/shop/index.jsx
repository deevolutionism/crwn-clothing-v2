import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview'
import Category from '../../components/category'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { setCategories } from '../../store/categories'
import { getCategoriesAndDocuments } from '../../utils/firebase'

const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      dispatch(setCategories(categoriesMap))
    }
    getCategories()
  }, [dispatch])
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop