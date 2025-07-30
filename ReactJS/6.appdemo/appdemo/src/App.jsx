
import './App.css'
import Header from './components/header/Header'
import Counter from './components/counter/Counter'
import ImageComp from './components/imagetask/ImageComp'
function App() {

  return (
    <div className="app">
      {/* <h2>App Component</h2>
      <Header/> */}
      <ImageComp/>
      <Counter/>

    </div>
  )
}

export default App
