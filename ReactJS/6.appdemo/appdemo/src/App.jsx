
import './App.css'
import Header from './components/header/Header'
import Counter from './components/counter/Counter'
import ImageComp from './components/imagetask/ImageComp'
import Products from './components/products/Products'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
function App() {

  return (
    <div className="app">
      {/* <h2>App Component</h2>
      <Header/> */}
      <Navbar/>
      <Home/>
      <Products/>
      <Counter/>
      <ImageComp/>
    </div>
  )
}

export default App
