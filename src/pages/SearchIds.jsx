import React, { useState } from "react";
import { useEffect } from "react";
import { read, utils } from "xlsx";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";
import Goals from "../componunts/Goals";

const SearchIds = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [student, setStudent] = useState([]);

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
        // console.log(Object.keys(item).includes("A"));

        return Object.keys(item).includes("A");
      });

      setData(newJsonData);
    };

    reader.readAsArrayBuffer(blob);
  };

  const handleSearch = () => {
    let newStudent = data.filter((item) => {
      return Object.values(item).includes(id);
    });
    if (newStudent.length > 0) {
      setStudent(Object.values(newStudent[0]));
    } else {
      setStudent([]);
    }
  };

  useEffect(() => {
    loadExcel();
  }, []);

  return (
    <div className="bg-gradient-to-t from-white via-white to-sky-500 min-h-[100vh]">
      <Navbar />
      <div className="w-[98vw] flex justify-center p-4 pb-0 pt-20">
        <input
          type="text"
          placeholder="Enter certificate ID"
          className="border p-2 w-full md:w-1/3 bg-transparent"
          onChange={(e) => {
            if (e.target.value != null || e.target.value != undefined) {
              setId(e.target.value.trim());
            }
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
        {student.length > 0 ? (
          <>
            <p>
              This Certifies that <b> Mr {student[1]} </b>has complied{" "}
              <b>{student[2]}</b> Course with Id <b>{student[4]}</b> from{" "}
              <b>ITINFO ACADEMY.</b>
            </p>
          </>
        ) : (
          <div>
            <p className="text-red-600 block">
              Please Enter a Valid Student ID
            </p>
            <img
              src="/Search.jpg"
              alt=""
              srcset=""
              className="h-[60vh] block mix-blend-darken	"
            />
          </div>
        )}
      </div>
      <Goals />
      <Footer />
    </div>
  );
};

export default SearchIds;
