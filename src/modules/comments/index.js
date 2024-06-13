import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [comments, setComments] = useState([{ comment: "", replies: [] }]);
  const [commentValue, setCommentValue] = useState("");
  const [replyValue, setReplyValue] = useState("");

  const commentChange = (value) => {
    setCommentValue(value);
  };
  const onCommentClick = () => {
    let commentsList = [...comments];
    let obj = { comment: commentValue, replies: [] };
    commentsList.push(obj);
    setComments([...commentsList]);
    setCommentValue('')
  };
  const replyChange = (value) => {
    setReplyValue(value);
  };
  const onReplyClick = (index) => {
    let commentsList = [...comments];
    commentsList[index]["replies"].push(replyValue);
    setComments([...commentsList]);
    setReplyValue('')
  };
  return (
    <div>
     
      {/* <RatingComponent /> */}
      {/* <CommentSection/> */}
      <textarea value={commentValue} onChange={(e) => commentChange(e.target.value)}></textarea>
      <button onClick={() => onCommentClick()}>Comment</button>
      <br />
      {comments.map((commentObj, index) => {
        return (
          <>
            {commentObj["comment"] !== "" && (
              <>
                {" "}
                <text>{commentObj.comment}</text>
                <br />
                <textarea
                 value={replyValue}
                  onChange={(e) => replyChange(e.target.value)}
                ></textarea>
                <br />
                <button onClick={() => onReplyClick(index)}>Reply</button>
                <br />
                {commentObj["replies"].map((reply) => (
                  <>
                    {" "}
                    <text>{reply}</text>
                    <br />
                  </>
                ))}
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
