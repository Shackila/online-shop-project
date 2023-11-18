import "./index.css";
const SignUpButton = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center">
        <button
          type="submit"
          className=" bg-mango  text-lightyGray transition-all duration-400 px-2 sm:px-6 md:px-16 font-serif rounded-full  hover:bg-frog"
        >
          {children}
        </button>
      </div>
    </div>
  );
};
export default SignUpButton;
