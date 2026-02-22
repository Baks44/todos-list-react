import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Zadania</NavLink>
      </li>
      <li>
        <NavLink to="/about">O autorze</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
