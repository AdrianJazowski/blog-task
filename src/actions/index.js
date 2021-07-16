/** @format */

import { actionsTypes } from "./actionsTypes";

export const getPostFromApiAction = (posts) => ({
  type: actionsTypes.GET_POST_FROM_API,
  payload: posts,
});
export const addOrRemovePostToLiked = (id) => ({
  type: actionsTypes.LIKE_OR_UNLIKE_POST,
  payload: id,
});
export const addToTemporaryCommentBoard = (comments) => ({
  type: actionsTypes.ADD_TO_TEMPORARY_COMMENT_BOARD,
  payload: comments,
});
export const addOrRemoveCommentToLiked = (id) => ({
  type: actionsTypes.LIKE_OR_UNLIKE_COMMENT,
  payload: id,
});
