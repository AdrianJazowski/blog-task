/** @format */

import React, { useEffect, useState } from "react";
import Comment from "../../components/comment/Comment";
import styles from "./SinglePost.module.css";

const SinglePost = (props) => {
  const { title, id, body } = props.location.state;
  const [comments, setComments] = useState([]);

  const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

  const getDataAboutOnePost = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setComments(data);
  };

  useEffect(() => {
    getDataAboutOnePost();
    return () => {
      setComments([]);
    };
  }, []);

  return (
    <article className={styles.singlePost}>
      <div className={styles.singlePost__content}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <ul className={styles.singlePost__comments}>
        {comments.map((comment) => {
          return <Comment key={comment.id} {...comment} comments={comments} />;
        })}
      </ul>
    </article>
  );
};

export default SinglePost;
