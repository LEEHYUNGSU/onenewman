"use client";

import React from "react";
import styled from "styled-components";
import {
  FallIcon,
  SpringIcon,
} from "../../Icons/HomeIcons";
import Link from "next/link";

const HomeContainer2 = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeasonBox = styled.div`
  width: 60px;
  height: 80px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;

const SeasonTop = styled.div`
  width: 60px;
  height: 60px;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const SeasonText = styled.div`
  width: 60px;
  height: 40px;
  padding-top: 5px;
  align-items: center;
  font-size: 13px;
  text-align: center;
`;

const HomePart2 = () => {
  return (
    <HomeContainer2>
      <Link href="/summary">
        <SeasonBox>
          <SeasonTop>
            <SpringIcon />
          </SeasonTop>
          <SeasonText>절기 강의</SeasonText>
        </SeasonBox>
      </Link>

      <SeasonBox>
        <SeasonTop>
          <FallIcon />
        </SeasonTop>
        <SeasonText>드리는 글</SeasonText>
      </SeasonBox>
     
    </HomeContainer2>
  );
};

export default HomePart2;
