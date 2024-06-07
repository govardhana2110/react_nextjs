import React from 'react';
import './style.css';

export default function App() {
  const [maxNumber, setMaxNumber] = React.useState(0);
  const [repeatitionObj, setRepeatitionObj] = React.useState({});
  const arr = [1, 3, 5, 6, 7, 8, 9, 7, 6];
  const limit = 5;
  let str = 'sssdddbbbrrrrrrhhrrtttzzzzzzzzzzz';

  const windowSlideFunc = () => {
    let maxNum = 0;
    let windowSum = 0;
    for (let i = 0; i < limit; i++) {
      windowSum += arr[i];
    }
    maxNum = windowSum; // Initialize maxNum with the first windowSum
    for (let i = limit; i < arr.length; i++) {
      windowSum = windowSum - arr[i - limit] + arr[i];
      maxNum = Math.max(maxNum, windowSum);
    }
    setMaxNumber(maxNum);
  };

  React.useEffect(() => {
    windowSlideFunc();
    repeationFunc();
  }, []);

  const repeationFunc = () => {
    let count = 1;
    let currentChar = str[0];
    let index = 0;
    let resultList = [];
    for (let i = 1; i < str.length; i++) {
      if (currentChar === str[i]) {
        count++;
      } else {
        if (count > 1) {
          resultList.push({
            char: currentChar,
            index: index,
            repeteation: count,
          });
        }
        count = 1;
        index = i;
        currentChar = str[i];
      }
    }
    if (count > 1) {
      resultList.push({
        char: currentChar,
        index: index,
        repeteation: count,
      });
    }

    let maxRepObj = resultList[0];
    resultList.forEach((item) => {
      if (item.repeteation > maxRepObj.repeteation) {
        maxRepObj = item;
      }
    });

    setRepeatitionObj(maxRepObj);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>max number is {maxNumber}</p>
      <label>
        Letter {repeatitionObj?.char} repeated {repeatitionObj?.repeteation}{' '}
        times from index {repeatitionObj?.index}
      </label>
    </div>
  );
}
