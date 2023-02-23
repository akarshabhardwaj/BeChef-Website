import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import AllProducts from './Admin Panel/Dashboard/AllProducts/AllProducts';
import AdminRoutes from './Admin Panel/AdminRoutes/AdminRoutes';





function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Home/>
      <Footer/> */}
   <AdminRoutes/>
    </div>
  );
}

export default App;
