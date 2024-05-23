import MockDataService from "@/src/lib/services/loginService";
import React, { useState } from "react";
import OnClickModule from "../onClickModule";
import { SampleContextFunction } from "@/src/lib/context/sampleContext";

const Login = () => {
  const [dropDownValue, setDropDownValue] = useState('none');
  const options = [
    { name: "one", value: "one" },
    { name: "two", value: "two" },
    { name: "three", value: "three" },
    { name: "four", value: "four" },
    { name: "five", value: "five" },
  ];
  React.useEffect(() => {
    // getDummyData();
  }, []);

  const getDummyData = async () => {
    try {
      const response = await MockDataService();
      if (response) console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const onDropDownChange = (e) => {
    setDropDownValue(e.target.value);
  };
  return (
    <div>
      <select onChange={(e)=>onDropDownChange(e)} value={dropDownValue}>
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}{" "}
            </option>
          );
        })}
      </select>
      {/* <SampleContextFunction.Provider value='Hi testing useContext'>
     <OnClickModule/>
     </SampleContextFunction.Provider> */}
    </div>
  );
};

export default Login;
