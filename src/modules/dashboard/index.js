import CommonTable from "@/src/components/table";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const Dashboard = () => {
  const [tableData, setTableData] = useState({ headers: [], body: [] });
  const arr = [10, 5, 2, 8, 3, 1, 4, 13];
  const target = 15;

  const data = [
    { match: 1, dhoni: 100, kohli: 23, rohit: 34 },
    { match: 2, dhoni: 23, hardik: 39, rohit: 23 },
    { match: 3, dhoni: 20, rohit: 34, hardik: 44 },
    { match: 32, rohit: 23, ishan: 1 },
  ];
  const uniqueTableData = useCallback(
    (tabData) => {
      let sumValues = {};
      tabData.map((item) => {
        Object.keys(item).map((key) => {
          sumValues[key] = (sumValues[key] || 0) + item[key];
        });
      });
      setTableData((prev) => ({
        ...prev,
        headers: [...Object.keys(sumValues)],
        body: [...Object.values(sumValues)],
      }));
    },
    [tableData]
  );
  const cal = useMemo(() => uniqueTableData(data), []);
  const getDummyData = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      if (response) {
        console.log(response);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const findCombinations = () => {
    const result = [];
    const findCombinationsRecursive = (start, target, currentCombination) => {
      if (target === 0) {
        result.push([...currentCombination]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        if (arr[i] > target) continue;
        currentCombination.push(arr[i]);
        findCombinationsRecursive(i + 1, target - arr[i], currentCombination);
        currentCombination.pop();
      }
    };
    findCombinationsRecursive(0, target, []);
    console.log(result);
  };

  useEffect(() => {
    uniqueTableData(data);
    findCombinations();
    // getDummyData();
  }, []);
  return (
    <div>
      <CommonTable
        headers={tableData.headers}
        body={tableData.body}
      ></CommonTable>
    </div>
  );
};

export default Dashboard;
