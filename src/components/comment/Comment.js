/** @format */
import React from "react";
import styles from "./Comment.module.css";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveCommentToLiked } from "../../actions";
import { setCommentsInLocalStorage } from "../../utils/utils";

const Comment = ({ email, id, body }) => {
  const dispatch = useDispatch();
  const selectedLikedComments = useSelector(
    ({ likedComments }) => likedComments
  );

  const isLiked = selectedLikedComments.includes(id) ? true : false;

  const likeComment = () => {
    if (selectedLikedComments.includes(id)) {
      const newLikedComments = selectedLikedComments.filter(
        (comment) => comment !== id
      );
      dispatch(addOrRemoveCommentToLiked(newLikedComments));
      setCommentsInLocalStorage(newLikedComments);
    } else {
      const newLikedComments = [...selectedLikedComments, id];
      dispatch(addOrRemoveCommentToLiked(newLikedComments));
      setCommentsInLocalStorage(newLikedComments);
    }
  };

  return (
    <li key={id} className={styles.comment}>
      <div className={styles.comment__body}>
        <AiFillHeart
          style={{ fill: isLiked ? "red" : "darkgray" }}
          title={isLiked ? "Ulubione" : "Polub"}
          onClick={likeComment}
          className={styles.comment__body__like}
        />
        <p>{body}</p>
        <div className={styles.comment__body__author}>
          <p>{email}</p>
        </div>
      </div>
    </li>
  );
};

export default Comment;
