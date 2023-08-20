import React from "react";

const CommonTable = ({ headers, body }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers?.map((item, index) => {
              return <th key={index} style={{gap:'3rem',border:'1px solid'}}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
          {body?.map((item, index) => {
            return (
              // <tr key={index}>
              //   {Object.keys(item).map((key, idx) => {
              //     return <td key={idx}>{item[key]}</td>;
              //   })}
              // </tr>
              <td key={index}>{item}</td>
            );
          })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
