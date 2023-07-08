import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://172.16.2.119:5173/getAllCollections"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const showDataHandler = () => {
    fetchData();
  };

 
  const postData = async () => {
    try {
      const response = await axios.post("http://172.16.2.119:5173/addNewRow", {
        name: "Abhi",
        age: 27,
      });
      console.log(data);
      setData([...data, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(()=> {
  //   showDataHandler();
  // },[data]);

  return (
    <>
      <div>
        <h2>Data</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Name:{item.name} & Age:{item.age}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={showDataHandler}>Show Data base</button>

      <button onClick={postData}>Add Data</button>
    </>
  );
}

export default App;
