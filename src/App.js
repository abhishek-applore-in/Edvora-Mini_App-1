import './App.css';
import Products from './components/ProductsList/Products';
import Orders from './components/Orders/Orders';
import Users from './components/Users/Users';
import { Route, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Routes>
          <Route path="/products" exact element={<Products/>}/>
          <Route path="/orders" exact element={<Orders/>}/>
          <Route path="/users" exact element={<Users/>}/>
        </Routes>  
      
    </div>
  );
}

export default App;
