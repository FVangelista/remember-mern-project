import { useEffect, useState } from "react";
import Input from "./input/Input";
import FileBase from "react-file-base64";

import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const inputs = ["Creator", "Title", "Message", "Tags"];

const Form = ({ setCurrentId, currentId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) setPostData(post);
    // console.log(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    handleReset();
  };

  const handleReset = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`md:absolute right-6 bg-wh-50 text-wh-500 w-72 sm:w-80 p-8 rounded-md flex flex-col justify-center items-center gap-7`}
    >
      <h2 className="text-2xl font-bold">
        {currentId ? "Editing" : "Create"} Memories
      </h2>

      {inputs.map((item, i) => (
        <Input
          key={i}
          item={item}
          setPostData={setPostData}
          postData={postData}
        />
      ))}

      <div className="w-full">
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 w-full mt-3 py-3 rounded-md text-wh-50 tracking-wide font-semibold cursor-pointer uppercase"
        >
          SUBMIT
        </button>

        <input
          type="reset"
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-400 w-full mt-3 py-1 rounded-md text-wh-50 tracking-wide uppercase cursor-pointer"
        />
      </div>
    </form>
  );
};
export default Form;
