
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
import PageNotFound from './components/pagenotfound/PageNotFound'
import AllProducts from './components/allproducts/AllProducts'
import UserNames from './components/user-names/UserNames'
import A from './components/parent-child/A'
import Aassign from './components/assignment-parenting/Aassign'
import Acon from './components/context-api/Acon'
import HomeContext from './components/context-api/HomeContext'
import Name from './components/child-parent/Name'
import Ref from './components/ref/ref'
import Timer from './components/timer/Timer'
import RefDom from './components/ref/RefDom'
import UseReducer from './components/reducer/UseReducer'
import CounterRed from './components/reducer/CounterRed'
import NameParent from './redux/components/NameParent'
import DetailsChild from './redux/components/DetailsChild'
import City from './redux/components/City'
import ReduxHome from './redux/components/ReduxHome'
import AllProductsWithRedux from './components/allproducts/AllProductsWithRedux'
import ProductDetails from './components/allproducts/ProductDetails'




function App() {

  return (
    <div className="app">
      {/* <h2>App Component</h2>
      <Header/> */}
      {/* <HomeContext/> */}
      {/* <Name/> */}
      {/* <Ref/> */}
      {/* <Timer/> */}
      {/* <RefDom/> */}
      {/* <UseReducer/> */}
      {/* <CounterRed/> */}
      {/* <div className='subAppContainer'>
        <NameParent/>
        <City/>
      </div>
      <hr></hr>
      <DetailsChild/> */}
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
      <Route path={"/allproducts"} element={<AllProducts/>}/>
      {/* <Route path={'/usernames'}  element={<UserNames/>}/> */}
      <Route path={"/reducerfn"} element={<CounterRed/>}/>
      <Route path={'/parenting'}  element={<A/>}/>
      <Route path={'/assignment'}  element={<Aassign/>}/>
      <Route path={'/context-api'}  element={<Acon/>}/>
      <Route path={'/redux'} element={<ReduxHome/>}/>
      <Route path={'/prodwithredux'} element={<AllProductsWithRedux/>}/>
      <Route path={'/proddetails/:id'} element={<ProductDetails/>}/>
      <Route path={"*"} element={<PageNotFound/>}/>           {/* This has to be last */}
      </Routes>
    </div>
  )
}

export default App
