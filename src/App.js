/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getPostFromApiAction } from "./actions";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { routes } from "./routes";
import Home from "./views/home/Home";
import SinglePost from "./views/singlePost/SinglePost";

const App = () => {
  const dispatch = useDispatch();

  const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((respone) => respone.json())
      .then((data) => {
        dispatch(getPostFromApiAction(data));
      });
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
      <div class="circle1"></div>
      <div class="circle2"></div>
    </BrowserRouter>
  );
};

export default App;
