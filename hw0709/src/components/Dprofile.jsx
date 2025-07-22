// src/components/Dprofile.jsx
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin: 64px 0 56px;
  padding: 0 0 32px;
  border-bottom: 1px solid #e9ecef;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
`;

const Nickname = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #212529;
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

function Dprofile({
  nickname = "unknown",
  avatarUrl = "https://i.pravatar.cc/100",
}) {
  return (
    <Wrapper>
      <UserBox>
        <Avatar src={avatarUrl} alt={nickname} />
        <Nickname>{nickname}</Nickname>
      </UserBox>

      <FollowBtn disabled>팔로우</FollowBtn>
    </Wrapper>
  );
}

export default Dprofile;
