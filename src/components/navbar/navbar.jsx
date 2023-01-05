import React, { Component } from "react";
import SearchBox from "../search-box/search-box";
import logo from "../../assests/download (1).png";
import MenuIcon from "@mui/icons-material/Menu";
class Navbar extends Component {
  // Remember whenever setstate is called render is called  again

  render() {
    console.log("render");
    const navLinks = document.querySelector(".navLinks");

    const onClickIcon = (event) => {
      // event.preventDefault();
      console.log(event);
      console.log(navLinks);
      navLinks.classList.toggle("top-[10%]");
    };

    return (
      <div>
        <header className="bg-blue-900">
          <nav className="flex  justify-between items-center w-[95%]  mx-auto">
            <div>
              <img src={logo} className="w-16 rounded-full"></img>
            </div>
            <div className="md:static md:min-h-fit  md:w-auto absolute left-0 top-[-100%] min-h-[60vh] w-full bg-blue-900 flex items-center navLinks text-white">
              <ul className="flex md:flex-row flex-col items-center md:gap-x-0.5 gap-y-10">
                <li>
                  <a href="#" className="mx-2 hover:text-gray-500">
                    Studens
                  </a>
                </li>
                <li>
                  <a href="#" className=" mx-2 hover:text-gray-500">
                    Request
                  </a>
                </li>
                <li>
                  <a href="#" className="mx-2 hover:text-gray-500">
                    Approved
                  </a>
                </li>
                <li>
                  <a href="#" className="mx-2 hover:text-gray-500">
                    Denied
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center px-5 py-2">
              {/* <input
                className="px-5 py-2" type="search"
                placeholder="Search"
              ></input> */}

              <SearchBox
                onChangeHandler={this.props.onSearchChange}
                className="student-search-box mt-4 rounded-3xl"
                placeholderr="Search"
              />
              <div
                className="px-5 cursor-pointer md:hidden"
                onClick={onClickIcon}
              >
                <MenuIcon />
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
