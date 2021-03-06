import React from 'react';
import { useEffect } from 'react';
import Auth from 'components/AuthenticationService'
import { Route, Routes} from "react-router-dom";
import HomeNavigation from "../components/HomeNavigationBar";
import UserNavigation from "../components/UserNavigationBar";
import Home from './home/Home';
import Login from '../components/Login';
import Join from '../components/Join';
import StoreHome from './store/StoreHome';
import Customer from './store/customer/Customer';
import CustomerList from './store/customer/CustomerList';
import AddCustomer from './store/customer/AddCustomer';
import DetailCustomer from './store/customer/DetailCustomer';
import Materials from './store/Materials';
import Reservation from './store/reservation/Reservation';
import ReservationList from './store/reservation/ReservationList';
import ReservationCalendar from './store/reservation/ReservationCalendar';
import Sales from './store/Sales';
import Community from './community/Community';
import System from './system/System';

const MainPage = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const isExpired = Auth.isExpired();
      console.log("token isExpired : ", isExpired);
      if (isExpired) {
        // if (window.location.pathname !== '/') {
        localStorage.clear();
        alert("로그인이 만료됐습니다.");
        window.location.replace("/");
        // }
      }
    } else {
      console.log("no token");
      if (window.location.pathname !== '/') {
        window.location.replace("/");
      }
    }
  }, []);
  
  let id = localStorage.getItem("id");
 
  return (
    <div>
      <section>{ !id ? <HomeNavigation /> : <UserNavigation /> }</section>
      <section>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/home/join" exact={true} element={<Join />} />
          <Route path="/home/login" exact={true} element={<Login />} />
          <Route path="/store" exact={true} element={<StoreHome />} />
          <Route path="/store/customer" exact={true} element={<Customer />} />
          <Route path="/store/customer/customer-list" exact={true} element={<CustomerList />} />
          <Route path="/store/customer/add-customer" exact={true} element={<AddCustomer />} />
          <Route path="/store/customer/detail-customer/:userNo/:cusNo" exact={true} element={<DetailCustomer />} />
          <Route path="/store/materials" exact={true} element={<Materials />} />
          <Route path="/store/reservation" exact={true} element={<Reservation />} />
          <Route path="/store/reservation/reservation-calendar" exact={true} element={<ReservationCalendar />} />
          <Route path="/store/reservation/reservation-list" exact={true} element={<ReservationList />} />
          <Route path="/store/sales" exact={true} element={<Sales />} />
          <Route path="/store/community" exact={true} element={<Community />} />
          <Route path="/store/system" exact={true} element={<System />} />
        </Routes>
      </section>
    </div>
  );
};

export default MainPage;