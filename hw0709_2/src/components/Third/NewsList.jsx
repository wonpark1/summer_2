import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../common/Title";
import Categories from "../common/Categories";
import styled from "styled-components";

const List = styled.ul`
  width: 80%;

  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  row-gap: 2.5rem; /* 카드끼리 간격 */
`;
const Item = styled.li`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
`;
const Thumb = styled.img`
  flex-shrink: 0; /* 이미지 크기 고정 */
  width: 120px;
  height: 75px;
  object-fit: cover;
  border-radius: 4px;
`;
const Headline = styled.span`
  font-size: 15px;
  line-height: 1.35;
`;

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
        setArticles(data.articles);
      } catch (err) {
        setError("뉴스를 불러오지 못했습니다 🥲");
        console.error(err);
      }
    })();
  }, []);

  // 2) 에러 처리
  if (error) return <p>{error}</p>;

  // 3) 로딩 상태
  if (articles.length === 0)
    return (
      <>
        <Title title="멋사 NEWS" />
        <Categories />
        <p style={{ textAlign: "center" }}>데이터를 불러오는 중입니다...</p>
      </>
    );

  // 4) 정상 렌더
  return (
    <>
      <Title title="멋사 NEWS" />
      <Categories />
      <List>
        {articles.map((a) => (
          <Item key={a.url}>
            <Thumb src={a.urlToImage || "/fallback.jpg"} alt={a.title} />
            <Headline>{a.title}</Headline>
          </Item>
        ))}
      </List>
    </>
  );
}

export default NewsList;
