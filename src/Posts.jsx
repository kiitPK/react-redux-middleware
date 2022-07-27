import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPoswts } from "./actions";

const Posts = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state);

  useEffect(() => {
    console.log("called");
    dispatch(fetchPoswts());
    console.log("called1");
  }, []);
  return (
    <div>
      {post.map((el) => {
        return <h3>{el.title}</h3>;
      })}
    </div>
  );
};

export default Posts;
