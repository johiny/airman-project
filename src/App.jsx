import './index.css'
import WebRoutes from './Components/WebRoutes';
import {Route, BrowserRouter} from "react-router-dom"
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import ProductPage2 from './views/ProductPage';
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Resultados from './Pages/Resultados'
import DataForm from './views/DataForm'
import MainLayout from './components/MainLayout';
import Confirmation from './Pages/Confirmation';
import Processing from './Pages/Processing';
function App() {
  return (
    <BrowserRouter>
    <WebRoutes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path="categories" element={<CategoryPage/>} />
            <Route path="search" element={<Resultados/>}>
              <Route path=":query" element={<Resultados/>}/>
            </Route>
            <Route path="product/:id" element={<ProductPage/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path='purchaseForm' element={<DataForm/>} />
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='processing' element={<Processing/>}/>
        </Route>
        <Route path='/confirmation/:confirmationState' element={<Confirmation/>}/>
    </WebRoutes>
    </BrowserRouter>
  )
}

export default App
