export const ProgressBar = ({ time, tempTime, percentageSplit }) => {
  return (
    <div className="text-center">
      <div
        className="progress mb-3"
        style={{
          width: `${time / percentageSplit}%`,
          transition: "1s",
        }}
      >
        <div
          className="progress-bar-striped progress-bar-animated bg-info"
          role="progressbar"
          style={{ width: time > 0 ? time : tempTime }}
        ></div>
      </div>
    </div>
  );
};
