import React, { useEffect } from "react";
import "./style/Post.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions";

export default function Post() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  },[]);
  const list = useSelector((state) => state.postReducer.data);

  return (
    <>
      <h1>POST</h1>
      {list.map((el, ky) => {
        return (
          <React.Fragment key={ky}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </React.Fragment>
        );
      })}
    </>
  );
}
