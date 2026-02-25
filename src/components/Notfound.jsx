import errors from "../assets/images/Image.svg";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="p-10 max-w-4xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="flex justify-center">
          <img className="w-80 md:w-150" src={errors} alt="Error 404" />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-7xl font-pop font-bold text-green-600">404</h1>
          <h2 className="text-3xl font-bold font-pop mt-2 text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="mt-4 font-pop text-gray-600 leading-relaxed">
            Sorry, the page you are looking for does not exist or has been
            deleted.
          </p>

          <Link
            to="/"
            className="inline-block font-pop mt-6 bg-green-600 hover:bg-green-700 transition duration-300 text-white px-6 py-3"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
