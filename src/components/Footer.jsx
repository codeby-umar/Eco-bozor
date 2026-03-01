import Logo from "../assets/icons/plant.svg";
import icons from "../assets/icons/fullicons.svg"

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container p-11">
        <div className="md:flex justify-between flex-wrap mb-12">
          <div className="w-84 py-2">
            <div className="flex item-center mb-4 gap-2">
              <img src={Logo} alt="Logo" />
              <a href="/" className="text-greens font-pop text-[32px]">
                Ecobazar
              </a>
            </div>
             <p className="text-sm mb-4 text-gray-500">
               Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
             </p>
               <div className="flex items-center gap-3">
                 <a href="tel:+998507121208">+998 93 712 12 08</a>
                  <span className="text-gray-500">or</span>
                  <a href="mailto:codingbyumar@gmail.com">coding@gmail.com</a>
               </div>
          </div>
          <div>
              <h3 className="mb-5 text-lg">My Account</h3>
              <ul>
                 <li className="text-gray-400 mb-3 hover:text-white">My Account</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Order History</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Shoping Cart</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Wishlist</li>
              </ul>
          </div>
          <div>
              <h3 className="mb-5 text-lg">Helps</h3>
              <ul>
                 <li className="text-gray-400 mb-3 hover:text-white">Contact</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Faqs</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Terms & Condition</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Privacy Policy</li>
              </ul>
          </div>
          <div>
              <h3 className="mb-5 text-lg">Proxy</h3>
              <ul>
                 <li className="text-gray-400 mb-3 hover:text-white">About</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Shop</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Product</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Track Order</li>
              </ul>
          </div>
          <div>
              <h3 className="mb-5 text-lg">Categories</h3>
              <ul>
                 <li className="text-gray-400 mb-3 hover:text-white">Fruit & Vegetables</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Meat & Fish</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Bread & Bakery</li>
                 <li className="text-gray-400 mb-3 hover:text-white">Beauty & Health</li>
              </ul>
          </div>
        </div>
        <hr className="border-[0.5px] border-gray-700 mb-6" />
        <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Ecobazar eCommerce © 2026. All Rights Reserved</p>
            <a href="https://bank.uz/uz/cards"target="">
                 <img src={icons} alt="iconlar" />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
