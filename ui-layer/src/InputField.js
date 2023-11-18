import "./index.css";
const InputField = ({ setState, state, type }) => {
  return (
    <div>
      <div className="flex justify-center ">
        <input
          className="
          bg-orange-100
                rounded-lg
                focus:outline-none
                focus:ring
                focus:ring-mango"
          type={type}
          placeholder={state}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
};
export default InputField;
