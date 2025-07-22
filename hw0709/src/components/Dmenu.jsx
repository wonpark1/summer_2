// src/components/Dmenu.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15.2px;
  color: #4d4d4d;
  margin: 4px 0 20px;
`;

const Author = styled.strong`
  font-weight: 700;
`;

const Dot = styled.span`
  &::before {
    content: "·";
    margin: 0 5.6px;
  }
`;

const FollowBtn = styled.button`
  margin-left: auto;
  padding: 7.2px 17.6px;
  font-size: 14.4px;
  border-radius: 30px;
  font-weight: 600;
  cursor: default;
  background: #fff;
  color: #24c18e;
  border: 1px solid #24c18e;
`;

function Dmenu({ writer, date }) {
  const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Wrapper>
      <Author>{writer}</Author>
      <Dot />
      {formattedDate}
      <FollowBtn disabled>팔로우</FollowBtn>
    </Wrapper>
  );
}

export default Dmenu;
