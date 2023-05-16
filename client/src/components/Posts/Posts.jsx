import { useSelector } from "react-redux";
import Post from "./Post/Post";
import Spinner from "../Spinner/Spinner";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="  p-4 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7">
      {!posts.length ? (
        <div className="absolute left-8 top-3/4  md:top-1/2 text-center">
          <Spinner />
        </div>
      ) : (
        posts.map((item, i) => (
          <Post key={i} data={item} setCurrentId={setCurrentId} />
        ))
      )}
    </section>
  );
};
export default Posts;
