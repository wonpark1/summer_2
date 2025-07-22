// src/components/Dheart.jsx
import styled from "styled-components";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const Rail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  background: #f8f9fa;
  border: 1px solid #ececec;
  border-radius: 32px;
  padding: 10px 10px;
  gap: 8px;
`;

const CircleBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #dcdfe1;
  background: #ffffff;
  color: #6d7378;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: default;
`;

const Count = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #000000;
`;

function Dheart({ count = 0 }) {
  return (
    <Rail>
      <CircleBtn>
        <FaHeart />
      </CircleBtn>
      <Count>{count}</Count>
      <CircleBtn>
        <FaShareAlt />
      </CircleBtn>
    </Rail>
  );
}

export default Dheart;
