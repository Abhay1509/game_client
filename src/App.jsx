import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [dataVal, setDataVal] = useState("");

  const showDataHandler = () => {
    axios
      .get("http://192.168.29.74:5173/getAllCollections")
      .then(function (response) {
        const dataId = JSON.stringify(response.data);
        setDataVal(dataId);
        console.log("resp :: ", response.data);
      })
      .catch(function (error) {
        console.log("error :: ", error);
      });
  };
  

  const addHandler = async () => {
    try {
      const response = await axios.post("http://192.168.29.74:5173/addNewRow", {
        name: "Abhay",
        num: 10,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //     function Create() {
  //     const [name, setName] = useState('');
  //     const [num, setNum] = useState('');
  //     const postData = () => {
  //       axios.post(`http://192.168.29.74:5173/addNewRow`, {
  //           name,
  //           num
  //       })
  //   }
  // }

  return (
    <>
      <button onClick={showDataHandler}>Show Data base</button>
      <p>{dataVal}</p>

      <button onClick={addHandler}>Add Data</button>
    </>
  );
}

export default App;
