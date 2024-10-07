import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-600 p-4 font-sans font-semibold">
    <div className="flex justify-between items-center">
    <Link to="/" className="text-white mx-2">Quote App</Link>
      <div>
        {/* <Link to="/" className="text-white mx-2">Home</Link> */}
        <Link to="/saved" className="text-white mx-2 hover:underline ">Saved Items</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
