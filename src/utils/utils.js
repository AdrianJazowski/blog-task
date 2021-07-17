/** @format */

export const setPostsInLocalStorage = (postsArray) => {
  localStorage.setItem("likedPosts", JSON.stringify(postsArray));
};
export const setCommentsInLocalStorage = (commentsArray) => {
  localStorage.setItem("likedComments", JSON.stringify(commentsArray));
};
export const getLikedPostsFromLocalStorage = () => {
  let localStorageUser;

  if (localStorage.getItem("likedPosts")) {
    localStorageUser = JSON.parse(localStorage.getItem("likedPosts"));
  } else {
    localStorageUser = [];
  }
  return localStorageUser;
};
export const getLikedCommentsFromLocalStorage = () => {
  let localStorageUser;

  if (localStorage.getItem("likedComments")) {
    localStorageUser = JSON.parse(localStorage.getItem("likedComments"));
  } else {
    localStorageUser = [];
  }
  return localStorageUser;
};
