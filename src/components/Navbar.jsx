import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="lk bg-transparent">
          <Link className="lk bg-transparent" to="/home">
            Home
          </Link>
        </div>
        <div className="lk">
          <Link className="lk" to="/nearest">
            Nearest
          </Link>
        </div>
        <div className="lk">
          <Link className="lk" to="/best">
            Bests
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
