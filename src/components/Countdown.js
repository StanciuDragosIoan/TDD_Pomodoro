export const displayTimeVals = (duration = 0) => {
  var minutes = Math.floor(duration / 60000);
  var seconds = ((duration % 60000) / 1000).toFixed(0);
  return `${minutes < 10 ? "0" + minutes : minutes}: ${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
export const Countdown = ({ time }) => {
  return (
    <div className="card m-3 text-center">
      <p className="h2 text-center">
        Time
        {time > 0 && (
          <span className="d-block mt-2">{displayTimeVals(time)}</span>
        )}
        {!time && <span className="d-block mt-2">{displayTimeVals(0)}</span>}
      </p>
    </div>
  );
};
