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
export const addOrRemoveCommentToLiked = (id) => ({
  type: actionsTypes.LIKE_OR_UNLIKE_COMMENT,
  payload: id,
});
