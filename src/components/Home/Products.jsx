import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import data from "../../messages/data.json";
import AddCart from "../../assets/icons/ToCart.svg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Products() {
  return (
    <div className="container h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] text-gray-900 font-semibold">
          Popular Products
        </h1>
        <Link className="flex items-center text-sm gap-3 text-[#00B207]">
          View All <GrLinkNext />
        </Link>
      </div>
      <div className="flex items-center py-7 justify-center flex-wrap">
        {data.map((item) => (
          <div key={item.id} className="h-82 border-gray-200 border w-64">
            <div className="flex items-center justify-center">
              <img className="h-55" src={item.img} alt="hello" />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-gray-700 text-sm">{item.name}</p>
                <p className="text-gray-900 mb-1 font-semibold">
                  {item.price}{" "}
                  <span className="text-gray-500">{item.oldPrice}</span>{" "}
                </p>
                <Stack spacing={2}>
                  <Rating
                  sx={{fontSize : "15px"}}
                    name="half-rating-read"
                    defaultValue={3}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
              <button>
                <img src={AddCart} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
