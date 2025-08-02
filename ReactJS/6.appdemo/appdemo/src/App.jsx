
import './App.css'
import Header from './components/header/Header'
import Counter from './components/counter/Counter'
import ImageComp from './components/imagetask/ImageComp'
import Products from './components/products/Products'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import {Route,Routes} from 'react-router-dom';
import Electronics from './components/products/categories/electronics/Electronics'
import Jewellery from './components/products/categories/jewellery/Jewellery'
import MensClothing from './components/products/categories/mensclothing/Mensclothing'
import WomesClothing from './components/products/categories/womensclothing/Womensclothing'
function App() {

  return (
    <div className="app">
      {/* <h2>App Component</h2>
      <Header/> */}
      <Navbar/>
      <Routes>
      <Route path={"/"} element={<Home/>}/>

      <Route path={"/products"} element={<Products/>}>
        <Route path={"electronics"} element={<Electronics/>}/>
        <Route path={"jewellery"} element={<Jewellery/>}/>
        <Route path={"mensclothing"} element={<MensClothing/>}/>
        <Route path={"womensclothing"} element={<WomesClothing/>}/>
      </Route>

      <Route path={"/counter"} element={<Counter/>}/>
      <Route path={"/imagecomp"} element={<ImageComp/>}/>
      
      </Routes>
    </div>
  )
}

export default App
