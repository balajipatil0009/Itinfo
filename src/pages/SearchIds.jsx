import React, { useState } from "react";
import { useEffect } from "react";
import { read, utils } from "xlsx";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";

const SearchIds = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

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
      jsonData.splice(0, 2);
      jsonData.map((item) => {
        // console.log(item);
        delete item.E;
        delete item.__EMPTY;
        delete item.G;
      });

      const newJsonData = jsonData.filter((item) => {
        console.log(Object.keys(item).includes("A"));

        return Object.keys(item).includes("A");
      });

      setData(newJsonData);
    };

    reader.readAsArrayBuffer(blob);
  };

  const handleSearch = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Id Not Present");
    }
  };

  useEffect(() => {
    loadExcel();
  }, []);

  return (
    <div className="bg-sky-400 min-h-[100vh]">
      <Navbar />
      <div className="w-[98vw] flex justify-center p-4 pb-0 pt-20">
        <input
          type="text"
          placeholder="Enter certificate ID"
          className="border p-2 w-full md:w-1/3 bg-transparent"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button className="bg-yellow-400 p-2" onClick={handleSearch}>
          search
        </button>
      </div>
      <h1 className="text-center text-red-500 font-bold pb-4">
        The ALPHABETS should be written in respected case
      </h1>
      <div className="w-[100vw] flex justify-center pb-20">
        <table className="border table-fixed lg:w-[70vw]">
          <thead>
            <tr>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th key={key} className="border">
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                id={Object.values(row)[4]}
                style={
                  id == Object.values(row)[4]
                    ? { backgroundColor: "#31ff00" }
                    : {}
                }
              >
                {Object.values(row).map((value, i) => (
                  <td key={i} className="border">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default SearchIds;
