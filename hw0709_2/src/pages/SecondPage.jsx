import { useState, useEffect } from "react";
import {
  SecondWrapper,
  Ranking,
  RankingDes,
  RankingWrapper,
  RankingDesWrapper,
  Caution,
} from "../components/Second/Styled";
import Title from "../components/common/Title";
import axios from "axios";

const SecondPage = () => {
  // State 작성 -------------------------------------------------------------
  //OPEN API 비동기로 불러와 state에 저장 및 불러오기 ---------------------------------//
  //useState 사용하기
  const [weather, setWeather] = useState([]);
  const { VITE_APP_API_KEY } = import.meta.env;

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/50/`
      );
      if (res.status === 200) {
        // //미세먼지 농도가 가장 높은 3곳만을 가져오고 싶어요! 그렇다면 sort 메서드를 사용해주면 됩니다!
        const sortedData = res.data.RealtimeCityAir.row.sort(
          (a, b) => b.PM10 - a.PM10
        );
        console.log(sortedData[0]);
        setWeather(sortedData);
      }
    } catch (err) {
      alert(err);
    }
  };
  //컴포넌트가 마운트될 때 한 번 실행되도록 -------------------------------------------------------------

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("날씨", weather);
  });

  return (
    <>
      <Title title={"지금 서울에서 미세먼지 농도가 가장 높은 지역 TOP 3"} />
      <SecondWrapper>
        {/* {데이터 저장할 state.length > 0 ? ( */}
        <>
          <RankingWrapper>
            <Ranking>1위: {weather[0].MSRSTE_NM}</Ranking>
            <Ranking>2위: {weather[1].MSRSTE_NM}</Ranking>
            <Ranking>3위: {weather[2].MSRSTE_NM}</Ranking>
          </RankingWrapper>

          <RankingDesWrapper>
            <RankingDes>
              1위인 "{}"의 현재 미세먼지 농도는 "{}"
            </RankingDes>
            <RankingDes>
              2위인 "{}"의 현재 미세먼지 농도는 "{}"
            </RankingDes>
            <RankingDes>
              3위인 "{}"의 현재 미세먼지 농도는 "{}"
            </RankingDes>
          </RankingDesWrapper>
          <Caution>마스크 꼭 쓰고 댕기세요 ~!</Caution>
        </>
        ) : (<p>데이터를 불러오는 중입니다...</p>)
      </SecondWrapper>
    </>
  );
};

export default SecondPage;
