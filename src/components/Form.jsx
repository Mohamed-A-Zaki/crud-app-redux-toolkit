import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_post } from "../redux/postsSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  function handle_add_post(e) {
    e.preventDefault();
    dispatch(add_post({ title, body }));
    setTitle("");
    setBody("");
  }

  return (
    <form>
      <div className="heading">
        <h3>Create Post</h3>
      </div>

      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter post content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <button onClick={handle_add_post}>Add post</button>
    </form>
  );
};

export default Form;
