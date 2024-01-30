import { NavLink } from "react-router-dom";

function PageNavigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home Page </NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing </NavLink>
          </li>
          <li>
            <NavLink to="/product">Prduct </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNavigation;
