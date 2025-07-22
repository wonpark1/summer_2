import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import client from "../api/client";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 48px 0;
  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Card = styled.div`
  flex: 1 1 0;
  background: #f8f9fa;
  border: 1px solid #f1f3f5;
  border-radius: 6px;
  padding: 20px 24px;
  min-height: 72px;
  box-shadow: rgba(0, 0, 0, 0.06) 0 0 4px;
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  @media (min-width: 720px) {
    max-width: 420px;
  }
  ${({ $reverse }) =>
    $reverse &&
    css`
      flex-direction: row-reverse;
      text-align: right;
    `}
`;

const Circle = styled(Link)`
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 50%;
  border: 2px solid #20c997;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #20c997;
`;

const Label = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #20c997;
`;

const PostTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #495057;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: hidden;
`;

function Dnext({ currentId }) {
  const id = Number(currentId) || 0;
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    if (!id) return;
    if (id > 1) {
      client
        .get(`/boards/${id - 1}`)
        .then((res) => setPrevPost(res.data))
        .catch(() => setPrevPost(null));
    }
    client
      .get(`/boards/${id + 1}`)
      .then((res) => setNextPost(res.data))
      .catch(() => setNextPost(null));
  }, [id]);

  return (
    <Wrapper>
      <Card>
        <Circle
          as={prevPost ? Link : "div"}
          to={prevPost ? `/boards/${prevPost.id}` : undefined}
        >
          <FiArrowLeft size={24} />
        </Circle>
        {prevPost && (
          <Meta>
            <Label>이전 포스트</Label>
            <PostTitle>{prevPost.title}</PostTitle>
          </Meta>
        )}
      </Card>

      <Card $reverse>
        <Circle
          as={nextPost ? Link : "div"}
          to={nextPost ? `/boards/${nextPost.id}` : undefined}
        >
          <FiArrowRight size={24} />
        </Circle>
        {nextPost && (
          <Meta style={{ textAlign: "right" }}>
            <Label>다음 포스트</Label>
            <PostTitle>{nextPost.title}</PostTitle>
          </Meta>
        )}
      </Card>
    </Wrapper>
  );
}

export default Dnext;
