import ClipLoader from "react-spinners/ClipLoader";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.overlay}>
      <ClipLoader className={s.loader} color="#ff8484" margin={5} size={55} />
    </div>
  );
};

export default Loader;
