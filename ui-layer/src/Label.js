import "./index.css";
const Label = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center font-serif">
        <label>{children}</label>
      </div>
    </div>
  );
};
export default Label;
