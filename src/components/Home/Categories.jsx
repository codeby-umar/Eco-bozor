import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";


function Categories() {
  const vagatables = [
    {
      id: 1,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/rGgvthrx/image-1-1.png",
    },
    {
      id: 2,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/Kjr41PRg/image-1-2.png",
    },
    {
      id: 3,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/V08BsfMF/image-1-3.png",
    },
    {
      id: 4,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/DgD3N5qs/image-1-4.png",
    },
    {
      id: 5,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/dwzKLv2M/image-1-5.png",
    },
    {
      id: 6,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/Xx2fJtNL/image-1.png",
    },
     {
      id: 7,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/Kjr41PRg/image-1-2.png",
    },
    {
      id: 8,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/V08BsfMF/image-1-3.png",
    },
    {
      id: 9,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/DgD3N5qs/image-1-4.png",
    },
    {
      id: 10,
      name: "Fresh Fruit",
      img: "https://i.ibb.co/dwzKLv2M/image-1-5.png",
    },
    
  ];
  return (
    <section className="container  py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] text-gray-900 font-semibold">
          Popular Categories
        </h1>
        <Link className="flex items-center text-sm gap-3 text-[#00B207]">
          View All <GrLinkNext />
        </Link>
      </div>
      <div className="flex items-center flex-wrap gap-6 justify-center p-8">
        {vagatables.map((items) => (
             <div
            key={items.id}
            className="h-54 rounded-sm border-gray-200 w-51 border hover:border-none duration-300 hover:ring-2 hover:ring-[#00B207]/50 "
          >
            <img className="m-3" src={items.img} alt="vegatables img" />
            <p className="text-center text-lg text-gray-900 font-semibold">
              {items.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
