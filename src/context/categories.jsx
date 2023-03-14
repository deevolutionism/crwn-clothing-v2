import { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase'

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => null
})

export const CategoriesProvider = ({children}) => {
  const  [categories, setCategories] = useState({})
  
  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      setCategories(categoriesMap)
    }
    getCategories()
  }, [])
  
  const value = {categories, setCategories}
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

