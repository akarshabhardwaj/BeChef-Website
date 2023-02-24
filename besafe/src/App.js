import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Cart from './Pages/Cart';






function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Cart/>
      <Footer/>

    </div>
  );
}

export default App;
