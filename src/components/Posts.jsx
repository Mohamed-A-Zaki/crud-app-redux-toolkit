import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_post, remove_post } from "../redux/postsSlice";

const Posts = () => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedBody, setUpdatedBody] = useState("");

  const [updated_id, setUpdated_id] = useState(-1);

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div className="posts">
      <div className="heading">
        <h3>Posts List</h3>
      </div>

      {posts.map(({ id, title, body }) => {
        return (
          <div className="post" key={id}>
            <div className="post-heading">
              <h3 className="post-title">{title}</h3>
              <div className="post-number">{id}</div>
            </div>
            <div className="post-content">{body}</div>
            <div className="post-controls">
              <button
                className="edit"
                onClick={() => {
                  setUpdated_id(id);
                }}
              >
                Edit Post
              </button>
              <button
                className="delete"
                onClick={() => dispatch(remove_post({ id }))}
              >
                Delete Post
              </button>
            </div>

            {updated_id === id ? (
              <div className="update-post">
                <form style={{ width: "100%" }}>
                  <input
                    type="text"
                    placeholder="Edit title"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                  />

                  <textarea
                    placeholder="Edit content"
                    value={updatedBody}
                    onChange={(e) => setUpdatedBody(e.target.value)}
                  ></textarea>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(edit_post({ id, updatedTitle, updatedBody }));
                      setUpdated_id(-1);
                    }}
                  >
                    Edit
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
