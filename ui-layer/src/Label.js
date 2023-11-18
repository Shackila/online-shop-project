import "./index.css";
const Label = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center font-serif text-frog">
        <label>{children}</label>
      </div>
    </div>
  );
};
export default Label;
