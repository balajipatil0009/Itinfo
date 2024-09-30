import React, { useState } from "react";
import { useEffect } from "react";
import { read, utils } from "xlsx";

const SearchIds = () => {
  const [data, setData] = useState([]);

  const loadExcel = async () => {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/1-smCzzN5c4YQo-CfMdvAbpH0SwaP5zQwmwh-l-Dy9No/edit?gid=0#gid=0"
    );
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onload = (event) => {
      const wb = read(event.target.result);
      const sheetName = wb.SheetNames[0];
      const jsonData = utils.sheet_to_json(wb.Sheets[sheetName]);
      setData(jsonData);
    };

    reader.readAsArrayBuffer(blob);
  };

  useEffect(() => {
    loadExcel();
  }, []);

  return (
    <div>
      <button onClick={loadExcel}>Load Excel</button>
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchIds;
