import React from "react";
import "./style.css";

export default function App() {
  const [fields, setFields] = React.useState([
    {
      type: "",
      selectcolumns: "",
      selectQuery: "",
      suffix: "",
    },
  ]);
  const onAddClick = () => {
    let fieldList = [...fields];
    let obj = {
      type: "",
      selectcolumns: "",
      selectQuery: "",
      suffix: "",
    };
    fieldList.push(obj);
    setFields(fieldList);
  };
  const onRemoveClick = (index) => {
    let fieldList = [...fields];
    fieldList.splice(index, 1);
    setFields(fieldList);
  };
  const onFieldChange = (e, name, index) => {
    let fieldList = [...fields];
    fieldList[index][name] = e.target.value;
    setFields(fieldList);
  };
  const onSubmit = () => {
    let obj = { query: [...fields] };
    console.log(obj);
  };
  const onReset = () => {
    setFields([
      {
        type: "",
        selectcolumns: "",
        selectQuery: "",
        suffix: "",
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        {fields.map((item, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              {Object.keys(item).map((key) => {
                return (
                  <div
                    key={key}
                    style={{ display: "flex", flectDirection: "column" }}
                  >
                    {" "}
                    <labbel>{key}</labbel>
                    <input
                      placeholder={key}
                      onChange={(e) => onFieldChange(e, key, index)}
                      value={fields[index][key]}
                      required
                    />
                  </div>
                );
              })}
              {index === fields.length - 1 && fields.length > 1 ? (
                <>
                  <button onClick={() => onRemoveClick(index)}> remove</button>{" "}
                  <button onClick={onAddClick}> add</button>{" "}
                </>
              ) : fields.length > 1 ? (
                <button onClick={() => onRemoveClick(index)}> remove</button>
              ) : index === fields.length - 1 ? (
                <>
                  <button onClick={onAddClick}> add</button>{" "}
                </>
              ) : (
                ""
              )}
            </div>
          );
        })}
        <button type="submit">Submit</button>
        <button onClick={onReset}>Reset</button>
      </form>
    </div>
  );
}
