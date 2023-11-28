import './App.css'
import {Header , Navbar} from './sections/index'
import {Home ,Login ,Footer} from './Pages/index'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  return (
  <> 
  <Router>
  <Header />
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Login' element={<Login />}/>
    </Routes>
  </Router>
  <Footer />
  </>
  );
}

export default App;
