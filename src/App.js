import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Tools from './Pages/Tools/Tools';
import Footer from './Shared/Footer';
import Nav from './Shared/Nav';
import PageNotFound from './Shared/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/tools' element={<Tools></Tools>} />
        <Route
          path='/tools/:id'
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route path='/portfolio' element={<Portfolio></Portfolio>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/*' element={<PageNotFound></PageNotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
