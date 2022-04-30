import { useState } from 'react';
import Sidebar from './Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import logos from "./imgs/logo.png";
import woman from "./imgs/woman.png";
import search from "./imgs/search.png";
import report from "./imgs/report.png";
import Dropdown from '../../Pages/Dropdown';
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import mapimg from "./imgs/map.png";
import rgoo3 from '../../Pages/rgoo3.png'
import rgoo3Max from '../../Pages/rgoo3Max.png'
import menuwhite from "./imgs/menu_white.png";
import magnifier from "./imgs/magnifier.png";
import home from "./imgs/home.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import MapApp from './maps';
const Navbar = () => {
  const [showmap, setShowMap] = useState(false);
  const [sideOn, setsideOn] = useState(false);
  const [menueon, setMenueOn] = useState(false);
  const sidehandle = () => {
    setsideOn(!sideOn)
  }
  const handleCloseMap = () => {
    setShowMap(false)
  };
  const handleMenueOn = () => {
    setMenueOn(!menueon)
  }
  const handleShowMap = () => setShowMap(true);
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered className="bg-modal" show={showmap} onHide={handleCloseMap}>

        <Modal.Header >
          <Modal.Title ><a className="rgoo3Cl" onClick={handleCloseMap}><img closeButton id="v02" src={rgoo3} srcset={`${rgoo3} 1x , ${rgoo3Max} 2x`} /> رجوع</a></Modal.Title>
        </Modal.Header>
        <Modal.Body >

          <div id="map" className="modalBody pt-5 pb-5"><MapApp /></div>
        </Modal.Body>

      </Modal>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          <img src={logos} alt="" />
        </Link>
        <div className="searcharea">
          <input type="text" className="searchbar" />
          <a href="" className="searching">
            <img src={magnifier} className="searchicon" />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link woman" onClick={handleMenueOn}>
                <img src={woman} alt="" />
              </a>
            </li>
            <li class="nav-item active">
              <Link class="nav-link search" to="">
                <img src={search} alt="" />
              </Link>
            </li>
            <li class="nav-item active">
              <a class="nav-link report" onClick={handleShowMap}>
                <img src={mapimg} alt="" />
              </a>
            </li>
            <li class="nav-item active">
              <Link class="nav-link report" to="" onClick={handleShowMap}>
                <img src={report} alt="" />
              </Link>
            </li>
            <li class="nav-item active">
              <a onClick={sidehandle} class="nav-link menuwhite" >
                <img src={menuwhite} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light smallsize">
        <Link class="navbar-brand home" to="/">
          <img src={home} alt="Home Icon" />
        </Link>
        {/* <div className='searcharea'>
                    <input type="text" className='searchbar' />
                    <a href="" className='searching'><img src={magnifier} className='searchicon' /></a>
                </div> */}
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
        <div
          class="collapse navbar-collapse buttonscontent"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link tahlil" to="/tahlel">
                التحليل
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fahs" to="/selfecheck">
                الفحص الذاتي
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link taqwem" to="/taqweem">
                التقويم
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nesbetesaba" to="/risk">
                نسبه الاصابه
              </Link>
            </li>
          </ul>
        </div>
        {sideOn ? <Sidebar /> : null}
      </nav>
      {menueon ? <Dropdown /> : null}
    </>
  );
};
export default Navbar;
