import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.navMenu}>
      <NavLink className={s.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.navLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
