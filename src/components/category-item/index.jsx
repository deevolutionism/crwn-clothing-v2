import { CategoryBody, CategoryDescription, CategoryTitle, CategoryContainer, BackgroundImg} from './styles.jsx'
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({ category }) => {
  const {imageUrl, title, route} = category;
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(route)
  } 
  
  return (
    <CategoryContainer onClick={onClickHandler}>
      <BackgroundImg imageUrl={imageUrl} />
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBody>
    </CategoryContainer>
  )
}

export default CategoryItem