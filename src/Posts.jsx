import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPoswts } from "./actions";

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log("called");
    dispatch(fetchPoswts());
    console.log("called1");
  }, []);

  const renderPosts = () => {
    console.log(JSON.stringify(state));
    if (state.loading) {
      return <h1>Loading</h1>;
    }
    if (state.error) {
      return <h1>error</h1>;
    }
    return state.items.map((el) => {
      return <h3>{el.title}</h3>;
    });
  };

  return <div>{renderPosts()}</div>;
};

export default Posts;
