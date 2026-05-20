import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookingAppointMent from "./components/Home/BookingAppointment/BookingAppointMent";
import Contacts from "./components/Home/Contacts/Contacts";
import Home from "./components/Home/Home/Home";
import OurDoctors from "./components/Home/OurDoctors/OurDoctors";
import Service from "./components/Home/Service/Service";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Login from "./components/Shared/Login/Login";
import PrivetRoute from "./components/Shared/Login/PrivetRoute/PrivetRoute";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/service">
            <Service></Service>
          </PrivetRoute>
          <PrivetRoute path="/contact">
            <Contacts />
          </PrivetRoute>
          <PrivetRoute path="/Our-Doctors">
            <OurDoctors></OurDoctors>
          </PrivetRoute>
          <PrivetRoute path="/Booking-appointment">
            <BookingAppointMent />
          </PrivetRoute>
          <PrivetRoute path="/ServiceDetail/:id">
            <ServiceDetail></ServiceDetail>
          </PrivetRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
