import "../styles/base-button.css";
const BaseButton = ({ context, handleClick, size }) => {
  return (
    <button
      onClick={handleClick}
      className={size ? `base__btn ${size}` : "base__btn"}
    >
      {context}
    </button>
  );
};
export default BaseButton;
