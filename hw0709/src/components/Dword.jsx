import styled from "styled-components";

const TagList = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 22px 0 40px;
  padding: 0;
  list-style: none;
`;

const TagChip = styled.li`
  background: #f1f3f5;
  color: #20c997;
  font-size: 15px;
  font-weight: 500;
  padding: 6px 18px;
  border-radius: 30px;
  white-space: nowrap;
`;

const FIXED_TAGS = ["AI개발", "API테스트", "Programmer", "개발효율화"];

function Dword() {
  return (
    <TagList>
      {FIXED_TAGS.map((t) => (
        <TagChip key={t}>{t}</TagChip>
      ))}
    </TagList>
  );
}

export default Dword;
