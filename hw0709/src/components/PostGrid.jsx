// // src/components/PostGrid.jsx

import styled from "styled-components";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

const Grid = styled.section`
  display: grid;
  gap: 40px;
  width: 100%;
  padding: 0;
  grid-auto-rows: 1fr;

  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(320px, 1fr));
  }
`;

function PostGrid({ posts }) {
  return (
    <Grid>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <PostCard post={post} />
        </Link>
      ))}
    </Grid>
  );
}

export default PostGrid;
