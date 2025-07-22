import React from "react";
import styled from "styled-components";
import { FiSearch, FiBell } from "react-icons/fi";

const Wrapper = styled.header`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const LogoImg = styled.img`
  height: 32px;
  cursor: pointer;
  display: block;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
`;

const LoginBtn = styled.button`
  padding: 7px 20px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  color: #ffffff;
  background: #000000;
  cursor: pointer;
  font-weight: bold;
`;

function Header() {
  return (
    <Wrapper>
      <LogoImg src="/velog.png" alt="velog logo" />
      <IconGroup>
        <FiBell />
        <FiSearch />
        <LoginBtn>로그인</LoginBtn>
      </IconGroup>
    </Wrapper>
  );
}

export default Header;
