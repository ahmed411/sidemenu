import React from "react";

export default function Home() {
  const [value, setValue] = React.useState("");
  const [gridData, setGridData] = React.useState([]);
  const handleSubmit = () => {
    if (value && value.length > 0) {
      const updatedData = [...gridData, value];
      setGridData(updatedData);
      setValue("");
    } else {
      alert("please enter text");
    }
  };
  return (
    <div>
      <div className="text-container">
        <input
          type="text"
          className="txt-field"
          placeholder="type here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="box-container">
        {gridData.map((items, index) =>
          items.length > 0 ? (
            <div className="box-content" key={index}>
              <h2 className="box-text">{items}</h2>
            </div>
          ) : (
            <div className="box-content">
              <h2 className="box-text">No data</h2>
            </div>
          )
        )}
      </div>
    </div>
  );
}
