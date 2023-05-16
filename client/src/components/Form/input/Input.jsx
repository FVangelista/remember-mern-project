import { useState } from "react";

const Input = ({ item, setPostData, postData }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  const handleChange = (e) => {
    if (item === "Creator") {
      setPostData({ ...postData, creator: e.target.value });
    } else if (item === "Title") {
      setPostData({ ...postData, title: e.target.value });
    } else if (item === "Message") {
      setPostData({ ...postData, message: e.target.value });
    } else if (item === "Tags") {
      setPostData({ ...postData, tags: e.target.value.split(",") });
    }
  };

  const handleValue = (item) => {
    if (item === "Creator") return postData.creator;
    if (item === "Title") return postData.title;
    if (item === "Message") return postData.message;
    if (item === "Tags") return postData.tags;
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={item}
        className={`${
          isActive
            ? "opacity-1 bg-wh-50 absolute animate-active text-wh-300 tracking-wide"
            : "opacity-0 animate-reverse "
        } absolute bottom-[32px] right-4 w-20 px-2 transition-all duration-1000 ease-in-out text-start capitalize`}
      >
        {item}
      </label>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        className="bg-wh-50 border-[.9px] border-wh-300 w-full p-3 rounded-md outline-none text-wh-500 placeholder:focus:text-transparent"
        id={item}
        placeholder={item}
        value={handleValue(item)}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
export default Input;
