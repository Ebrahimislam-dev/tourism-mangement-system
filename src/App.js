import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./pages/home/header/Header";
import Home from "./pages/home/home/Home";
// import Services from "./pages/home/Services/Services";
import Faqs from "./pages/home/FAQS/Faqs";
import About from "./pages/home/About/About";
import Contactus from "./pages/home/contact/Contactus";
import Login from "./pages/login/login/Login";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./pages/home/footer/Footer";
import AuthProvider from './context/AuthProvider';



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
            {/* <Route path="/services">
              <Services></Services>
            </Route> */}
            <Route path="/faqs">
              <Faqs></Faqs>
            </Route>


            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contactus></Contactus>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            {/* <PrivateRoute path="/appointments">
               <Appointments></Appointments> 
            </PrivateRoute> */}
            {/* <PrivateRoute path="/booking/:servicesId">
              <Booking></Booking>
            </PrivateRoute> */}

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
