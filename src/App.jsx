import Header from './components/Header'
import Cart from './components/Cart'
import Home from './pages/Home'

function App() {
  return (
    <div id="root">
      <Header />
      <div className="content">
        <Home />
        <Cart />
      </div>
    </div>
  )
}

export default App
