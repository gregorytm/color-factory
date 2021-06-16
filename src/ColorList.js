import { Link } from "react-router-dom";

function ColorList({ colors }) {
  const colorLinks = Object.keys(colors).map((colorName) => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <h1>Welcome to my color picker</h1>
      <h1>
        <Link to="/colors/new">Add a Color</Link>
      </h1>
      <div>
        <p>Pick your own color!</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorList;
