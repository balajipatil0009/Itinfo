import React, { useState, useEffect } from "react";
import { read, utils } from "xlsx";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";
import Goals from "../componunts/Goals";

const SearchIds = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false);

  const loadExcel = async () => {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/1nrxibaenyNnvJ8MgZ9aEoo_smXtL-67J6OELH0dVyTY/edit?usp=sharing"
    );
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheetName = wb.SheetNames[0];
        const jsonData = utils.sheet_to_json(wb.Sheets[sheetName]);
        jsonData.splice(0, 2);
        jsonData.map((item) => {
          delete item.E;
          delete item.__EMPTY;
          delete item.G;
        });
        const newJsonData = jsonData.filter((item) =>
          Object.keys(item).includes("A")
        );
        setData(newJsonData);
        resolve();
      };
      reader.readAsArrayBuffer(blob);
    });
  };

  useEffect(() => {
    setLoading(true);
    loadExcel().then(() => setLoading(false));
  }, []);

  const handleSearch = () => {
    setSearched(true);
    let newStudent = data.filter((item) => Object.values(item).includes(id));
    if (newStudent.length > 0) {
      setStudent(Object.values(newStudent[0]));
    } else {
      setStudent([]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <p className="text-blue-900 text-xl">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100">
      <Navbar />
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Certificate Validator
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="mb-4">
            <label
              htmlFor="certificateId"
              className="block text-blue-900 font-semibold mb-2"
            >
              Enter Certificate ID
            </label>
            <div className="flex">
              <input
                type="text"
                id="certificateId"
                className="flex-1 p-3 border border-blue-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter certificate ID"
                onChange={(e) => setId(e.target.value.trim())}
              />
              <button
                className="bg-yellow-400 text-blue-900 p-3 rounded-r-lg hover:bg-yellow-500 transition"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <p className="text-red-500 text-sm mt-2">
              Note: The alphabets should be written in the respected case.
            </p>
          </div>
          {searched && student.length > 0 && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg shadow-inner animate-fadeIn">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Certificate Valid
              </h2>
              <p className="text-blue-900">
                This certifies that{" "}
                <span className="font-semibold">{student[1]}</span> has
                completed the{" "}
                <span className="font-semibold">{student[2]}</span> course with
                ID <span className="font-semibold">{student[4]}</span> from
                ITINFO ACADEMY.
              </p>
            </div>
          )}
          {searched && student.length === 0 && (
            <div className="mt-8 text-center animate-fadeIn">
              <p className="text-red-500 font-semibold mb-4">
                Please enter a valid Student ID
              </p>
              <img
                src="/Search.jpg"
                alt="Certificate not found"
                className="mx-auto max-h-[300px] object-contain"
              />
            </div>
          )}
        </div>
      </div>
      <Goals />
      <Footer />
    </div>
  );
};

export default SearchIds;