import './App.css';
import Navbar from './components/navbar'
import Home from "./pages/home";

function App() {
  return (
      <>
          <Navbar/>
          <div className='container-fluid pt-4'>
              <Home/>
          </div>
          </>
  )
}

export default App;
