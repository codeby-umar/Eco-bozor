import Buttons from "../../ui/Buttons.jsx";
import { GrLinkNext } from "react-icons/gr";
import drive from "../../assets/images/drive.svg";
import head from "../../assets/images/head.svg";
import bags from "../../assets/images/bags.svg";
import packages from "../../assets/images/package.svg";

function Special() {
  return (
    <section className="h-full py-7">
      <div className=" gap-6 justify-between w-full flex md:flex-nowrap flex-wrap">
        <div className="images">
          <div className="text-white">
            <h1 className="text-5xl font-semibold text-white max-w-140 mb-7">
              Fresh & Healthy Organic Food
            </h1>
            <div className="mb-7 flex rounded-4xl gap-4">
              <div className="bg-green-500 h-23 w-0.5"></div>
              <div>
                <p className="text-xl py-4 font-semibold mb-2">
                  Sale up to{" "}
                  <span className="bg-[#FF8A00] p-3 px-5 rounded-[5px]">
                    30% OFF
                  </span>
                </p>
                <p className="text-sm">Free shipping on all your order.</p>
              </div>
            </div>
            <div>
              <Buttons color={"#00B207"} bg={"#fff"} w={"210px"} />
            </div>
          </div>
        </div>
        <div>
          <div className="sale mb-6">
            <p className="text-sm uppercase">Summer Sale</p>
            <h2 className="text-[32px] font-semibold mb-3">75% OFF</h2>
            <p className="text-sm text-gray-500 mb-7">Only Fruit & Vegetable</p>
            <button
              type="submit"
              className="flex items-center font-semibold text-green-500 gap-4  justify-center"
            >
              Shop now <GrLinkNext size={"23px"} />
            </button>
          </div>
          <div className="sales text-white">
            <p className="text-sm text-center mb-2 p-4 uppercase">Best Deal</p>
            <h2 className="text-[32px] text-center font-semibold mb-3">
              Special Products Deal of the Month
            </h2>
            <div className="flex items-center justify-center">
              <Buttons color={"#00B207"} bg={"none"} w={"170px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="container  h-32 shadow-gray-300 flex items-center justify-between px-8 rounded-lg shadow-xl ">
        <div className="flex items-center gap-4 justify-center">
          <div>
            <img src={drive} alt="drive" />
          </div>
          <div>
            <p className="font-semibold mb-2">Free Shipping</p>
            <p className="text-sm text-gray-400">
              Free shipping on all your order
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <div>
            <img src={head} alt="drive" />
          </div>
          <div>
            <p className="font-semibold mb-2">Customer Support 24/7</p>
            <p className="text-sm text-gray-400">Instant access to Support</p>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <div>
            <img src={bags} alt="drive" />
          </div>
          <div>
            <p className="font-semibold mb-2">100% Secure Payment</p>
            <p className="text-sm text-gray-400">
              We ensure your money is save
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <div>
            <img src={packages} alt="drive" />
          </div>
          <div>
            <p className="font-semibold mb-2">Money-Back Guarantee</p>
            <p className="text-sm text-gray-400">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Special;
