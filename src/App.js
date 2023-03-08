import { Outlet } from 'react-router-dom'
import Navigation from './routes/navigation';


const App = () => {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;
