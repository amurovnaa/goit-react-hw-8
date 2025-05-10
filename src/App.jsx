import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/Contacts/ContactsPage";
import Homepage from "./pages/Homepage/Homepage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Suspense, useEffect } from "react";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { refreshThunk } from "./redux/auth/operations";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loader />}
      <SharedLayout />
      <div className={css.app}>
        <Suspense fallback={Loader}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
