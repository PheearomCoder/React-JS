import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route, Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProductsForm from './components/ProductsForm';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<ProductsForm/>}/>
        <Route path='/datatable' element={<Dashboard/>} />
      </Route>

        <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

function MainLayout () {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}