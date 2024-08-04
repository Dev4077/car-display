import React from "react";
import logo from "../../assets/images/logo.png";
import mobile from "../../assets/images/mobile.png";
import location from "../../assets/images/location.png";
import cart from "../../assets/images/shopping.png";
import notes from "../../assets/images/notes.png";
import "./index.scss";

export default function Header() {

  const toggleDropDown = (toggle, dropdown) => {
    let dropDownToggle = document.getElementById(toggle);
    let dropDownMenu = document.getElementById(dropdown);
    if (dropDownToggle && dropDownMenu) {
      if (dropDownMenu.classList.contains("d-none")) {
        dropDownMenu.classList.add("d-block");
        dropDownMenu.classList.remove("d-none");
      } else {
        dropDownMenu.classList.remove("d-block");
        dropDownMenu.classList.add("d-none");
      }
    }
  };

  return (
    <div className="w-100">
      <div id="header" style={{ scrollbarWidth: 'none' }}>
        <div className=" d-flex align-items-center justify-content-between flex-wrap" >
          <div>
            <img src={logo} alt="logo" width={"176px"} />
          </div>
          <div className="d-flex flex-wrap">
            <div className="d-flex p-1 align-items-center">
              <img src={mobile} alt="" height={25} />
              <p className="mx-2 mb-0 info-num">702-566-8326</p>
            </div>
            <span className="mx-3 divider"></span>
            <div className="d-flex p-1 align-items-center">
              <img src={location} alt="" height={26} />
              <p className="mx-2 mb-0 info">TEAM ACME LOCATION</p>
            </div>
            <span className="mx-3 divider"></span>
            <div className="d-flex p-1 align-items-center">
              <img src={notes} alt="" height={26} />
              <p className="mx-2 mb-0 info">FREE QUOTES</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button className="request-quote">REQUEST QUOTE</button>
            <div className="mx-3">
              <img src={cart} alt="" width={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex align-items-center pt-3 container flex-wrap" style={{ scrollbarWidth: 'none' }}>
        <div className="dropdown-center text-center">
          <button
            className="btn d-flex justify-content-center align-items-center dropdown-button"
            type="button"
            id="dropToggle1"
            onClick={() => toggleDropDown("dropToggle1", "drop1")}
          >
            Auto Glass
            <i className="bi bi-caret-down-fill icon "></i>
          </button>
          <div className="dropdown-menu d-none" id="drop1">
            <a className="dropdown-item" href="#">
              Auto Glass Repair
            </a>
            <a className="dropdown-item" href="#">
              Classic Vehicle Glass
            </a>
            <a className="dropdown-item" href="#">
              Motorcoach glass
            </a>
            <a className="dropdown-item" href="#">
              Rock Chip Repair
            </a>
            <a className="dropdown-item" href="#">
              Side x Side glass
            </a>
          </div>
        </div>
        <div className="dropdown-center text-center">
          <button
            className="btn d-flex justify-content-center align-items-center dropdown-button"
            type="button"
            id="dropToggle2"
            onClick={() => toggleDropDown("dropToggle2", "drop2")}
          >
            Wraps & Design
            <i className="bi bi-caret-down-fill mx-2 icon "></i>
          </button>
          <div className="dropdown-menu d-none" id="drop2">
            <a className="dropdown-item" href="/wraps">
              Vehicle Wraps
            </a>
            <a className="dropdown-item" href="fleet-wraps">
              Fleet Wraps
            </a>
            <a className="dropdown-item" href="#">
              Store Front wraps
            </a>
            <a className="dropdown-item" href="#">
              Glass Wraps
            </a>
            <a className="dropdown-item" href="#">
              Interior wall wraps
            </a>
            <a className="dropdown-item" href="#">
              Branding and logos
            </a>
          </div>
        </div>
        <div className="dropdown-center text-center" >
          <button
            className="btn d-flex justify-content-center align-items-center dropdown-button"
            type="button"
            id="dropToggle3"
            onClick={() => toggleDropDown("dropToggle3", "drop3")}
          >
            Tint & Glass Films
            <i className="bi bi-caret-down-fill mx-2 icon "></i>
          </button>
          <div className="dropdown-menu d-none" id="drop3">
            <a className="dropdown-item" href="/auto-glass">
              Auto Glass Repair
            </a>
            <a className="dropdown-item" href="#">
              Classic Vehicle Glass
            </a>
            <a className="dropdown-item" href="#">
              Motorcoach glass
            </a>
            <a className="dropdown-item" href="#">
              Rock Chip Repair
            </a>
            <a className="dropdown-item" href="#">
              Side x Side glass
            </a>
          </div>
        </div>
        <div className="nav-item text-center">
          <button className="btn d-flex justify-content-center align-items-center " type="button">
            Paint Protection
          </button>
        </div>
        <div className="nav-item text-center">
          <button className="btn d-flex justify-content-center align-items-center" type="button" href='/convantions'>
            Convections
          </button>
        </div>
        <div className="nav-item text-center">
          <button className="btn d-flex justify-content-center align-items-center " type="button">
            Store
          </button>
        </div>
      </div>
    </div>
  );
}
