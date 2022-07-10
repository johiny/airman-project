import './Styles/main.css'
import WebRoutes from './components/WebRoutes';
import {Route, BrowserRouter} from "react-router-dom"
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./components/Product";
import Products from "./components/Products";
import Resultados from './Pages/Resultados'
import DataForm from './views/DataForm'
import MainLayout from './components/MainLayout';
function App() {
  return (
    <BrowserRouter>
    <WebRoutes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path="search" element={<Resultados/>} />
        </Route> 
    </WebRoutes>
    </BrowserRouter>
  )
}

export default App
