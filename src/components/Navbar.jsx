import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex gap-5 text-white decoration-black absolute top-5 left-5  ">
      <Link className="no-underline decoration-white text-white" to="/">
        Search
      </Link>
      <Link className="no-underline text-white" to="/analytics">
        Analytics
      </Link>
    </div>
  );
};
export default Navbar;
