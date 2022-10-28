import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Login from './parts/login/Login';
import Register from './parts/login/Register';
import Homepages from './pages/Homepages';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Thankyou from './pages/Thankyou'
import Notfound from './pages/Notfound'
import Store from './parts/homePages/Store';
import Test from './test'


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route exact path='/' element={<Homepages/>}/>
      <Route exact path='/Store' element={<Store/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/test' element={<Test/>}/>
      <Route exact path='/categories/:idc' element={<Details/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/Thankyou' element={<Thankyou/>}/>
      <Route exact path='*' element={<Notfound/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
