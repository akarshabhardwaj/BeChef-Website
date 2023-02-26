import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';

import AdminRoutes from './Admin Panel/AdminRoutes/AdminRoutes';
import Cart from './Pages/Cart';
import AllRoutes from './Routes/Allroutes';
import { AuthContext } from './Context/AuthContextProvider';


function App() {
  const val=React.useContext(AuthContext);
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
