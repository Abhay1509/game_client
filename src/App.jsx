import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.69.13:5173/getAllCollections"
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
      const response = await axios.post("http://192.168.69.13:5173/addNewRow", {
        name: "rakesh",
        age: 110,
      });
      // fetchData();
      console.log(response.data);
      // setData([...data, response.data]);
      setData(response.data.message)
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, [postData]);

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
