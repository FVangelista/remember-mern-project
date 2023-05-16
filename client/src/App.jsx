import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ParticlesBg from "./components/Particles/ParticlesBg";
import Posts from "./components/Posts/Posts";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <main className="relative flex max-w-[1440px] mx-auto">
      <div className="z-0">
        <ParticlesBg />
      </div>
      <Header />
      <div className="min-h-[100vh] w-fit  ml-[80px] sm:m-auto md:ml-[140px] px-4 py-8 flex flex-col md:flex-row-reverse items-center md:items-start md:justify-start  gap-7 z-10">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Posts setCurrentId={setCurrentId} />
      </div>
    </main>
  );
}

export default App;
