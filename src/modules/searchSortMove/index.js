import React, { useState } from 'react';
import './style.css';

function App() {
  const ARTICLES = [
    {
      title: 'A message to our customers',
      upvotes: 12,
      date: '2020-01-24',
    },
    {
      title: 'Alphabet earnings',
      upvotes: 22,
      date: '2019-11-23',
    },
    {
      title: 'Artificial Mountains',
      upvotes: 2,
      date: '2019-11-22',
    },
    {
      title: 'Scaling to 100k Users',
      upvotes: 72,
      date: '2019-01-21',
    },
    {
      title: 'the Emu War',
      upvotes: 24,
      date: '2019-10-21',
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: '2019-11-21',
    },
    {
      title: 'Simple text editor has 15k monthly users',
      upvotes: 7,
      date: '2010-12-31',
    },
  ];
  const [filteredArticles, setFilteredArticles] = useState(ARTICLES);
  const [searchItem, setSearchItem] = useState('');
  const [visible, setVisible] = useState(false);
  const str = 'abcdacegikmo';
  const arr = [10, 5, 2, 8, 3, 1, 4, 13];
  const target = 15;
  const tabel = React.useRef();
  const tabel1 = React.useRef();
  const tabel2 = React.useRef();
  const tabel3 = React.useRef();
  const tabel4 = React.useRef();
  const findCombinations = () => {
    const result = [];

    const findPossibleComb = (start, target, currentCombinations) => {
      if (target === 0) {
        result.push([...currentCombinations]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        if (arr[i] > target) continue;
        currentCombinations.push(arr[i]);
        findPossibleComb(i + 1, target - arr[i], currentCombinations);
        currentCombinations.pop();
      }
    };
    findPossibleComb(0, target, []);
    console.log(result);
  };
  const addListner = () => {
    const scrollDisplay =
      window.pageYOffset || document.documentElement.scrollTop;
    setVisible(scrollDisplay > 0);
  };
  React.useEffect(() => {
    const addListner = () => {
      const scrollDisplay =
        window.pageYOffset || document.documentElement.scrollTop;
      setVisible(scrollDisplay > 0);
    };
    window.addEventListener('scroll', addListner);
    return () => {
      window.removeEventListener('scroll', addListner);
    };
  }, []);
  const sequenceFunction = () => {
    // let count = 1;
    // let char = str[0];
    // let maxCount = 0;
    // for (let i = 1; i < str.length; i++) {
    //   if (char.localeCompare(str[1]) ===1) {
    //     char = str[i];
    //     count++;
    //     maxCount = Math.max(maxCount, count);
    //   } else {
    //     char = str[i];
    //     count = 1;
    //     maxCount=0
    //   }
    // }
    // console.log(maxCount)
    let count = 1;
    let maxCount = 1;

    for (let i = 1; i < str.length; i++) {
      if (str.charCodeAt(i) === str.charCodeAt(i - 1) + 1) {
        count++;
        if (count > maxCount) {
          maxCount = count;
        }
      } else {
        count = 1;
      }
    }

    console.log(maxCount);
  };
  const searchClick = () => {
    let filterList = filteredArticles.filter((item) =>
      Object.values(item).some((values) =>
        String(values).toLowerCase().includes(searchItem.toLowerCase())
      )
    );
    setFilteredArticles([...filterList]);
  };
  const headClick = (head) => {
    let sortedList = [...filteredArticles];
    sortedList.sort((a, b) => b[head].localeCompare(a[head]));
    setFilteredArticles([...sortedList]);
  };
  const searchChange = (value) => {
    sequenceFunction();
    findCombinations();
    setSearchItem(value);
    let filterList = ARTICLES.filter((item) =>
      Object.values(item).some((values) =>
        String(values).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredArticles([...filterList]);
  };
  const buttonClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
      <input
        value={searchItem}
        onChange={(e) => searchChange(e.target.value)}
      />
      <button onClick={() => buttonClick(tabel4)}>Go to bottom</button>
      <button onClick={searchClick}>search</button>
      <div ref={tabel}>
        {filteredArticles.length && (
          <table>
            <thead>
              <tr>
                {Object.keys(filteredArticles[0]).map((key) => (
                  <th key={key} onClick={() => headClick(key)}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((item) => (
                <tr key={item}>
                  {Object.keys(item).map((keys) => (
                    <td key={keys}>{item[keys]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div ref={tabel1}>
        {visible && (
          <button onClick={() => buttonClick(tabel)}>Go to top</button>
        )}

        {filteredArticles.length && (
          <table>
             <thead>
              <tr>
                {Object.keys(filteredArticles[0]).map((key) => (
                  <th key={key} onClick={() => headClick(key)}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((item) => (
                <tr key={item}>
                  {Object.keys(item).map((keys) => (
                    <td key={keys}>{item[keys]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        {filteredArticles.length && (
          <table>
            <thead>
              <tr>
                {Object.keys(filteredArticles[0]).map((key) => (
                  <th key={key} onClick={() => headClick(key)}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((item) => (
                <tr key={item}>
                  {Object.keys(item).map((keys) => (
                    <td key={keys}>{item[keys]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div ref={tabel2}>
        {filteredArticles.length && (
          <table>
            <thead>
              <tr>
                {Object.keys(filteredArticles[0]).map((key) => (
                  <th key={key} onClick={() => headClick(key)}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((item) => (
                <tr key={item}>
                  {Object.keys(item).map((keys) => (
                    <td key={keys}>{item[keys]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        {filteredArticles.length && (
          <table>
             <thead>
              <tr>
                {Object.keys(filteredArticles[0]).map((key) => (
                  <th key={key} onClick={() => headClick(key)}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((item) => (
                <tr key={item}>
                  {Object.keys(item).map((keys) => (
                    <td key={keys}>{item[keys]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div ref={tabel3}>
        <button onClick={() => buttonClick(tabel1)}>Go to table1</button>

        {filteredArticles.length && (
          <table>
            <thead>
              <tr>
                {Object.keys(filteredArticles[0]).map((key) => (
                  <th key={key} onClick={() => headClick(key)}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((item) => (
                <tr key={item}>
                  {Object.keys(item).map((keys) => (
                    <td key={keys}>{item[keys]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        {filteredArticles.length && (
          <table>
            <thead>
              <tr>
                {Object.keys(filteredArticles[0]).map((key) => (
                  <th key={key} onClick={() => headClick(key)}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((item) => (
                <tr key={item}>
                  {Object.keys(item).map((keys) => (
                    <td key={keys}>{item[keys]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div ref={tabel4}>
        <button onClick={() => buttonClick(tabel2)}>Go to second</button>

        {filteredArticles.length && (
          <table>
            <thead>
              <tr>
                {Object.keys(filteredArticles[0]).map((key) => (
                  <th key={key} onClick={() => headClick(key)}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((item) => (
                <tr key={item}>
                  {Object.keys(item).map((keys) => (
                    <td key={keys}>{item[keys]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
