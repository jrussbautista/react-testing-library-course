import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [bgColor, setBgColor] = useState("MediumVioletRed");
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonTextColor =
    bgColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setIsDisabled(isChecked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : bgColor }}
        onClick={() => setBgColor(buttonTextColor)}
        disabled={isDisabled}
      >
        Change to {replaceCamelWithSpaces(buttonTextColor)}
      </button>
      <div>
        <label htmlFor="disabled-button-checkbox"> Disable Button </label>
        <input
          type="checkbox"
          defaultChecked={isDisabled}
          aria-checked={isDisabled}
          id="disabled-button-checkbox"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
