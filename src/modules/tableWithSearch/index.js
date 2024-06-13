import React, { useEffect, useState, useRef } from "react";
import "./style.css";

export default function App() {
  const [apiData, setApiData] = useState(null);
  const [totalData, setTotalData] = useState(null);
  const [searchValue, setSerchValue] = useState();
  let timerRef = useRef(null);
  const getApiData = () => {
    fetch(" https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        setApiData(data.products);
        setTotalData(data.products);
      });
  };
  useEffect(() => {
    getApiData();
  }, []);
  const onSearch = () => {
    setTimeout(() => {
      const filteredList = totalData.filter((item) =>
        Object.values(item).some((values) =>
          String(values)
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      );
      setApiData(filteredList);
    }, 1000);
  };
  const onKeyUp = () => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };
  const onKeyDown = () => {
    timerRef.current = setTimeout(() => {
      onSearch();
    }, 2000);
  };
  const onSearchChange = (value) => {
    setSerchValue(value);
  };
  return (
    <div>
      <input
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Enter value to search"
        onKeyUp={() => {
          () => onKeyUp();
        }}
        onKeyDown={() => {
          () => onKeyDown();
        }}
        value={searchValue}
      />
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {apiData &&
            apiData.map((dataObj, index) => (
              <tr key={index}>
                <td> {dataObj["category"]}</td>
                <td> {dataObj["description"]}</td>
                <td> {dataObj["price"]}</td>
                <td> {dataObj["rating"]}</td>
                <td> {dataObj["title"]}</td>
                <td>
                  {" "}
                  <img
                    style={{ height: "40px", width: "50px" }}
                    alt="#"
                    src={dataObj["images"][0]}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
// category description price rating title image[arr]
