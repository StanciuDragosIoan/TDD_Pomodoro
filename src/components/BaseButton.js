export const BaseButton = ({ btnText, handler, extraClass }) => {
  return (
    <button
      type="button"
      className={`btn btn-dark rounded-btn ${extraClass}`}
      onClick={handler}
    >
      {btnText}
    </button>
  );
};
