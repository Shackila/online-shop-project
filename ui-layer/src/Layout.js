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
      <footer className="text-frog pt-0 pb-11 text-center font-bold tracking-widest">- Designed By Shakila Movahed -</footer>
    </div>
  );
};
export default Layout;
