
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
import Profile from './components/profile/Profile'
import Login from './components/login/Login'
import { useContext } from 'react'
import { AuthContext } from './components/authentication/AuthProvider'
import Logout from './components/logout/Logout'
import { Navigate } from 'react-router-dom'
import ProtectedRoutes from './components/authentication/ProtecedRoutes'
import UseEffect from './components/lifeCycle/UseEffect'
import ProductDetailsWithRedux from './components/allproducts/ProductDetailsWithRedux'
import UsersJson from './components/json-server/UsersJson'
import NewUser from './components/json-server/NewUser'
import UserHome from './components/json-server/UserHome'


function App() {
  const {isLoggedIn}=useContext(AuthContext);
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
      <Route path={"/"} element={<Login/>}/>
      <Route path={"/home"} element={isLoggedIn?<Home/>:<Navigate to="/"/>}/>  {/* we can write as below protected with separte fun or direct */}
      <Route path={"/products"} element={<ProtectedRoutes><Products/></ProtectedRoutes>}>
        <Route path={"electronics"} element={<ProtectedRoutes><Electronics/></ProtectedRoutes>}/>
        <Route path={"jewellery"} element={<ProtectedRoutes><Jewellery/></ProtectedRoutes>}/>
        <Route path={"mensclothing"} element={<ProtectedRoutes><MensClothing/></ProtectedRoutes>}/>
        <Route path={"womensclothing"} element={<ProtectedRoutes><WomesClothing/></ProtectedRoutes>}/>
      </Route>

      <Route path={"/counter"} element={<ProtectedRoutes><Counter/></ProtectedRoutes>}/>
      <Route path={"/imagecomp"} element={<ProtectedRoutes><ImageComp/></ProtectedRoutes>}/>
      <Route path={"/allproducts"} element={<ProtectedRoutes><AllProducts/></ProtectedRoutes>}/>
      {/* <Route path={'/usernames'}  element={<UserNames/>}/> */}
      <Route path={"/reducerfn"} element={<ProtectedRoutes><CounterRed/></ProtectedRoutes>}/>
      <Route path={'/parenting'}  element={<ProtectedRoutes><A/></ProtectedRoutes>}/>
      <Route path={'/assignment'}  element={<ProtectedRoutes><Aassign/></ProtectedRoutes>}/>
      <Route path={'/context-api'}  element={<ProtectedRoutes><Acon/></ProtectedRoutes>}/>
      <Route path={'/redux'} element={<ProtectedRoutes><ReduxHome/></ProtectedRoutes>}/>
      <Route path={'/prodwithredux'} element={<ProtectedRoutes><AllProductsWithRedux/></ProtectedRoutes>}/>
      <Route path={'/proddetails/:id'} element={<ProtectedRoutes><ProductDetails/></ProtectedRoutes>}/>
      <Route path={'/proddetails/:id/:x'} element={<ProtectedRoutes><ProductDetailsWithRedux/></ProtectedRoutes>}/>
      <Route path={"/profile"} element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/>
      <Route path={"/useeffect"} element={<ProtectedRoutes><UseEffect/></ProtectedRoutes>}/>
      <Route path={"/jsonserver"} element={<ProtectedRoutes><UserHome/></ProtectedRoutes>}/>
      <Route path={"/logout"} element={<ProtectedRoutes><Logout/></ProtectedRoutes>}/>
      <Route path={"*"} element={<PageNotFound/>}/>           {/* This has to be last */}
      </Routes>
    </div>
  )
}

export default App
