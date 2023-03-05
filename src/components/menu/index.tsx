import { Link } from "react-router-dom";
import { StyledMenu } from "./style";

const Menu = () => {
  return (
    <StyledMenu>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/cars">
        <p>Cars</p>
      </Link>
      <Link to="/galery">Galery</Link>
    </StyledMenu>
  );
};

export default Menu;
