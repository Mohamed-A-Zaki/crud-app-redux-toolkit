import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",

  initialState: {
    posts: [],
  },

  reducers: {
    add_post: (state, { payload }) => {
      // create new_post
      let new_post = {
        id: state.posts.length + 1,
        title: payload.title,
        body: payload.body,
      };

      // push new_post to posts array
      state.posts.push(new_post);
    },

    remove_post: (state, { payload }) => {
      state.posts = state.posts.filter(({ id }) => id !== payload.id);
    },

    edit_post: (state, { payload }) => {
      const { id, updatedTitle, updatedBody } = payload;
      let post = state.posts.find((ele) => ele.id === id);
      post.title = updatedTitle;
      post.body = updatedBody;
    },
  },
});

export const { add_post, remove_post, edit_post } = postsSlice.actions;

export default postsSlice.reducer;
