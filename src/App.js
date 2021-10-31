import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./pages/header/Header";
import Home from "./pages/home/home/Home";
import Faqs from "./pages/FAQS/Faqs";
import About from "./pages/About/About";
import Contactus from "./pages/contact/Contactus";
import Login from "./pages/login/login/Login";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./pages/footer/Footer";
import AuthProvider from './context/AuthProvider';
import Admin from "./pages/Admin/Admin";
import PrivateRoute from "./pages/privateRoute/PrivateRoute";
import Myorder from "./pages/home/Myorder/Myorder";
import Booking from "./pages/home/Booking/Booking";
import ManageAllOrder from './pages/home/ManageAllOrder/ManageAllOrder';





function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <Myorder></Myorder>
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contactus></Contactus>
            </Route>
            <Route path="/faqs">
              <Faqs></Faqs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:servicesId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
