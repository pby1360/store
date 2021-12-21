import React from 'react';
import HomeNavigation from "../components/HomeNavigationBar";
import UserNavigation from "../components/UserNavigationBar";
import { Route, Routes} from "react-router-dom";
import Home from './home/Home';
import Login from '../components/Login';
import Join from '../components/Join';
import StoreHome from './store/StoreHome';
import Customers from './store/Customers';
import Materials from './store/Materials';
import Reservations from './store/Reservations';
import Sales from './store/Sales';
import Community from './community/Community';
import System from './system/System';

const MainPage = () => {

  let session = 1;
 
  return (
    <div>
      <section>{ session === 1 ? <HomeNavigation /> : <UserNavigation /> }</section>
      <section>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/home/join" exact={true} element={<Join />} />
          <Route path="/home/login" exact={true} element={<Login />} />
          <Route path="/store" exact={true} element={<StoreHome />} />
          <Route path="/store/customers" exact={true} element={<Customers />} />
          <Route path="/store/materials" exact={true} element={<Materials />} />
          <Route path="/store/reservations" exact={true} element={<Reservations />} />
          <Route path="/store/sales" exact={true} element={<Sales />} />
          <Route path="/store/community" exact={true} element={<Community />} />
          <Route path="/store/system" exact={true} element={<System />} />
        </Routes>
      </section>
    </div>
  );
};

export default MainPage;