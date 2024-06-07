import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [apiData, setApiData] = useState(null);
  const [totalApiResponse, setTotalApiResponse] = useState(null);
  const getAPiData = () => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((resp) => resp.json())
      .then((data) => {
        setApiData(data);
        setTotalApiResponse(data);
      });
  };
  useEffect(() => {
    getAPiData();
  }, []);
  const onDeleteClick = (index) => {
    let responseList = { ...apiData };
    responseList.data.splice(index, 1);
    setApiData({ ...responseList });
  };
  const onSearch = (searchVal) => {
    const dataList = { ...apiData };
    const filteredValues = totalApiResponse.data.filter((item) =>
      Object.values(item).some((values) =>
        String(values).toLowerCase().includes(searchVal.toLowerCase())
      )
    );
    dataList.data = [...filteredValues];
    setApiData({ ...dataList });
  };
  return (
    <div>
      <input
        placeholder="search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      {apiData?.data && apiData.data.length && (
        <table>
          <thead>
            <tr>
              {Object.keys(apiData.data[0]).map((headers) => (
                <th key={header}>{headers}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {apiData.data.map((bodyItem, index) => (
              <tr key={index}>
                {Object.keys(bodyItem).map((item) => (
                  <td key={item}>{bodyItem[item]}</td>
                ))}
                <td>
                  <button onClick={() => onDeleteClick(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
