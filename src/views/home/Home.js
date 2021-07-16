/** @format */

import React from "react";
import { useSelector } from "react-redux";
import SmallPost from "../../components/smallPost/SmallPost";
import styles from "./Home.module.css";

const Home = () => {
  const selectedPosts = useSelector(({ posts }) => posts);
  return (
    <div className={styles.home}>
      {selectedPosts.map((post) => {
        return <SmallPost key={post.id} {...post} />;
      })}
    </div>
  );
};

export default Home;
