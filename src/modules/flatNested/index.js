import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  const inputObj = {
    "a": "123",
    "b": [
      "hello",
      "hey",
      "hi"
    ],
    "c": {
      "d": "345",
      "e": {
        "a": "123",
        "b": [
          "hello",
          "hey",
          "hi"
        ],
        "c": {
          "d": "345"
        }
      }
    }
  }
  
  const flatMethod = () => {
    let flatenObj = {};
    const innerFlat = (item, path = '') => {
      Object.keys(item).map((keys) => {
        if (typeof item[keys] === 'object') {
          Object.keys(item[keys]).map((key) => {
            if (
              typeof item[keys][key] === 'object' ||
              Array.isArray(item[keys][key])
            ) {
              innerFlat(item[keys][key], `${keys}_${key}`);
            } else {
              delete flatenObj[path];
              flatenObj[path ? `${path}_${keys}_${key}` : `${keys}_${key}`] =
                item[keys][key];
            }
          });
        } else if (Array.isArray(item[keys])) {
          item[keys].map((arrVal, index) => {
            if (
              Array.isArray(item[keys][arrVal]) ||
              typeof item[keys][arrVal] === 'object'
            ) {
              innerFlat(item[keys][arrVal]);
            } else {
              delete flatenObj[path];
              flatenObj[
                path ? `${path}_${keys}_${index}` : `${keys}_${index}`
              ] = item[keys][index];
            }
          });
        } else {
          flatenObj[path ? `${path}_${keys}` : keys] = item[keys];
        }
      });
    };
    innerFlat(inputObj);
    console.log(flatenObj);
  };
  useEffect(() => {
    flatMethod();
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
