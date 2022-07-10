import './Styles/main.css'
import WebRoutes from './components/WebRoutes';
import {Route, BrowserRouter} from "react-router-dom"
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductPage2 from './views/ProductPage';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resultados from './Pages/Resultados'
import DataForm from './views/DataForm'
import MainLayout from './components/MainLayout';
import Confirmation from './Pages/Confirmation';
function App() {
  return (
    <BrowserRouter>
    <WebRoutes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path="categories" element={<CategoryPage/>} />
            <Route path="search" element={<Resultados/>} />
            <Route path="product" element={<ProductPage/>} />
            <Route path="product2" element={<ProductPage2/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path='purchaseForm' element={<DataForm/>} />
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
        </Route>
        <Route path='/confirmation' element={<Confirmation/>}/>
    </WebRoutes>
    </BrowserRouter>
  )
}

export default App
