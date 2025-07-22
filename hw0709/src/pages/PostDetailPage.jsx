// src/pages/PostDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../api/client";

import styled from "styled-components";

import Dmenu from "../components/Dmenu";
import Dheart from "../components/Dheart";
import Dnext from "../components/Dnext";
import Dword from "../components/Dword";

const Page = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 32px;
  max-width: 100%;
  width: fit-content;
  margin: 0 auto;
`;

const LeftRail = styled.div`
  position: sticky;
  top: 200px;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.article`
  max-width: 720px;
  margin: 0;
  padding: 32px 0;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 24px;
`;

const Thumb = styled.img`
  width: 100%;
  margin: 9px 0;
  border-radius: 6px;
`;

const Content = styled.p`
  font-size: 17px;
  line-height: 1.75;
  white-space: pre-wrap;
`;

function PostDetailPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.get(`/boards/${id}`);
        setPost(data);
      } catch {
        alert("존재하지 않는 글입니다");
        nav("/", { replace: true });
      }
    })();
  }, [id, nav]);

  if (!post) return null;

  return (
    <Page>
      <LeftRail>
        <Dheart count={post.heartCount} />
      </LeftRail>

      <Main>
        <Title>{post.title}</Title>
        <Dmenu writer={post.writerName} date={post.createdAt} />
        <Dword />

        {post.thumbnailUrl && (
          <Thumb src={post.thumbnailUrl} alt={post.title} />
        )}

        <Content>{post.content}</Content>
        <Dnext currentId={post.id} />
      </Main>
    </Page>
  );
}

export default PostDetailPage;
