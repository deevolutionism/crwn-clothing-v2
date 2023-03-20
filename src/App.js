import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocFromAuth } from './utils/firebase'
import { useDispatch } from 'react-redux';
import { setUser } from './store/user'
import { Outlet } from 'react-router-dom'
import Navigation from './routes/navigation';
// import SHOP_DATA from './shop-data';


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocFromAuth(user)
      }
      const {email} = user
      dispatch(setUser(email))
    })
    return unsubscribe
  }, [dispatch])

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // })

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;
