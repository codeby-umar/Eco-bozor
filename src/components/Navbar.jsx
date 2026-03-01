import { BiSearch } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/plant.svg";
import Bag from "../assets/icons/Bag.svg";
import Heart from "../assets/icons/Heart.svg";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  const products = [
    "Fresh Vegetables",
    "Meat & Fish",
    "Snacks",
    "Diabetic Food",
    "Dish Detergents",
    "Oil",
    "Green Apple",
    "Corn",
    "Fresh Cauliflower",
    "Green Capsicum",
    "Green Chili",
    "Fresh Indian Malta",
  ];

  const Over_View = products
    .filter((items) => items.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 4);

  return (
    <header>
      <div className="hidden md:block">
        <div className="flex item-center font-pop justify-between container py-2">
          <Link to={"/map"} className="flex item-center gap-2">
            <HiOutlineLocationMarker color="gray" />
            <p className="text-xs item-center text-gray-500">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </Link>
          <div className="flex justify-center  text-sm gap-4  text-gray-500">
            <Link to={"/login"} className="text-xs text-gray-500 ">
              Sign In
            </Link>
            <span className="h-4 w-[0.4px] bg-gray-500"></span>
            <Link to={"/register"} className="text-xs  text-gray-500">
              Sign Up
            </Link>
          </div>
        </div>
        <hr className="border-0.5 border-gray-300" />
      </div>
      <div className="container flex items-center justify-between p-4 md:p-8">
        <div className="flex item-center gap-2">
          <img src={Logo} alt="Logo" />
          <a href="/" className="text-greens font-pop text-[32px]">
            Ecobazar
          </a>
        </div>
        <div className="hidden md:block">
          <div className="flex item-center justify-between rounded-[10px] w-124.5 border-[0.5px] border-gray-300">
            <div className="flex items-center w-full px-3">
              <button className="text-2xl">
                <FiSearch />
              </button>
              <input
                className="w-full p-3.5 outline-none "
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className=" bg-[#00B207] rounded-r-lg p-3.5 px-10 text-white font-pop font-semibold">
              Search
            </button>
          </div>
          {search && (
            <ul className="fixed p-1">
              {Over_View.map((items, i) => (
                <a
                  href="/"
                  className="text-sm flex items-center gap-1 font-pop"
                  key={i}
                >
                  {" "}
                  <BiSearch /> {items}
                </a>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Link to={"/like"}>
              <img src={Heart} alt="Heart" />
            </Link>
            <div className="flex gap-4 items-center">
              <Link to={"/cart"}>
                <img src={Bag} alt="Bag cart" />
              </Link>
              <div>
                <p className="text-xs font-pop  text-gray-700">
                  Shopping Cart :
                </p>
                <span className="text-pop text-sm">$57.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
