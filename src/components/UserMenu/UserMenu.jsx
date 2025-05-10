import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
};
