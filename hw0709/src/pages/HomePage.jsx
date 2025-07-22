import { useEffect, useState } from "react";
import client from "../api/client";
import PostGrid from "../components/PostGrid";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.get("/boards");
        console.log("GET /boards 응답", data);
        setPosts(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>로딩 중…</p>;

  return <PostGrid posts={posts} />;
}

export default HomePage;
