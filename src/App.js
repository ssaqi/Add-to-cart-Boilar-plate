import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Application/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Application/Home'
import Contact from './Application/Home'
import Main from './Application/Main';
import CartPage from './Application/cartPage';
function App() {
return(

  <>
    <Navbar/>
   <Routes>
   <Route  path='/'     element={<Main/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/Contact'element={<Contact/>} />
    <Route path='/CartPage'element={<CartPage/>} />
   </Routes>
  
  </>

);
  
}

export default App;
