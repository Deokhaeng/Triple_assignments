import React from "react";
import styled, { keyframes } from "styled-components";
import CountUp from "./CountUp";
import triple2x from "../shared/images/triple2x.png";
import play_store2x from "../shared/images/play-store2x.png";
import badge_apple4x from "../shared/images/badge-apple4x.png";

const Section = () => {
  return (
    <>
      <SectionWrap>
        <div>
          <TripleImg src={triple2x}>
            <TripleText>2021년 12월 기준</TripleText>
          </TripleImg>
          <SectionRight>
            <SectionCount>
              <div>
                <strong>
                  <CountUp end={700} />만 명
                </strong>
                의 여행자
              </div>
              <div>
                <strong>
                  <CountUp end={100} />만 개
                </strong>
                의 여행 리뷰
              </div>
              <div>
                <strong>
                  <CountUp end={470} />만 개
                </strong>
                의 여행 일정
              </div>
            </SectionCount>
            <StoreBox>
              <div>
                <img alt="play_store" src={play_store2x} />
                <p>
                  2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
                </p>
              </div>
              <div>
                <img alt="badge_apple" src={badge_apple4x} />
                <p>
                  2018 애플 앱스토어 <br /> 올해의 여행앱 선정
                </p>
              </div>
            </StoreBox>
          </SectionRight>
        </div>
      </SectionWrap>
    </>
  );
};

const boxFade = keyframes`
  0% {
    transform: translate(10px 10px);
    margin-top: 10px;
    opacity: 0;
  }
  100% {
    transform: translate(50px 50px);
    margin-top: 0px;
    opacity: 1;
  }
`;

const SectionWrap = styled.div`
  font-family: sans-serif;
  min-height: 522px;
  & > div {
    position: relative;
    display: flex;
    padding: 150px 0px 0px 0px;
    justify-content: center;
  }
`;

const TripleImg = styled.div`
  height: 338px;
  width: 400px;
  font-size: 15px;
  animation: ${boxFade} 700ms linear alternate;
  background-size: cover;
  ${({ src }) => `background-image: url(${src});`};
`;

const TripleText = styled.div`
  padding-top: 280px;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
`;

const SectionRight = styled.div`
  margin: 0 0 0 223px;
`;

const SectionCount = styled.div`
  & > div {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 13px;
    width: 446.06px;
    color: rgb(58, 58, 58);
    animation: ${boxFade} 700ms 100ms linear alternate;
  }
`;

const StoreBox = styled.div`
  display: inline-flex;
  width: 100%;
  padding-top: 35px;
  animation: ${boxFade} 700ms 200ms linear alternate;
  & div > img {
    position: absolute;
    height: 54px;
  }
  & div > p {
    font-size: 14px;
    font-weight: bold;
    color: rgba(58, 58, 58, 0.8);
    margin: 0 39px 0 0;
    padding: 5px 0 0 60px;
    line-height: 22px;
  }
`;

export default Section;
