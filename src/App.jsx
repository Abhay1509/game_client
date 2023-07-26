import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App({ serverIP, serverPort }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://${serverIP}:${serverPort}/getAllCollections`
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
      const response = await axios.post(
        "http://${serverIP}:${serverPort}/addNewRow",
        {
          name: name,
          age: age,
        }
      );
      // fetchData();
      console.log(response.data);
      // setData([...data, response.data]);
      setData(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(
        `http://${serverIP}:${serverPort}/deleteRow/${itemId}`
      );
      const updatedData = data.filter((item) => item.id !== itemId);
      setData(updatedData);
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
      <div className="bg-red">
        <h2>Data</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Name:{item.name} & Age:{item.age}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Age
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          value={age}
          onChange={handleAgeChange}
          placeholder="Enter your Name"
        />
        <button className="btn btn-primary" onClick={postData}>
          Add Data
        </button>
      </div>

      <button className="btn btn-success" onClick={showDataHandler}>
        Show Data base
      </button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}

export default App;
