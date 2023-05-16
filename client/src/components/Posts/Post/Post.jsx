import { AiFillLike, AiFillDelete } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ data, setCurrentId }) => {
  const dispatch = useDispatch();
  const {
    _id,
    title,
    creator,
    message,
    tags,
    selectedFile,
    createdAt,
    likeCount,
  } = data;

  const handleClick = () => {
    setCurrentId(_id);
  };

  return (
    <div className="bg-wh-50 w-72 sm:w-80 h-[375px] rounded-md">
      <div className="relative h-[45%] w-full">
        <div className="absolute top-0 left-0 z-10 h-full w-full px-3 py-4 bg-gradient-to-t from-clr-black-a to-clr-black rounded-t-md">
          <p className="flex items-center justify-between text-wh-50 text-lg">
            <span>{creator}</span>
            <span onClick={handleClick} className="cursor-pointer">
              <BiDotsVertical />
            </span>
          </p>
          <p className="text-wh-50 font-extralight text-xs mt-1">
            {moment(createdAt).fromNow()}
          </p>
        </div>
        <img
          src={selectedFile}
          alt={title}
          className="absolute top-0 left-0 h-full object-cover w-full rounded-t-md"
          height="60"
        />
      </div>
      <div className="h-[55%] px-3 py-4 flex flex-col justify-between">
        <h5 className="text-xs text-wh-300">{tags.map((tag) => `#${tag} `)}</h5>
        <h2 className="text-2xl text-wh-900 font-bold capitalize tracking-wide ">
          {title}
        </h2>
        <p className="text-wh-500">{message}</p>
        <div className="flex justify-between ">
          <span
            className="flex items-center gap-1 text-md cursor-pointer text-blue-500"
            onClick={() => dispatch(likePost(_id))}
          >
            <AiFillLike />
            LIKE {likeCount}
          </span>
          <span
            className="flex items-center gap-1 text-md cursor-pointer text-red-500"
            onClick={() => dispatch(deletePost(_id))}
          >
            <AiFillDelete />
            DELETE
          </span>
        </div>
      </div>
    </div>
  );
};
export default Post;
