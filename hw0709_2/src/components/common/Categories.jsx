import { styled } from "styled-components";
const List = styled.div`
  width: 80%;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  gap: 55px;
  margin: 30px auto;
  padding: 15px;
`;

const Category = styled.div`
  color: #fff;
`;
function Categories() {
  return (
    <List>
      <Category>전체</Category>
      <Category>스포츠</Category>
      <Category>연예</Category>
      <Category>경제</Category>
    </List>
  );
}
export default Categories;
