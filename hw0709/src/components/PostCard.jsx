import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const Card = styled.article`
  background: #fff;
  border: 1px solid #e3e0e0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 0 8px;
  max-width: 400px;
  height: 430px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px;
`;

const Content = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 0 12px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #999;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #666;
`;

const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6.4px;
`;

const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;
`;

const LikeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
`;

const Divider = styled.div`
  height: 1px;
  background: #eee;
  margin: 12px 0 8px;
`;

const Spacer = styled.div`
  flex: 1;
`;

function PostCard({ post }) {
  const thumbSrc = (() => {
    const raw = post.thumbnailUrl;
    if (!raw) return "/placeholder.png";
    if (/^https?:\/\//.test(raw)) return raw;
    const base = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");
    return base + (raw.startsWith("/") ? raw : "/" + raw);
  })();
  const author = post.writerName ?? "unknown";
  const avatarSrc = post.writerProfileUrl ?? "https://i.pravatar.cc/40";
  const likes = post.heartCount ?? 0;
  const comments = post.commentCount ?? 0;
  const dateText = new Date(post.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card>
      <Thumbnail src={thumbSrc} alt={post.title} />
      <Body>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
        <Spacer />
        <DateText>
          {dateText} · {comments}개의 댓글
        </DateText>
        <Divider />
        <Footer>
          <AuthorGroup>
            <Avatar src={avatarSrc} alt={author} />
            <span>by {author}</span>
          </AuthorGroup>
          <LikeGroup>
            <FaHeart style={{ fill: "#000" }} />
            {likes}
          </LikeGroup>
        </Footer>
      </Body>
    </Card>
  );
}

export default PostCard;
