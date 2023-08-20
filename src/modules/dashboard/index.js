import CommonTable from "@/src/components/table";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const Dashboard = () => {
  const [tableData, setTableData] = useState({ headers: [], body: [] });
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
  const cal=useMemo(()=>uniqueTableData(data),[])

  useEffect(() => {
    uniqueTableData(data);
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
