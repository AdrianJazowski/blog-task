/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getPostFromApiAction } from "./actions";
import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import { routes } from "./routes";
import Home from "./views/home/Home";
import SinglePost from "./views/singlePost/SinglePost";

const App = () => {
  const dispatch = useDispatch();

  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const getPosts = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    dispatch(getPostFromApiAction(data));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.singlePost} component={SinglePost} />
      </Switch>
      <div class={styles.circle1}></div>
      <div class={styles.circle2}></div>
    </BrowserRouter>
  );
};

export default App;
