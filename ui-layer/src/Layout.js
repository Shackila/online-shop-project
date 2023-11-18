import "./index.css";
import LoginCover from "./LoginCover.js";
import MottoCover from "./MottoCover.js";
const Layout = () => {
  return (
    <div>
      <span className="h-screen flex items-center justify-center">
        <MottoCover />
        <LoginCover />
      </span>
      <footer className="pb-10 text-center">Designed By Shakila Movahed</footer>
    </div>
  );
};
export default Layout;
