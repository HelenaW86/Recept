import { Autoplay } from "swiper";
import {ReactComponent as GodMat} from "../assets/godmat.svg"
import { Link } from "react-router-dom";

const Header = ({ resetRecipes }) => {
  return (
    <div className="hero-content">
      <Link to={"/"}>
        <GodMat onClick={() => resetRecipes()} />
      </Link>

      <p>
        Vi har sparat våra absoluta favoritrecept så vi kan dela med oss av dem.
      </p>
    </div>
  );
}
 
export default Header;