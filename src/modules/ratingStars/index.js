import React, { useState } from "react";

const RatingComponent = ({ stars = 5 }) => {
  const [clickedStarList, setclickedStarList] = useState([]);
  const onStarClick = (index) => {
    let starArr = [...clickedStarList];
    if (starArr.includes(index)) {
      starArr.splice(index, starArr.length - 1);
    } else {
      starArr = [];
      for (let i = 0; i <= index; i++) {
        starArr.push(i);
      }
    }
    setclickedStarList([...starArr]);
  };
  return (
    <div>
      {[...Array(stars)].map((_item, index) => (
        <span
          style={{
            color: clickedStarList.includes(index) ? "gold" : "grey",
            cursor: "pointer",
          }}
          onClick={() => onStarClick(index)}
          key={index}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};
export default RatingComponent;
