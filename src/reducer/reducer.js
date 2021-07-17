/** @format */

import { actionsTypes } from "../actions/actionsTypes";
import {
  getLikedCommentsFromLocalStorage,
  getLikedPostsFromLocalStorage,
} from "../utils/utils";

const initialState = {
  posts: [],
  likedPost: getLikedPostsFromLocalStorage(),
  likedComments: getLikedCommentsFromLocalStorage(),
  temporaryCommentBoard: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.GET_POST_FROM_API:
      return {
        ...state,
        posts: [...payload],
      };
    case actionsTypes.LIKE_OR_UNLIKE_POST:
      return {
        ...state,
        likedPost: [...payload],
      };
    case actionsTypes.LIKE_OR_UNLIKE_COMMENT:
      return {
        ...state,
        likedComments: [...payload],
      };

    default:
      return state;
  }
};

export default reducer;
