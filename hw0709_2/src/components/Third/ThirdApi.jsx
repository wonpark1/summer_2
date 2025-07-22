import { useState } from "react";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";
import NewsList from "./NewsList";

const ThirdApi = () => {
  //state 작성
  const [News, setNews] = useState([]);

  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`
      );
      if (res.status === 200) {
        console.log(res);
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
        </BtnContainer>
      </BtnWrapper>
    </>
  );
};

export default ThirdApi;
