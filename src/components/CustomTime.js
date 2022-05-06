export const CustomTime = ({ setCustomMins, configureTimer, customMins }) => {
  return (
    <div className="row mt-5">
      <p className="h5 text-center text-white">Choose your own interval</p>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter minutes"
          aria-label="Enter minutes"
          onChange={(e) => setCustomMins(e.target.value)}
        />
        <button
          onClick={() => configureTimer(parseInt(customMins))}
          className="btn btn-dark"
        >
          Set Minutes
        </button>
      </div>
    </div>
  );
};
