import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <HeaderRogo>
          <TripleImg
            style={{ width: "68px" }}
            alt="Triple"
            src="https://assets.triple.guide/images/img_intro_logo_dark.svg"
          />
        </HeaderRogo>
        <HeaderReservation>내 예약</HeaderReservation>
      </HeaderWrap>
    </>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  height: 80px;
  padding: 0px 42px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(239, 239, 239);
  box-sizing: border-box;
`;

const HeaderRogo = styled.div`
  display: inline-flex;
  height: 44px;
  width: 84px;
  padding: 10px 8px;
  align-items: center;
`;

const TripleImg = styled.img`
  width: 68px;
  height: 24px;
`;

const HeaderReservation = styled.div`
  display: inline-flex;
  padding: 10px 8px;
  align-items: center;
  font-size: 17px;
  color: rgba(58, 58, 58, 0.8);
`;

export default Header;
