import React from "react";
import styled from "styled-components";
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
            <SectionText>
              <div>
                <strong>
                  <span>700</span>만 명
                </strong>
                의 여행자
              </div>
              <div>
                <strong>
                  <span>100</span>만 개
                </strong>
                의 여행 리뷰
              </div>
              <div>
                <strong>
                  <span>470</span>만 개
                </strong>
                의 여행 일정
              </div>
            </SectionText>
            <StoreBox>
              <img alt="play_store" src={play_store2x} />
              <p>
                2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
              </p>
              <img alt="badge_apple" src={badge_apple4x} />
              <p>
                2018 애플 앱스토어 <br /> 올해의 여행앱 선정
              </p>
            </StoreBox>
          </SectionRight>
        </div>
      </SectionWrap>
    </>
  );
};

const SectionWrap = styled.div`
  height: 522px;
  font-family: sans-serif;
  & > div {
    display: flex;
    padding: 150px 0px 0px 0px;
    justify-content: center;
  }
`;

const TripleImg = styled.div`
  height: 338px;
  width: 400px;
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

const SectionText = styled.div`
  & > div {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 13px;
    color: rgb(58, 58, 58);
  }
`;

const StoreBox = styled.div`
  display: inline-flex;
  margin-top: 35px;
  & > img {
    height: 54px;
  }
  & > p {
    font-size: 14px;
    font-weight: bold;
    color: rgba(58, 58, 58, 0.8);
    margin: 0 39px 0 0;
    padding: 5px 0 0 8px;
    line-height: 22px;
  }
`;

export default Section;
