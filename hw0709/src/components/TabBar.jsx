// src/components/TabBar.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { FiTrendingUp, FiClock, FiRss, FiMoreVertical } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 0;
  padding: 0 8px;
`;

const Tabs = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Tab = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #606060;
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    css`
      color: #000;
      font-weight: 700;

      &::after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 3px;
        background: #000;
        border-radius: 2px;
      }
    `}

  svg {
    font-size: 17px;
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MonthBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 7px 14px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
`;

const MoreBtn = styled.button`
  font-size: 21px;
  border: none;
  background: none;
  cursor: pointer;
`;

function TabBar() {
  const { pathname } = useLocation();
  if (pathname !== "/") return null;

  return (
    <Wrapper>
      <Tabs>
        <Tab $active>
          <FiTrendingUp />
          트렌딩
        </Tab>
        <Tab>
          <FiClock />
          최신
        </Tab>
        <Tab>
          <FiRss />
          피드
        </Tab>
      </Tabs>

      <RightGroup>
        <MonthBtn>
          이번 달 <MdExpandMore />
        </MonthBtn>
        <MoreBtn>
          <FiMoreVertical />
        </MoreBtn>
      </RightGroup>
    </Wrapper>
  );
}

export default TabBar;
