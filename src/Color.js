import { Link } from "react-router-dom";

function Color({ hex, color, history }) {
  if (!hex) {
    history.push("./colors");
  }

  return (
    <div style={{ backgroundColor: hex }}>
      <p>this is{color}.</p>
      <p>enjoy</p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Color;
