import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';

import AdminRoutes from './Admin Panel/AdminRoutes/AdminRoutes';
import Cart from './Pages/Cart';
import AllRoutes from './Routes/Allroutes';


function App() {
  return (
    <div className="App">

      {/* <Navbar/>
      <Home/>
      <Footer/> */}
   

      <Navbar/>
      <AllRoutes/>
      {/* <Home/> */}
      {/* <Cart/><AdminRoutes/> */}
      <Footer/>

    </div>
  );
}

export default App;
