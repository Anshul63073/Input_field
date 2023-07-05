import React, { useState } from "react";
import "./styles.css";

const TableGenerator = () => {
  const [number, setNumber] = useState(0);
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setNumber(inputValue);

    if (inputValue > 0) {
      const tableRows = [];
      for (let i = 1; i <= inputValue; i++) {
        tableRows.push(
          <tr key={i}>
            <td>{i}</td>
            <td>{i * 2}</td>
            <td>{i * 3}</td>
          </tr>
        );
      }
      setTableData(tableRows);
    } else {
      setTableData([]);
    }
  };

  return (
    <div className="container">
      <input type="number" value={number} onChange={handleInputChange} />
      {number > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Double</th>
              <th>Triple</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      ) : null}
    </div>
  );
};

export default TableGenerator;
