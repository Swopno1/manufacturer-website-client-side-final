import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MyOrders from './Pages/Dashboard/MyOrders';
import Profile from './Pages/Dashboard/Profile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Portfolio from './Pages/Portfolio/Portfolio';
import Products from './Pages/Products/Products';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Shared/Footer';
import Nav from './Shared/Nav';
import PageNotFound from './Shared/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/products' element={<Products></Products>} />
        <Route
          path='/tools/:id'
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path='/dashboard' element={<Profile></Profile>}></Route>
          <Route
            path='/dashboard/myorders'
            element={<MyOrders></MyOrders>}
          ></Route>
          <Route
            path='/dashboard/addreview'
            element={<AddReview></AddReview>}
          ></Route>
          <Route
            path='/dashboard/myprofile'
            element={<Profile></Profile>}
          ></Route>
          <Route
            path='/dashboard/allorders'
            element={<ManageOrders></ManageOrders>}
          ></Route>
          {/* <Route
            path='/dashboard/myprofile'
            element={<Profile></Profile>}
          ></Route>
          <Route
            path='/dashboard/myprofile'
            element={<Profile></Profile>}
          ></Route>
          <Route
            path='/dashboard/myprofile'
            element={<Profile></Profile>}
          ></Route> */}
        </Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/blogs' element={<Blog></Blog>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/*' element={<PageNotFound></PageNotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
