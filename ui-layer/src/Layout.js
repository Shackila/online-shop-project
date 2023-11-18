import "./Layout.css";
import LoginCover from "./LoginCover.js";
import MottoCover from "./MottoCover.js";
const Layout = () => {
  return (
    <div>
      <span className="justify-covers">
        <MottoCover />
        <LoginCover/>
      </span>
    </div>
  );
};
export default Layout;
