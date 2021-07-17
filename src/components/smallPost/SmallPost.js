/** @format */

import React from "react";
import styles from "./SmallPost.module.css";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addOrRemovePostToLiked } from "../../actions";
import { Link } from "react-router-dom";
import { setPostsInLocalStorage } from "../../utils/utils";

const Post = ({ title, id, body, userId }) => {
  const dispatch = useDispatch();
  const selectedLikedPost = useSelector(({ likedPost }) => likedPost);
  const isLiked = selectedLikedPost.includes(id) ? true : false;

  const likePost = () => {
    if (selectedLikedPost.includes(id)) {
      const newLikedPost = selectedLikedPost.filter((post) => post !== id);
      dispatch(addOrRemovePostToLiked(newLikedPost));
      setPostsInLocalStorage(newLikedPost);
    } else {
      const newLikedPost = [...selectedLikedPost, id];
      dispatch(addOrRemovePostToLiked(newLikedPost));
      setPostsInLocalStorage(newLikedPost);
    }
  };

  return (
    <article className={styles.post}>
      <div className={styles.post__body}>
        <h2>{title}</h2>
        <Link
          to={{
            pathname: `/post/${id}`,
            state: {
              title,
              id,
              body,
              userId,
              isLiked,
            },
          }}
        >
          czytaj więcej
        </Link>
      </div>
      <AiFillHeart
        style={{ fill: isLiked ? "red" : "darkgray" }}
        className={styles.post__like}
        onClick={likePost}
        title={isLiked ? "Ulubione" : "Polub"}
      />
    </article>
  );
};

export default Post;
